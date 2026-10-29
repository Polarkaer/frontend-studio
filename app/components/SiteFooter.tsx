import DisplayDate from "./DisplayDate";
import { TimeUnit } from "@/lib/enums";

export default async function SiteFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>&copy; <DisplayDate unit={[TimeUnit.YEAR]} /> Frontend Studio. Made with intention.</p>
        <a className="transition hover:text-foreground" href="#top">Back to top ↑</a>
      </div>
    </footer>
  );
}
