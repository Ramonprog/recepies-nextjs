import { RecipesCard } from "@/components/RecipesCard";
import { recipes } from "@/lib/data";
import { ChevronRight } from "lucide-react";
import Link from "next/link";


export default function Home() {
  const featuredRecipes = recipes.slice(0, 3);

  return (
    <main className="flex-grow">
      <section className="bg-orange-50">
        <div className="container mx-auto flex flex-col items-center justify-center gap-4 py-16 px-8">
          <h1 className="text-5xl font-bold">Receitas deliciosas</h1>
          <p className='text-xl'>Descubra receitas deliciosas e saborosas para você fazer um bom uso de sua vida.</p>
          <Link className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-800 transition-colors" href="/recipes">
            Ver todas as receitas
          </Link>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto flex flex-col items-center">
          <h2 className="text-3xl font-bold">Receba uma receita de qualidade</h2>
          <div className="grid grid-cols-3 gap-8 mt-8">
            {featuredRecipes.map((recipe) => (
              <RecipesCard key={recipe.id} recipe={recipe} />
            ))}
          </div>

          <Link href="/recipes" className="flex items-center text-orange-400 hover:text-orange-800 transition-colors">Ver todas as receitas <ChevronRight size={16} /></Link>
        </div>
      </section>
    </main>
  );
}
