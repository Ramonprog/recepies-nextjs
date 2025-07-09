import Link from "next/link";

export function Headers() {
  return (
    <header className="flex items-center justify-between py-4 px-8 bg-white">
      <Link href="/">
        Receitas deliciosas
      </Link>
      <nav>
        <Link href="/">Início</Link>
        <Link href="/receitas">Receitas</Link>
      </nav>
    </header>
  );
}