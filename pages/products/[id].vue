<template>
  <div>Product details pages {{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params;
definePageMeta({
  Layout: "products",
});
</script>

<style lang="scss" scoped></style>
