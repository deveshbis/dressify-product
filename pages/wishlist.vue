<template>
  <div>
    <div class="font-[sans-serif] bg-white h-full">
      <div class="max-w-7xl max-lg:max-w-3xl mx-auto p-6">
        <h2 class="text-2xl font-bold text-gray-800">Your Wishlist</h2>
        <!-- <div v-if="wishlist.length > 0" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6"></div> -->
        <div
          v-if="wishlist.length > 0"
          class="grid lg:grid-cols-4 gap-6 relative mt-6">
          <div
            v-for="item in wishlist"
            :key="item.id"
            class="lg:col-span-2 space-y-6">
            <div
              class="p-2 bg-white shadow-[0_2px_9px_-3px_rgba(61,63,68,0.3)] relative">
              <div class="grid sm:grid-cols-2 items-center gap-4">
                <!-- <NuxtLink :to="`/products/${item.id}`"></NuxtLink> -->
                <div
                  class="bg-gradient-to-tr from-gray-300 via-gray-100 flex items-center justify-center to-gray-50 w-full h-full p-4 shrink-0 text-center">
                  <img
                    :src="item.image"
                    class="w-56 h-56 object-contain inline-block" />
                </div>

                <div class="p-2">
                  <h3 class="text-lg font-bold text-gray-800">
                    {{ item.title.substring(0, 20) }}
                  </h3>

                  <ul
                    class="text-sm text-gray-500 space-y-2 list-disc pl-4 mt-4">
                    {{
                      item.description.substring(0, 80)
                    }}.....
                  </ul>

                  <div
                    class="flex items-center justify-between flex-wrap gap-4 mt-6">
                    <div>
                      <h4 class="text-lg font-bold text-blue-600">
                        ${{ item.price }}
                      </h4>
                    </div>
                  </div>

                  <div
                    class="divide-x border-y grid grid-cols-2 text-center mt-6">
                    <!-- <NuxtLink :to="`/products/${item.id}`"></NuxtLink> -->
                    <NuxtLink
                      :to="`/products/${item.id}`"
                      type="button"
                      class="bg-transparent hover:bg-gray-100 flex items-center justify-center py-3 text-gray-800 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3.5 fill-current mr-3 inline-block"
                        viewBox="0 0 128 128">
                        <path
                          d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"
                          data-original="#000000"></path>
                      </svg>
                      View details
                    </NuxtLink>
                    <button
                      @click="handleDelete(item.id)"
                      type="button"
                      class="bg-transparent hover:bg-gray-100 flex items-center justify-center py-3 text-gray-800 text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-3 fill-current mr-3 inline-block"
                        viewBox="0 0 390 390">
                        <path
                          d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                          data-original="#000000"></path>
                        <path
                          d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                          data-original="#000000"></path>
                      </svg>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p v-else class="text-gray-500">Your wishlist is empty.</p>
      </div>
    </div>
    <!-- <p v-else class="text-gray-500">Your wishlist is empty.</p> -->
  </div>
</template>

<script>
import Swal from "sweetalert2";
export default {
  data() {
    return {
      wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],
    };
  },
  methods: {
    handleDelete(itemId) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteItem(itemId);
        }
      });
    },
    // delete item from wishlist
    deleteItem(itemId) {
      const itemIndex = this.wishlist.findIndex((item) => item.id === itemId);
      if (itemIndex === -1) {
        Swal.fire("Error", "Item not found in wishlist", "error");
        return;
      }
      this.wishlist.splice(itemIndex, 1); 
      localStorage.setItem("wishlist", JSON.stringify(this.wishlist)); 
      Swal.fire(
        "Deleted!",
        "Your item has been removed from the wishlist.",
        "success"
      );
    },
  },
};
</script>

<style scoped></style>
