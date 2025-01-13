<template>
  <div>
    <Banner />
    
    <div class="font-sans p-4 mx-auto lg:max-w-7xl md:max-w-3xl">
      <div v-if="loading" class="flex justify-center items-center h-[60vh]">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 rounded-full text-blue-600"
          role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>

      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-6">
        <div v-for="item in products" :key="item.id"
          class="bg-white flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition-all p-5 rounded-lg border">
          <ProductCard :product="item" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from 'vue';
import Swal from "sweetalert2";
import Banner from "~/components/Banner.vue";
import ProductCard from '~/components/ProductCard.vue';
import { fetchProducts } from "~/utils/useFetch";

definePageMeta({
  Layout: "default",
});

const loading = ref(true);
const products = ref([]);

onMounted(async () => {
  const data = await fetchProducts();
  products.value = data;
  loading.value = false;
});
</script>
