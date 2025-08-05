import * as yup from "yup";

export const recipeSchema = yup.object().shape({
  title: yup.string().required("Título é obrigatório"),
  category: yup.string().required("Categoria é obrigatória"),
  description: yup.string().required("Descrição é obrigatória"),
  imageUrl: yup.string().url("URL inválida").required("URL é obrigatória"),
  prepTime: yup.string().required("Tempo de preparo é obrigatório"),
  cookTime: yup.string().required("Tempo de cozimento é obrigatório"),
  servings: yup
    .number()
    .positive("Porções deve ser um número positivo")
    .required("Porções é obrigatório"),
});

export type RecipeFormValues = yup.InferType<typeof recipeSchema>;
