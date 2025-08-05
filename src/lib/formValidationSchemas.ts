import * as yup from "yup";

export const recipeSchema = yup.object().shape({
  title: yup.string().required("Título é obrigatório"),
  category: yup.string().required("Categoria é obrigatória"),
  description: yup.string().required("Descrição é obrigatória"),
  imageUrl: yup.string().required("URL é obrigatória"),
  prepTime: yup.string().required("Tempo de preparo é obrigatório"),
  cookTime: yup.string().required("Tempo de cozimento é obrigatório"),
  servings: yup
    .number()
    .typeError("Porções deve ser um número")
    .min(1, "Porções deve ser pelo menos 1")
    .positive("Porções deve ser um número positivo")
    .required("Porções é obrigatório"),
});

export type RecipeFormValues = yup.InferType<typeof recipeSchema>;
