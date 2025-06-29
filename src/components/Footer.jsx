import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-12">
      <a
        href="#hero"
        className="absolute bottom-2.5 right-2.5 p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};
