export type Product = {
  id?: number;
  name: string;
  category: string;
  brand: string;
  price: number;
};
export type ProductsQuery = {
  limit?: string;
  sort?: string;
  filters?:{
    [key:string]:string;
  }
};
