export type Recipe = {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: string
  cookTime: string
  servings: number
  ingredients: string[]
  instructions: string[]
  category: string
}
