 import {Product} from '~~/all-types/index';

export const productService = {
  async getAll() {
    const list = await fetch("https://dummyjson.com/products").then((res) =>
      res.json()
    );
    return list.products as Product[];
  },
  async getProductById(id: number) {
      const product = await fetch<Product>(
        `https://dummyjson.com/products/${id}`
      ).then((res) =>
      res.json());

      return product as Product;
  }
};


// export const productService = {
//   async getAll() {
//      const list: Product[]  = await $fetch<Product[]>(
//      'https://dummyjson.com/products'
//     )
//      return list as Product[];

//   },
// };
