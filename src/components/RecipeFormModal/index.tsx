"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { RecipeFormValues, recipeSchema } from "@/lib/formValidationSchemas";
import { yupResolver } from "@hookform/resolvers/yup";

export function RecipeFormModal() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<RecipeFormValues>({
    resolver: yupResolver(recipeSchema),
    mode: "onSubmit",
  });
  const onSubmit = handleSubmit((data: RecipeFormValues) => console.log(data));

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="cursor-pointer">
          Nova receita <Plus size={16} />
        </Button>
      </DialogTrigger>
      <DialogContent showCloseButton={false} className="lg:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Nova Receita</DialogTitle>
        </DialogHeader>

        <form onSubmit={onSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="">
              <Label htmlFor="title">Título</Label>
              <Input
                placeholder="Bolo de cenoura"
                type="text"
                id="title"
                {...register("title")}
              />
              {errors?.title && (
                <p className="text-sm text-red-500">{errors.title.message}</p>
              )}
            </div>
            <div className="">
              <Label htmlFor="category">Categoria</Label>
              <Input
                type="text"
                id="category"
                placeholder="Bolos"
                {...register("category")}
              />
              {errors?.category && (
                <p className="text-sm text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Digite a descrição da receita"
              {...register("description")}
            />
            {errors?.category && (
              <p className="text-sm text-red-500">{errors.category.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="imageUrl">URL</Label>
            <Input
              id="imageUrl"
              placeholder="Cole a a URL da receita"
              {...register("imageUrl")}
            />
            {errors?.imageUrl && (
              <p className="text-sm text-red-500">{errors.imageUrl.message}</p>
            )}
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="">
              <Label htmlFor="prepTime">Tempo de preparo</Label>
              <Input
                placeholder="40min"
                type="text"
                id="prepTime"
                {...register("prepTime")}
              />
              {errors?.prepTime && (
                <p className="text-sm text-red-500">
                  {errors.prepTime.message}
                </p>
              )}
            </div>
            <div className="">
              <Label htmlFor="cookTime">Tempo de cozimento</Label>
              <Input
                type="text"
                id="cookTime"
                placeholder="20min"
                {...register("cookTime")}
              />
              {errors?.cookTime && (
                <p className="text-sm text-red-500">
                  {errors.cookTime.message}
                </p>
              )}
            </div>
            <div className="">
              <Label htmlFor="servings">Porções</Label>
              <Input
                type="number"
                id="servings"
                placeholder="4"
                defaultValue={1}
                {...register("servings")}
              />
              {errors?.servings && (
                <p className="text-sm text-red-500">
                  {errors.servings.message}
                </p>
              )}
            </div>
          </div>

          <div className="flex justify-end gap-4">
            <Button
              className="cursor-pointer hover:bg-red-500 hover:text-white transition-colors "
              variant={"outline"}
              onClick={() => setOpen(false)}
            >
              Cancelar
            </Button>
            <Button className="cursor-pointer" type="submit">
              Salvar Receita
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
