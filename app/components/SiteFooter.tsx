import { getCurrentDate } from "@/lib/date";

export default async function SiteFooter() {
  const currentDate = await getCurrentDate();
  const currentYear = currentDate.getFullYear();
  const formattedDate = currentDate.toLocaleDateString();

  return (
    <footer className="bg-gray-800 text-white p-4">
      <p>&copy; {currentYear} Frontend Studio. All rights reserved.</p>
      <p>Today&apos;s date is: {formattedDate}</p>
    </footer>
  );
}
