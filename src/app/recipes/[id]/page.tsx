import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { recipes } from "@/lib/data";
import Image from "next/image";
import { Recipe } from "@/@types/recipe";
import { notFound } from "next/navigation";

export default function RecipesPage({ params }: { params: { id: string } }) {

  const currentRecipe:Recipe | undefined = recipes.find((recipe) => recipe.id === params.id);

  if (!currentRecipe) {
    return notFound();
  }
  
  return (
    <main className="flex-grow py-8">
      <div className="container mx-auto">
        <Link href={"/recipes"} className="flex items-center gap-2 text-orange-400 hover:text-orange-800 transition-colors">
          <ChevronLeft size={16} /> Voltar para a lista de receitas
        </Link>

        <div className="mt-8">
          <div className=" relative h-96 w-full">
            <Image
              src={currentRecipe?.image ?? "/placeholder.jpg"}
              alt={currentRecipe?.title ?? "Receita"}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="my-4">
            <h1>{currentRecipe?.title}</h1>
            <p>{currentRecipe?.description}</p>
          </div>
          <div className="flex gap-6">
            <div className="bg-orange-200 rounded-md  p-4">
              <p>Preparo</p>
              <p>{currentRecipe?.prepTime}</p>
            </div>
             <div className="bg-orange-200 rounded-md p-4">
              <p>Cozimento</p>
              <p>{currentRecipe?.cookTime}</p>
            </div>
             <div className="bg-orange-200 rounded-md p-4">
              <p>Porções</p>
              <p>{currentRecipe?.servings}</p>
            </div>
             <div className="bg-orange-200 rounded-md p-4">
              <p>Preparo</p>
              <p>{currentRecipe?.prepTime}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}