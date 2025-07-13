import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import { recipes } from "@/lib/data";
import Image from "next/image";
import { Recipe } from "@/@types/recipe";
import { notFound } from "next/navigation";

export default function RecipesPage({ params }: { params: { id: string } }) {

  const currentRecipe: Recipe | undefined = recipes.find((recipe) => recipe.id === params.id);

  if (!currentRecipe) {
    return notFound();
  }

  return (
    <main className="flex-grow py-8">
      <div className="container mx-auto ">
        <Link href={"/recipes"} className="flex items-center gap-2 text-orange-400 hover:text-orange-800 transition-colors">
          <ChevronLeft size={16} /> Voltar para a lista de receitas
        </Link>

        <section className="mt-8  shadow-md p-2">
          <div className=" relative h-96 w-full">
            <Image
              src={currentRecipe?.image ?? "/placeholder.jpg"}
              alt={currentRecipe?.title ?? "Receita"}
              fill
              className="object-cover rounded-lg shadow-md"
            />
          </div>

          <div className="my-4">
            <h1 className="text-2xl font-bold">{currentRecipe?.title}</h1>
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

          <div className="mt-8 grid grid-cols-2">
            <div className="">
              <h3 className="text-lg font-bold">Ingredientes</h3>
              <ul className="list-disc list-inside">
                {currentRecipe?.ingredients.map((ingredient, index) => (
                  <li key={index} className="marker:text-orange-500">{ingredient}</li>
                ))}
              </ul>
            </div>

           <div className="">
              <h3 className="text-lg font-bold">Modos de preparo</h3>
              <ul className="list-decimal list-inside">
                {currentRecipe?.instructions.map((ingredient, index) => (
                  <li key={index} className="marker:text-orange-500">{ingredient}</li>
                ))}
              </ul>
            </div>

          </div>
        </section>
      </div>
    </main>
  )
}