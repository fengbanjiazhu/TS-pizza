import { string, z } from "zod";

export type CartItem = {
  pizzaId: number;
  name: string;
  quantity: number;
  totalPrice: number;
};

export const PizzaSchema = z.object({
  id: z.number(),
  name: z.string(),
  soldOut: z.boolean(),
  unitPrice: z.number(),
  ingredients: z.string().array(),
  imageUrl: z.string(),
});

export const MenuSchema = z.array(PizzaSchema);

export type PizzaItem = {
  pizza: z.infer<typeof PizzaSchema>;
};

export type Menu = PizzaItem[];

// id, name, unitPrice, ingredients, soldOut, imageUrl
