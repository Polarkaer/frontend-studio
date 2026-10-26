import ThemeToggle from "./ThemeToggle";

export default function SiteHeader() {
  return (
    <header className="theme-surface flex items-center justify-between p-4">
      <h1 className="text-xl font-bold">My App</h1>
      <ThemeToggle />
    </header>
  );
}
