import { z } from "zod";

// pizza
export const PizzaSchema = z.object({
  id: z.number(),
  name: z.string(),
  soldOut: z.boolean(),
  unitPrice: z.number(),
  ingredients: z.string().array(),
  imageUrl: z.string(),
});

export const MenuSchema = z.array(PizzaSchema);

export type PizzaItem = z.infer<typeof PizzaSchema>;

export type Menu = PizzaItem[];

// cart
export const CartItemSchema = z.object({
  pizzaId: z.number(),
  name: z.string(),
  quantity: z.number(),
  totalPrice: z.number(),
  unitPrice: z.number(),
});

export const CartSchema = z.array(CartItemSchema);

export type CartItem = z.infer<typeof CartItemSchema>;

// order
export const OrderSchema = z.object({
  cart: z.array(CartItemSchema),
  id: z.string(),
  status: z.enum(["preparing", ""]),
  priority: z.boolean(),
  priorityPrice: z.number(),
  orderPrice: z.number(),
  estimatedDelivery: z.string().datetime(),
  customer: z.string(),
});

export type Order = z.infer<typeof OrderSchema>;

// const { id, status, priority, priorityPrice, orderPrice, estimatedDelivery, cart } = order;
