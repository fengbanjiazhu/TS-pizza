import Button from "../../ui/Button";
import { useFetcher } from "react-router-dom";
import { updateOrder } from "../../services/apiRestaurant";
import type { Order } from "../../types/types";

function UpdateOrder({ order }: { order: Order }) {
  const fetcher = useFetcher();

  return (
    // fetcher.Form will not navigate away
    // will just submit form and revalidate the page
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Make priority</Button>
    </fetcher.Form>
  );
}

export default UpdateOrder;

export async function action({ params }: { params: { orderId?: string } }) {
  if (!params.orderId) return;
  const data = { priority: true };

  await updateOrder(params.orderId, data);
  return null;
}
