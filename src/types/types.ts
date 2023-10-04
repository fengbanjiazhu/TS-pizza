import { z } from "zod";

export const CartItemSchema = z.object({
  pizzaId: z.number(),
  name: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
});

export const CartSchema = z.array(CartItemSchema);

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
