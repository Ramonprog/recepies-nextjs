import Link from "next/link";


export default function Home() {
  return (
    <main className="flex-grow">
      <section className="bg-orange-50">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-16 px-8">
          <h1 className="text-5xl font-bold">Receitas deliciosas</h1>
          <p className='text-xl'>Descubra receitas deliciosas e saborosas para você fazer um bom uso de sua vida.</p>
          <Link className="bg-orange-500 text-white px-4 py-2 rounded-md" href="/receitas">
            Ver todas as receitas
          </Link>
        </div>
      </section>
    </main>
  );
}
