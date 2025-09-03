import { HeadContent, Outlet, createRootRoute } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import { Chatbot } from "../components/chatbot";

export const Route = createRootRoute({
  component: () => (
    <>
      <HeadContent />
      <Navigation />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
      <Chatbot />
    </>
  ),
});
