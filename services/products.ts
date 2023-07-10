import {Product} from '~~/types/index';

export const productService = {
  async get() {
    const list = await fetch("https://dummyjson.com/products").then((r) =>
      r.json()
    );
    return list.products as Product[];
  },
};
