import DisplayDate from "./DisplayDate";
import { TimeUnit } from "@/lib/enums";

export default async function SiteFooter() {
  return (
    <footer className="theme-surface p-4">
      <p>&copy; <DisplayDate unit={[TimeUnit.YEAR]} /> Frontend Studio. All rights reserved.</p>
    </footer>
  );
}
