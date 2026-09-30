import Logo from "./logo";
import Navigation from "./navigation";
import ActionButtons from "./action-buttons";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center gap-4 px-4">
        <div className="md:hidden">
          <Navigation />
        </div>

        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <Navigation />
        </div>

        <div className="flex-1" />

        <ActionButtons />
      </div>
    </header>
  );
}
