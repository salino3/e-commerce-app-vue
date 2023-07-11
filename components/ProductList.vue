<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1>Products</h1>
      total: {{ totalProducts }}
    </div>
    <ul class="product-list">
        <Card :list="list" />  
    </ul>
  </section>
</template>

<script setup lang="ts">
import { productService } from "@/services/all-products";
import { Product } from "../all-types/index";

const list: Product[] = await productService.getAll();

const totalProducts: globalThis.ComputedRef<number> = computed(
  () => list.length
);

</script>

<style lang="scss" scoped>
.product-list {
  padding: 0;

  li {
    margin-bottom: 2em;
  }
}

</style>
