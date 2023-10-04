import { useLoaderData } from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem";
import { MenuSchema } from "../../types/types";

function Menu() {
  const menu = useLoaderData(); //这里menu是unknown

  const result = MenuSchema.safeParse(menu);

  if (!result.success) return;
  const validateMenu = result.data; //这里menu是Pizza[]

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {validateMenu.map((pizza) => (
        <MenuItem key={pizza.id} pizza={pizza} />
      ))}
    </ul>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
