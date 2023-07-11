<template>
     <li v-for="item in list" :key="item.id">
        <NuxtLink :to="`/product/${item.id}`">
       <article class="grid product-container card"
          :class="{
            'product-container--has-discount': item.discountPercentage > 15,
          }"
        >
          <div class="image">
            <img :src="item?.images[0]" alt="product image" loading="lazy" />
          </div>
          <div class="product-container__content">
            <h2>
              {{ item?.title }}
            </h2>
            <p>
              <span class="grey-text">Description: </span>
              <strong>{{ item?.description }}</strong>
            </p>
            <p>
              <span class="grey-text">Brand: </span>
              {{ item.brand }}
            </p>
            <p><span class="grey-text">Category: </span>{{ item.category }}</p>
          </div>
          <div class="flex product-container__aside">
            <div class="text-align-end aside__price">
              <StaticPrice
                :quantity="item.price"
                :coin="item.brand === 'Apple' ? 'USD' : 'EUR'"
              />
            </div>
            <AddToCartButton :product="item" @addItem="onAddItem($event)"/>
          </div>
        </article>
       </NuxtLink>
      </li>
</template>

<script setup lang="ts">
import { Product } from "../all-types/index";



const props = defineProps<{
    list: Product[]
}>()

 const onAddItem = (product: Product) => {
   console.log('onAddItem', product)
 }
</script>

<style lang="scss" scope>
 
.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}

.product-container__content {
  padding: 0 1em;
}

.product-container__aside {
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.image {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    aspect-ratio: 1/1;
    object-fit: cover;
  }
}

.product-container--has-discount {
  background-color: rgba(yellow, 0.5);
}
</style>
