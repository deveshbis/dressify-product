<template>
  <!-- <div>
    {{ product }}
  </div> -->
  <div>
    <NuxtLink :to="`/products/${product?.id}`">
      <div class="w-full">
        <img :src="product?.image" alt="Product 3" class="w-56 h-56 mx-auto" />
      </div>
    </NuxtLink>

    <div class="p-2 flex-1 flex flex-col">
      <div class="flex-1">
        <h5 class="text-sm sm:text-base font-bold text-gray-800 truncate">
          {{ product?.title }}
        </h5>
        <p class="mt-1 text-gray-500 truncate">
          {{ product?.title }}
        </p>
        <div class="flex flex-wrap justify-between gap-2 mt-2">
          <div class="flex gap-2">
            <h6 class="text-sm sm:text-base font-bold text-gray-800">
              $ {{ product?.price }}
            </h6>
            <h6 class="text-sm sm:text-base text-gray-500">
              
            </h6>
          </div>
        </div>
      </div>
      <div class="flex items-center gap-2 mt-4">
        <div @click="addToWishlist(product)"
          class="bg-pink-100 hover:bg-pink-200 w-12 h-9 flex items-center justify-center rounded cursor-pointer"
          title="Wishlist">
          <svg xmlns="http://www.w3.org/2000/svg" width="16px" class="fill-pink-600 inline-block" viewBox="0 0 64 64">
            <path
              d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
              data-original="#000000"></path>
          </svg>
        </div>
        <button @click="addToCart(product)" type="button"
          class="text-sm px-2 min-h-[36px] w-full bg-blue-600 hover:bg-blue-700 text-white tracking-wide ml-auto outline-none border-none rounded">
          Add to cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';

const props = defineProps({
  product: {
    type: Object,
    required: true,
  },
});

const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isItemInCart = cart.some((cartItem) => cartItem.id === product.id);

  if (isItemInCart) {
    Swal.fire({
      icon: "info",
      title: "Item already in cart!",
      text: `${product.title} is already in your cart.`,
      confirmButtonText: "Okay",
    });
  } else {
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${product.title} has been added to your cart.`,
      confirmButtonText: "Okay",
    });
  }
};

// Add item to the wishlist
const addToWishlist = (product) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const isItemInWishlist = wishlist.some(
    (wishlistItem) => wishlistItem.id === product.id
  );

  if (isItemInWishlist) {
    Swal.fire({
      icon: "info",
      title: "Item already in wishlist!",
      text: `${product.title} is already in your wishlist.`,
      confirmButtonText: "Okay",
    });
  } else {
    wishlist.push(product);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    Swal.fire({
      icon: "success",
      title: "Added to Wishlist!",
      text: `${product.title} has been added to your wishlist.`,
      confirmButtonText: "Okay",
    });
  }
};
</script>

<style lang="scss" scoped></style>
