import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";


export default async function Home() {

  return (
    <div className="grid grid-cols-1 grid-rows-3 gap-0">
      <SiteHeader />
      <main className="p-4">
        <p>Welcome to my app!</p>
      </main>
      <SiteFooter />
    </div>
  );
}
