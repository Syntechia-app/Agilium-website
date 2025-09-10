import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Chatbot } from "../components/chatbot";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Navigation />
      <div className="bg-background">
        {" "}
        {/* Changed to use the CSS variable */}
        <Outlet />
      </div>
      <Footer />
      <Chatbot />
    </>
  ),
});
