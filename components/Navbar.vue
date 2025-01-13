<template>
    <div>
        <header class="flex border-b font-sans min-h-[70px] tracking-wide w-full z-20 fixed bg-white">
            <div
                class="flex flex-wrap items-center justify-between sm:px-10 px-4 py-3 gap-4 w-full max-w-screen-xl mx-auto ">
                <NuxtLink to="/" class="max-sm:hidden">
                    <span class="self-center text-2xl font-semibold">E-shop</span>
                </NuxtLink>
                <NuxtLink to="/" class="hidden max-sm:block">
                    <span class="self-center text-2xl font-semibold">E-shop</span>
                </NuxtLink>
                <div :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
                    class="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
                    <li class="mb-6 hidden max-lg:block">
                        <NuxtLink href="javascript:void(0)">
                            <span class="self-center text-2xl font-semibold">E-shop</span>
                        </NuxtLink>
                    </li>
                    <ul v-for="item in navItems" :key="item" class="lg:flex lg:gap-x-10 max-lg:space-y-3">
                        <li class="max-lg:border-b max-lg:py-3">
                            <NuxtLink :to="item.Link"
                                class="hover:text-blue-600 text-[15px] font-bold text-blue-600 block">
                                {{ item.name }}
                            </NuxtLink>
                        </li>
                    </ul>
                    <!-- Cross Button -->
                    <button v-if="isMenuOpen" class="lg:hidden border-rounderd text-2xl" @click="toggleMenu">
                        <Icon name="uis:multiply" style="color: black" />
                    </button>
                </div>

                <div class="flex items-center space-x-8 max-lg:ml-auto">
                    <NuxtLink to="/wishlist" class="relative text-2xl">
                        <Icon name="uil:heart" style="color: black" />
                        <span
                            class="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">0</span>
                    </NuxtLink>

                    <NuxtLink to="/cart" class="relative text-2xl">
                        <Icon name="uil:cart" style="color: black" />
                        <span
                            class="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white">0</span>
                    </NuxtLink>
                    <!-- Hamburger Button -->
                    <button v-if="!isMenuOpen" class="lg:hidden text-2xl" @click="toggleMenu">
                        <Icon name="uis:align-justify" style="color: black" />
                    </button>
                </div>
            </div>
        </header>
    </div>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const navItems = [
    { name: "Home", Link: "/" },
    { name: "About", Link: "/about" },
    { name: "Products", Link: "/products" },
    { name: "Contact", Link: "/contact" },

]
</script>

<style lang="scss" scoped></style>