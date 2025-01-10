<template>
  <div>
    <div class="font-[sans-serif] p-4 ">
      <div class="lg:max-w-6xl max-w-xl mx-auto">
        <div
          class="grid items-start grid-cols-1 lg:grid-cols-2 gap-8 max-lg:gap-12 max-sm:gap-8">
          <div class="w-full lg:sticky top-0">
            <div class="flex flex-row gap-2">
              <div class="flex-1">
                <img
                  :src="product.image"
                  alt="Product"
                  class="w-full h-[400px]" />
              </div>
            </div>
          </div>

          <div class="w-full">
            <div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-800">
                {{ product.title }}
              </h3>
              <p class="text-gray-500 mt-1 text-sm">
                Women Embroidered Georgette A-line Kurta With Attached Dupatta
                (Maroon)
              </p>
              <div class="flex items-center flex-wrap gap-4 mt-4">
                <h4 class="text-gray-800 text-2xl sm:text-3xl font-bold">
                  ${{ product.price }}
                </h4>
              </div>
            </div>

            <hr class="my-6 border-gray-300" />

            <div>
              <div class="mt-6 flex flex-wrap gap-4">
                <button
                  @click="addToWishlist(product)"
                  type="button"
                  class="px-4 py-3 w-[45%] border border-gray-300 bg-gray-100 hover:bg-gray-200 text-gray-800 text-sm font-semibold">
                  Add to wishlist
                </button>
                <button
                  @click="addToCart(product)"
                  type="button"
                  class="px-4 py-3 w-[45%] border border-blue-600 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold">
                  Add to cart
                </button>
              </div>
            </div>

            <hr class="my-6 border-gray-300" />

            <div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-800">
                Product Information
              </h3>
              <div class="mt-2" role="accordion">
                <div class="hover:bg-gray-100 transition-all">
                  <div class="pb-4 px-4">
                    <p class="text-sm text-gray-500 leading-relaxed">
                      {{ product.description }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Swal from 'sweetalert2';
const { id } = useRoute().params;
definePageMeta({
  Layout: "products",
});

const uri = "https://fakestoreapi.com/products/" + id;

const { data: product } = await useFetch(uri, { key: id });
const addToCart = (item) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const isItemInCart = cart.some(cartItem => cartItem.id === item.id);
  
  if (isItemInCart) {
    Swal.fire({
      icon: 'info',
      title: 'Item already in cart!',
      text: `${item.title} is already in your cart.`,
      confirmButtonText: 'Okay'
    });
  } else {
    cart.push(item);
    localStorage.setItem("cart", JSON.stringify(cart));
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${item.title} has been added to your cart.`,
      confirmButtonText: 'Okay'
    });
  }
};

// Add item to the wishlist
const addToWishlist = (item) => {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  const isItemInWishlist = wishlist.some(wishlistItem => wishlistItem.id === item.id);
  
  if (isItemInWishlist) {
    Swal.fire({
      icon: 'info',
      title: 'Item already in wishlist!',
      text: `${item.title} is already in your wishlist.`,
      confirmButtonText: 'Okay'
    });
  } else {
    wishlist.push(item);
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
    Swal.fire({
      icon: 'success',
      title: 'Added to Wishlist!',
      text: `${item.title} has been added to your wishlist.`,
      confirmButtonText: 'Okay'
    });
  }
};
</script>

<style lang="scss" scoped></style>
