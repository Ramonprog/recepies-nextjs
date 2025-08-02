import { RecipeFormModal } from "@/components/RecipeFormModal";
import { RecipesCard } from "@/components/RecipesCard";
import { recipes } from "@/lib/data";

export default function RecipesPage() {
  return (
    <main className="flex-grow py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Recipes</h1>
          <RecipeFormModal />
        </div>
        <div className="grid grid-cols-3 gap-8 mt-8">
          {recipes.map((recipe) => (
            <RecipesCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </main>
  );
}
