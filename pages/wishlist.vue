<template>
  <div>
    <h2 class="text-xl font-bold mb-4">Wishlist</h2>
    
    <div v-if="wishlist.length > 0" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
      <div
        v-for="item in wishlist"
        :key="item.id"
        class="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-md transition-all">
        
        <NuxtLink :to="`/products/${item.id}`">
          <div class="w-full">
            <img
              :src="item.image"
              alt="Product"
              class="w-full object-cover object-top aspect-[230/307]" />
          </div>
        </NuxtLink>

        <div class="p-2 flex-1 flex flex-col">
          <div class="flex-1">
            <h5 class="text-sm sm:text-base font-bold text-gray-800 truncate">
              {{ item.title }}
            </h5>
            <p class="mt-1 text-gray-500 truncate">
              {{ item.description }}
            </p>
            <div class="flex flex-wrap justify-between gap-2 mt-2">
              <h6 class="text-sm sm:text-base font-bold text-gray-800">
                $ {{ item.price }}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p v-else class="text-gray-500">Your wishlist is empty.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      wishlist: JSON.parse(localStorage.getItem('wishlist')) || [],
    };
  },
};
</script>

<style scoped>
</style>
