/* tslint:disable */
import { Order } from './order';
export interface Customer {
  id?: number;
  name?: null | string;
  orders?: null | Array<Order>;
}
