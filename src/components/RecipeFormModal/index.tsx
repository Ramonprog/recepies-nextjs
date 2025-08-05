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

export function RecipeFormModal() {
  const [open, setOpen] = useState(false);
  const {
    handleSubmit,
    formState: {},
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

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
              <Input placeholder="Bolo de cenoura" type="text" id="title" />
            </div>
            <div className="">
              <Label htmlFor="category">Categoria</Label>
              <Input type="text" id="category" placeholder="Bolos" />
            </div>
          </div>

          <div>
            <Label htmlFor="description">Descrição</Label>
            <Textarea
              id="description"
              placeholder="Digite a descrição da receita"
            />
          </div>

          <div>
            <Label htmlFor="imageUrl">URL</Label>
            <Input id="imageUrl" placeholder="Cole a a URL da receita" />
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="">
              <Label htmlFor="prepTime">Tempo de preparo</Label>
              <Input placeholder="40min" type="text" id="prepTime" />
            </div>
            <div className="">
              <Label htmlFor="cookTime">Tempo de cozimento</Label>
              <Input type="text" id="cookTime" placeholder="20min" />
            </div>
            <div className="">
              <Label htmlFor="servings">Porções</Label>
              <Input type="number" id="servings" placeholder="4" />
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
