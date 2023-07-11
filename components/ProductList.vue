<template>
  <section class="wrapper">
    <div class="flex align-items-center justify-content-between">
      <h1 class="title">
        <u>Store Products</u>
      </h1>
      total products: {{ totalProducts }}
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

.title {
  margin: 12px;
  margin-top: 32px;
}
.product-list {
  padding: 0.5;  
}

</style>
