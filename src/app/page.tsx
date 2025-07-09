import Link from "next/link";


export default function Home() {
  return (
   <main className="flex-grow">
    <div className="container mx-auto">
      <section>
        <h1>Receitas deliciosas</h1>
        <p>Descubra receitas deliciosas e saborosas para você fazer um bom uso de sua vida.</p>
        <Link className="bg-red-900 text-white px-4 py-2 rounded-md" href="/receitas">
          Ver todas as receitas
        </Link>
      </section>
    </div>
   </main>
  );
}
