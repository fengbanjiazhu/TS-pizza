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

export const NewOrderSchema = z.object({
  cart: z.array(CartItemSchema),
  customer: z.string(),
  address: z.string(),
  phone: z.string(),
  position: z.string(),
  priority: z.boolean(),
});

export type Order = z.infer<typeof OrderSchema>;
export type NewOrder = z.infer<typeof NewOrderSchema>;

// user
export const UserSchema = z.object({
  username: z.string(),
  status: z.enum(["idle", "loading", "error"]),
  position: z
    .object({
      latitude: z.number(),
      longitude: z.number(),
    })
    .partial(),
  address: z.string(),
  error: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const GeoSchema = z.object({
  coords: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
});

export const PositionSchema = z.object({
  position: z.object({
    latitude: z.number(),
    longitude: z.number(),
  }),
  address: z.string(),
});

export type Position = z.infer<typeof PositionSchema>;

// errors
export const ErrorSchema = z
  .object({
    phone: z.string(),
  })
  .partial();
export type ErrorsType = z.infer<typeof ErrorSchema>;
