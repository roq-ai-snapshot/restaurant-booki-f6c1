import { TableInterface } from 'interfaces/table';
import { RestaurantInterface } from 'interfaces/restaurant';
import { GetQueryInterface } from 'interfaces';

export interface MenuInterface {
  id?: string;
  name: string;
  description: string;
  price: number;
  availability: boolean;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  table?: TableInterface[];
  restaurant?: RestaurantInterface;
  _count?: {
    table?: number;
  };
}

export interface MenuGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  description?: string;
  restaurant_id?: string;
}
