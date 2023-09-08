import { ReservationInterface } from 'interfaces/reservation';
import { RestaurantInterface } from 'interfaces/restaurant';
import { MenuInterface } from 'interfaces/menu';
import { GetQueryInterface } from 'interfaces';

export interface TableInterface {
  id?: string;
  number: number;
  capacity: number;
  status: string;
  restaurant_id: string;
  created_at?: any;
  updated_at?: any;
  test_id?: string;
  reservation?: ReservationInterface[];
  restaurant?: RestaurantInterface;
  menu?: MenuInterface;
  _count?: {
    reservation?: number;
  };
}

export interface TableGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  restaurant_id?: string;
  test_id?: string;
}
