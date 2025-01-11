<template>
  <div>
    <!-- <Banner /> -->
    <section
      class="relative bg-[url(https://www.smarttech-tv.com/image/cache/catalog/home_banner/HomeBanner_1920x960_monitor-1920x960.jpg)] bg-cover bg-center bg-no-repeat">
      <div
        class="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div
        class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 class="text-3xl font-extrabold text-white sm:text-5xl">
            Let us find your

            <strong class="block font-extrabold text-rose-500">
              Forever Product.
            </strong>
          </h1>

          <p class="mt-4 max-w-lg text-white sm:text-xl/relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#"
              class="block w-full rounded bg-rose-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
              Get Started
            </a>

            <a
              href="#"
              class="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
    <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-3xl">
      <div v-if="loading" class="flex justify-center items-center h-[60vh]">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-600" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
        <div
          v-for="item in products"
          :key="item.id"
          class="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-all p-5 rounded-lg border">
          <NuxtLink :to="`/products/${item.id}`">
            <div class="w-full">
              <img
                :src="item.image"
                alt="Product 3"
                class="w-48 h-48 mx-auto" />
            </div>
          </NuxtLink>

          <div class="p-2 flex-1 flex flex-col">
            <div class="flex-1">
              <h5 class="text-sm sm:text-base font-bold text-gray-800 truncate">
                {{ item.title }}
              </h5>
              <p class="mt-1 text-gray-500 truncate">
                {{ item.title }}
              </p>
              <div class="flex flex-wrap justify-between gap-2 mt-2">
                <div class="flex gap-2">
                  <h6 class="text-sm sm:text-base font-bold text-gray-800">
                    $ {{ item.price }}
                  </h6>
                  <h6 class="text-sm sm:text-base text-gray-500">
                    <strike>$15</strike>
                  </h6>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2 mt-4">
              <div
                @click="addToWishlist(item)"
                class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
                title="Wishlist">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16px"
                  class="fill-pink-600 inline-block"
                  viewBox="0 0 64 64">
                  <path
                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                    data-original="#000000"></path>
                </svg>
              </div>
              <button
                @click="addToCart(item)"
                type="button"
                class="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import Banner from "~/component/Banner.vue";

definePageMeta({
  Layout: "products",
});

const loading = ref(true);
const products = ref([]); 

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((data) => {
    products.value = data;
    loading.value = false;  
  })
  .catch(() => {
    loading.value = false; 
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Failed to load products. Please try again later.",
    });
  });

const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.some((cartItem) => cartItem.id === item.id)) {
    Swal.fire({
      icon: "info",
      title: "Item already in cart!",
      text: `${item.title} is already in your cart.`,
    });
  } else {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${item.title} has been added to your cart.`,
    });
  }
};

const addToWishlist = (item) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
    Swal.fire({
      icon: "info",
      title: "Item already in wishlist!",
      text: `${item.title} is already in your wishlist.`,
    });
  } else {
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      text: `${item.title} has been added to your wishlist.`,
    });
  }
};
</script>






<!-- <script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import Banner from "~/component/Banner.vue";

definePageMeta({
  Layout: "products",
});

const loading = ref(true); // Loading state
const { data: products, error } = await useFetch("https://fakestoreapi.com/products");

// Set loading to false once the fetch is complete
loading.value = false;

// Handle error if any
if (error.value) {
  Swal.fire({
    icon: "error",
    title: "Error",
    text: "Failed to load products. Please try again later.",
  });
}

const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.some((cartItem) => cartItem.id === item.id)) {
    Swal.fire({
      icon: "info",
      title: "Item already in cart!",
      text: `${item.title} is already in your cart.`,
    });
  } else {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${item.title} has been added to your cart.`,
    });
  }
};

const addToWishlist = (item) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  if (wishlist.some((wishlistItem) => wishlistItem.id === item.id)) {
    Swal.fire({
      icon: "info",
      title: "Item already in wishlist!",
      text: `${item.title} is already in your wishlist.`,
    });
  } else {
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      text: `${item.title} has been added to your wishlist.`,
    });
  }
};
</script> -->
