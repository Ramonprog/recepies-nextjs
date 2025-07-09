import Link from "next/link";

export function Headers() {
  return (
    <header className="py-4 px-8 bg-white text-black border-b border-gray-200 shadow-md">
      <div className="container mx-auto flex w-full justify-between">
        <Link className="text-xl font-bold" href="/">
          Receitas deliciosas
        </Link>
        <nav className="flex gap-4">
          <Link className="hover:text-red-900 transition-colors" href="/">Início</Link>
          <Link className="hover:text-red-900 transition-colors" href="/receitas">Receitas</Link>
        </nav>
      </div>
    </header>
  );
}