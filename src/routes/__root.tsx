import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Chatbot } from "../components/chatbot";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Navigation />
      <div
        className="test"
        style={{
          backgroundImage: "linear-gradient(rgb(0, 0, 0), rgb(26, 26, 26))",
        }}
      >
        <Outlet />
      </div>
      <Footer />
      <Chatbot />
    </>
  ),
});
