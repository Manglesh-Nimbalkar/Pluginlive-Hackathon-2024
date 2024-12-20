import Navigation from "../Navigation/Navigation";

export default function Layout({children}) {
  return (
    <div className="flex min-h-screen bg-primary">
      <Navigation />
      <main className="p-5 grow bg-white my-2 mr-2 rounded-3xl">
        {children}
      </main>
    </div>
  );
}