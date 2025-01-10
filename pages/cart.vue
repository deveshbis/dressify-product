<template>
  <div class="cart-page">
    <h1>Your Cart</h1>
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div v-for="item in cartItems" :key="item.id" class="cart-item">
        <img :src="item.image" alt="product image" />
        <div>
          <h4>{{ item.title }}</h4>
          <p>${{ item.price }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cartItems: JSON.parse(localStorage.getItem('cart')) || [],
    };
  },
};
</script>

<style scoped>
</style>
