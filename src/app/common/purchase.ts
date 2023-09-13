import {Customer} from "./customer";
import {Address} from "./address";
import {Order} from "./order";
import {OrderItem} from "./order-item";

export class Purchase {

  customer: Customer = new Customer();
  shippingAddress: Address = new Address();
  billingAddress: Address = new Address();
  order: Order = new Order();
  orderItems: OrderItem[] = [];
}
