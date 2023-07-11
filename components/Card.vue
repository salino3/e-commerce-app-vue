<template>
     <li v-for="item in props.list" :key="item.id">
        <NuxtLink :to="`/product/${item.id}`">
       <article class="grid product-container card shadow-inset-center"
          :class="{
            'product-container--has-discount': item.discountPercentage > 15,
          }"
        >
          <div class="image">
            <img class="img rotate" :src="item?.images[0]" alt="product image" loading="lazy" />
          </div>
          <div class="product-container__content">
            <h2>
              {{ item?.title }} <span v-if="item.discountPercentage > 15">- {{ item.discountPercentage }}% discount!</span>
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
 
li {
    margin-bottom: 2em;
    margin: 18px;
  }

.product-container {
  align-items: flex-start;
  grid-template-columns: 210px 1fr 100px;
}

.product-container__content {
  padding: 0 1em;
}

.shadow-inset-center:hover {
	-webkit-animation: shadow-inset-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: shadow-inset-center 0.2s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

@-webkit-keyframes shadow-inset-center {
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }
}
@keyframes shadow-inset-center {
  0% {
    -webkit-box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
            box-shadow: inset 0 0 0 0 rgba(0, 0, 0, 0);
  }
  100% {
    -webkit-box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
            box-shadow: inset 0 0 14px 0px rgba(0, 0, 0, 0.5);
  }
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

  .img {
    width: 100%;
    max-width: 250px;
    height: 100%;
    max-height: 300px;
    object-fit: cover;

  }
             
.rotate:hover {
    animation-name: rotate;
    animation-delay: 0.2s;
    animation-duration: 1s;
  }
  
  @keyframes rotate {
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
  }
}

.product-container--has-discount {
  background-color: rgba(yellow, 0.5);
}
</style>
