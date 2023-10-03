import { z } from "zod";

const UserSchema = z.record(z.string(), z.number());

type User = z.infer<typeof UserSchema>;
// type User = {
//   [x: string]: number;
// }

const jeff: User = {
  username: 123,
  // 不能将类型“string”分配给类型“number”。
};

const result = UserSchema.safeParse(jeff);

console.log(result);
if (!result.success) console.log(result.error.issues[0].message);

function ButtonTest() {
  return <button>click</button>;
}

export default ButtonTest;
