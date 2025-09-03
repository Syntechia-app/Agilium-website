import { useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

type ChatbotPosition = "bottom-right" | "bottom-left" | "full";

export interface ChatbotProps {
  width?: number | string;
  height?: number | string;
  maxHeight?: string;
  position?: ChatbotPosition;
  display?: "panel" | "dialog";
  showQuickReplies?: boolean;
  quickReplies?: string[];
  radius?: "md" | "lg" | "xl" | "2xl";
  padding?: "sm" | "md" | "lg";
  bubbleMaxWidth?: number; // percentage of container width (0-100)
  headerTitle?: string;
  onlineBadgeText?: string;
  placeholder?: string;
  theme?: {
    backgroundFrom?: string;
    backgroundTo?: string;
    border?: string;
    userBubbleBg?: string;
    userText?: string;
    botBubbleBg?: string;
    botText?: string;
    primaryButtonBg?: string;
    primaryButtonHoverBg?: string;
    highlight?: string;
    typingDot?: string;
  };
}

export function Chatbot(props: ChatbotProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm AgiliumBot. How can I help you learn more about our services today?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollRegionRef = useRef<HTMLDivElement | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  const quickRepliesDefault = [
    "Tell me about your services",
    "What is digital transformation?",
    "How can AI help my business?",
    "Contact information",
    "Request a consultation",
  ];

  const botResponses: { [key: string]: string } = {
    services:
      "We offer 8 main service categories: Digital Solutions, Data & Analytics, Security & Compliance, Network Infrastructure, Advisory & Transformation, Banking & Financial Solutions, AI Solutions, and IoT Solutions. Which area interests you most?",
    "digital transformation":
      "Digital transformation is the process of using digital technologies to create new or modify existing business processes, culture, and customer experiences. We help organizations modernize their operations, improve efficiency, and stay competitive in the digital age.",
    ai: "AI can revolutionize your business through automation, predictive analytics, enhanced decision-making, and improved customer experiences. Our AI solutions include machine learning, computer vision, natural language processing, and generative AI implementations.",
    contact:
      "You can reach us at info@agiliumtech.com or call +1 (555) 123-4567. Our business hours are Monday-Friday 9AM-6PM, Saturday 10AM-4PM. We're located at 123 Innovation Drive, Tech City, TC 12345.",
    consultation:
      "I'd be happy to help you request a consultation! Please use our contact form above or email us directly at info@agiliumtech.com with your requirements, and our team will get back to you within 24 hours.",
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Backend response (fallbacks to canned if API fails)
    (async () => {
      setIsTyping(true);
      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: [...messages, userMessage].map((m) => ({
              role: m.isBot ? "assistant" : "user",
              content: m.text,
            })),
          }),
        });
        const json = await res.json();
        const text = json?.reply || "Thanks for reaching out!";
        const botMessage: Message = {
          id: messages.length + 2,
          text,
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } catch {
        const lowerInput = inputValue.toLowerCase();
        let botResponse =
          "Thank you for your message! For specific inquiries, please contact us at info@agiliumtech.com or use our contact form above.";
        for (const [keyword, response] of Object.entries(botResponses)) {
          if (lowerInput.includes(keyword)) {
            botResponse = response;
            break;
          }
        }
        const botMessage: Message = {
          id: messages.length + 2,
          text: botResponse,
          isBot: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, botMessage]);
      } finally {
        setIsTyping(false);
      }
    })();

    setInputValue("");
  };

  const handleQuickReply = (reply: string) => {
    setInputValue(reply);
    handleSendMessage();
  };

  // Auto-scroll to newest message whenever messages change
  useEffect(() => {
    if (!scrollRegionRef.current) return;
    scrollRegionRef.current.scrollTop = scrollRegionRef.current.scrollHeight;
  }, [messages, isOpen]);

  // Keyboard shortcuts: Ctrl+Enter to send
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
        e.preventDefault();
        handleSendMessage();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [isOpen, inputValue, messages]);

  const {
    width = 384, // md:w-96
    height = 500,
    maxHeight = "calc(100dvh - 7rem)",
    position = "bottom-right",
    display = "panel",
    showQuickReplies = true,
    quickReplies = quickRepliesDefault,
    radius = "xl",
    padding = "md",
    bubbleMaxWidth = 80,
    headerTitle = "AgiliumBot",
    onlineBadgeText = "Online",
    placeholder = "Type your message...",
    theme = {
      backgroundFrom: "var(--brand-ink)",
      backgroundTo: "#0B1B3A",
      border: "rgba(29,78,216,0.5)",
      userBubbleBg: "var(--brand-blue)",
      userText: "#ffffff",
      botBubbleBg: "rgba(30,64,175,0.5)",
      botText: "#bfdbfe",
      primaryButtonBg: "var(--brand-blue)",
      primaryButtonHoverBg: "var(--brand-cyan)",
      highlight: "var(--brand-cyan)",
      typingDot: "#93c5fd",
    },
  } = props;

  // Local display mode to allow pop-out/dock toggle without re-mounting parent
  const [displayMode] = useState<typeof display>(display);

  // Drag state (dialog mode)
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartPos = useRef<{
    x: number;
    y: number;
    top: number;
    left: number;
  } | null>(null);
  const [dialogPos, setDialogPos] = useState<{
    top: number;
    left: number;
  } | null>(null);

  const containerPositionClass = useMemo(() => {
    switch (position) {
      case "bottom-left":
        return "left-6 md:left-6 right-auto";
      case "full":
        return "inset-x-4 md:inset-auto right-6";
      default:
        return "right-6";
    }
  }, [position]);

  // Drag handlers
  const onDragStart = (e: React.MouseEvent) => {
    if (displayMode !== "dialog") return;
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    dragStartPos.current = {
      x: e.clientX,
      y: e.clientY,
      top: rect.top,
      left: rect.left,
    };
    setIsDragging(true);
    window.addEventListener("mousemove", onDragMove);
    window.addEventListener("mouseup", onDragEnd);
  };

  const onDragMove = (e: MouseEvent) => {
    if (!dragStartPos.current) return;
    const dx = e.clientX - dragStartPos.current.x;
    const dy = e.clientY - dragStartPos.current.y;
    let nextTop = dragStartPos.current.top + dy;
    let nextLeft = dragStartPos.current.left + dx;
    // Clamp to viewport
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const rect = cardRef.current?.getBoundingClientRect();
    const w = rect?.width ?? 360;
    const h = rect?.height ?? 500;
    nextTop = Math.max(8, Math.min(vh - h - 8, nextTop));
    nextLeft = Math.max(8, Math.min(vw - w - 8, nextLeft));
    setDialogPos({ top: nextTop, left: nextLeft });
  };

  const onDragEnd = () => {
    setIsDragging(false);
    dragStartPos.current = null;
    window.removeEventListener("mousemove", onDragMove);
    window.removeEventListener("mouseup", onDragEnd);
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        aria-label={isOpen ? "Close chat" : "Open chat"}
        aria-expanded={isOpen}
        aria-controls="agilium-chat-window"
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[color:var(--brand-blue)] hover:bg-[color:var(--brand-cyan)] shadow-2xl z-50 transition-all duration-300 hover:scale-110"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </Button>

      {/* Backdrop for dialog mode */}
      {isOpen && display === "dialog" && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card
          id="agilium-chat-window"
          role="dialog"
          aria-label="AgiliumBot chat"
          aria-modal={displayMode === "dialog"}
          className={`fixed ${
            displayMode === "dialog"
              ? `${dialogPos ? "" : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"}`
              : `bottom-24 ${containerPositionClass} md:right-6`
          } w-[min(100vw-2rem,_${typeof width === "number" ? `${width}px` : width})] md:w-96 backdrop-blur-lg z-50 flex flex-col ${
            radius === "2xl"
              ? "rounded-2xl"
              : radius === "xl"
                ? "rounded-xl"
                : radius === "lg"
                  ? "rounded-lg"
                  : "rounded-md"
          }`}
          style={{
            height: typeof height === "number" ? `${height}px` : height,
            maxHeight,
            backgroundColor: `linear-gradient(135deg, ${theme.backgroundFrom}F2, ${theme.backgroundTo}F2)`,
            borderColor: theme.border,
            borderWidth: 1,
            top:
              displayMode === "dialog" && dialogPos
                ? `${dialogPos.top}px`
                : undefined,
            left:
              displayMode === "dialog" && dialogPos
                ? `${dialogPos.left}px`
                : undefined,
            cursor: isDragging ? "grabbing" : undefined,
          }}
          onKeyDown={(e) => {
            if (displayMode === "dialog" && e.key === "Escape")
              setIsOpen(false);
          }}
          ref={cardRef as any}
        >
          <CardHeader className="pb-3 sticky top-0 z-10 bg-transparent backdrop-blur-sm">
            <CardTitle className="flex items-center gap-2 text-white">
              <img
                src="/images/agilium-logo.png"
                alt="Agilium Logo"
                className="w-8 h-8"
              />
              {headerTitle}
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full ml-auto">
                {onlineBadgeText}
              </span>
              {/* Drag handle (dialog mode) */}
              {displayMode === "dialog" && (
                <Button
                  size="sm"
                  variant="ghost"
                  className="ml-2 text-blue-200 cursor-grab"
                  aria-label="Drag chat window"
                  onMouseDown={onDragStart}
                >
                  ⇕
                </Button>
              )}
              <Button
                size="icon"
                variant="ghost"
                aria-label="Close chat"
                className="ml-1 text-blue-200 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </CardTitle>
          </CardHeader>

          <CardContent
            className={`flex-1 flex min-h-0 flex-col ${padding === "lg" ? "p-6" : padding === "sm" ? "p-3" : "p-4"}`}
          >
            {/* Messages */}
            <div
              ref={scrollRegionRef}
              className="flex-1 min-h-0 overflow-y-auto overscroll-contain space-y-4 mb-4 pr-1"
              aria-live="polite"
              aria-relevant="additions"
              aria-label="Chat history"
            >
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex flex-col ${message.isBot ? "items-start" : "items-end"}`}
                >
                  <div
                    className={`max-w-[${bubbleMaxWidth}%] px-4 py-3 rounded-2xl shadow-sm`}
                    style={{
                      background: message.isBot
                        ? theme.botBubbleBg
                        : theme.userBubbleBg,
                      color: message.isBot ? theme.botText : theme.userText,
                      border: message.isBot
                        ? `1px solid ${theme.border}`
                        : undefined,
                    }}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <span
                    className={`text-[10px] opacity-70 mt-1 ${message.isBot ? "text-blue-200" : "text-blue-100"}`}
                  >
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div
                    className="px-4 py-2 rounded-2xl border"
                    style={{
                      background: theme.botBubbleBg,
                      color: theme.botText,
                      borderColor: theme.border as any,
                    }}
                  >
                    <span className="inline-flex items-center gap-1">
                      <span
                        className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.3s]"
                        style={{ backgroundColor: theme.typingDot }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full animate-bounce [animation-delay:-0.15s]"
                        style={{ backgroundColor: theme.typingDot }}
                      ></span>
                      <span
                        className="w-2 h-2 rounded-full animate-bounce"
                        style={{ backgroundColor: theme.typingDot }}
                      ></span>
                    </span>
                  </div>
                  <span className="text-[10px] opacity-70 mt-1 text-blue-200">
                    typing…
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {showQuickReplies && messages.length === 1 && (
              <div className="mb-4">
                <p className="text-blue-200 text-xs mb-2">Quick replies:</p>
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <Button
                      key={index}
                      size="sm"
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs border-[color:var(--brand-cyan)]/50 text-blue-200 hover:bg-[color:var(--brand-cyan)]/10"
                    >
                      {reply}
                    </Button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="flex items-center gap-2 p-2 rounded-full bg-blue-900/30 border border-blue-700/50">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder={placeholder}
                className="bg-transparent border-0 focus-visible:ring-0 text-white placeholder:text-blue-300"
                autoFocus={display === "dialog"}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                style={{ backgroundColor: theme.primaryButtonBg }}
                className="rounded-full w-9 h-9 hover:opacity-90 disabled:opacity-60"
                disabled={isTyping}
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
