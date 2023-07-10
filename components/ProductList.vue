<template>
    <h1 class="title_pricipal">Products</h1>
    <ul class="product-list">
     <li v-for="item in list" :key="item.id">
        <article class="grid product-container card">
            <div class="image">
              <img :src="item.images[0]" alt="product image" loading="lazy" />
            </div>
            <div class="product-container__content">
         <h2>
           {{ item.title }}
         </h2>
         <p>
           <span class="grey-text">Description: </span>
           <strong>{{ item.description }}</strong>
         </p>
         <p>
           <span class="grey-text">Brand: </span>
           {{ item.brand }}
         </p>
         <p>
            <span class="grey-text">Category: </span>{{ item.category }}
         </p>
                </div>
            <div class="flex product-container__aside">
              <div class="text-align-end aside__price">
                {{ item.price }}
              </div>
            </div>
          </article>
         </li>
    </ul>
</template>

<script setup lang="ts">
import { productService } from '@/services/products'
import { Product } from 'types';

const list: Product[] = await productService.get();

</script>


<style lang="scss" scoped>
.title_pricipal {
   margin: 12px;
}
.product-list {
    padding: 0;

    li {
        margin-bottom: 2em;
    }
}

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
}</style>