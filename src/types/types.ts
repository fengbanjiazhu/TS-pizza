import { z } from "zod";

// pizza:{}
export const PizzaSchema = z.object({
  id: z.number(),
  name: z.string(),
  soldOut: z.boolean(),
  unitPrice: z.number(),
  ingredients: z.string().array(),
  imageUrl: z.string(),
});

// menu: pizza[]
export const MenuSchema = z.array(PizzaSchema);

// types
export type PizzaItem = z.infer<typeof PizzaSchema>;

export type Menu = PizzaItem[];

// cartItem:{}
export const CartItemSchema = z.object({
  pizzaId: z.number(),
  name: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
  unitPrice: z.number(),
});

// cart:cartItem[]
export const CartSchema = z.array(CartItemSchema);

export type CartItem = z.infer<typeof CartItemSchema>;

// id, name, unitPrice, ingredients, soldOut, imageUrl
