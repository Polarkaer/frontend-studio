import { getCurrentYear } from "../lib/date";

export default async function Home() {
  const currentYear = await getCurrentYear();

  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-0">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-xl font-bold">My App</h1>
      </header>
      <main className="p-4">
        <p>Welcome to my app!</p>
      </main>
      <footer className="bg-gray-800 text-white p-4">
        <p>&copy; {currentYear} My App. All rights reserved.</p>
      </footer>
    </div>
  );
}
