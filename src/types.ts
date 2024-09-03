export type ListDataProps = {
  id: number;
  title: string;
  img: string;
  bedroom: number;
  bathroom: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
};

export type SingleDataProps = {
  images: string[];
  size: number;
  city: string;
  school: string;
  bus: string;
  restaurant: string;
  description: string;
} & ListDataProps;
