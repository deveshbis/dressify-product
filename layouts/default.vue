<template>
  <div>
    <header
      class="flex border-b bg-white font-sans min-h-[70px] tracking-wide w-full z-20 relative">
      <div
        class="flex flex-wrap items-center justify-between sm:px-10 px-4 py-3 gap-4 w-full max-w-screen-xl mx-auto">
        <NuxtLink to="/" class="max-sm:hidden">
          <span class="self-center text-2xl font-semibold">E-shop</span>
        </NuxtLink>
        <NuxtLink to="/" class="hidden max-sm:block">
          <span class="self-center text-2xl font-semibold">E-shop</span>
        </NuxtLink>
       

        <div
          :class="{ block: isMenuOpen, hidden: !isMenuOpen }"
          class="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
          <ul class="lg:flex lg:gap-x-10 max-lg:space-y-3">
            <li class="mb-6 hidden max-lg:block">
              <NuxtLink href="javascript:void(0)">
                <span class="self-center text-2xl font-semibold">E-shop</span>
              </NuxtLink>
            </li>
            <li class="max-lg:border-b max-lg:py-3">
              <NuxtLink
                to="/"
                class="hover:text-blue-600 text-[15px] font-bold text-blue-600 block">
                Home
              </NuxtLink>
            </li>

            <li class="max-lg:border-b max-lg:py-3">
              <NuxtLink
                to="/products"
                class="hover:text-[#007bff] text-gray-600 text-[15px] font-bold block">
                Products
              </NuxtLink>
            </li>
          </ul>
          <!-- Cross Button -->
          <button v-if="isMenuOpen" class="lg:hidden" @click="toggleMenu">
            <svg
              class="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M6.293 4.293a1 1 0 011.414 0L10 6.586l2.293-2.293a1 1 0 111.414 1.414L11.414 8l2.293 2.293a1 1 0 11-1.414 1.414L10 9.414l-2.293 2.293a1 1 0 11-1.414-1.414L8.586 8 6.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
          
        </div>

        <div class="flex items-center space-x-8 max-lg:ml-auto">
          <NuxtLink to="/wishlist" class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline"
              viewBox="0 0 64 64">
              <path
                d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 00 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                data-original="#000000" />
            </svg>
            <span
              class="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white"
              >0</span
            >
          </NuxtLink>

          <NuxtLink to="/cart" class="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20px"
              height="20px"
              class="cursor-pointer fill-[#333] hover:fill-[#007bff] inline"
              viewBox="0 0 512 512">
              <path
                d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                data-original="#000000"></path>
            </svg>
            <span
              class="absolute left-auto -ml-1 top-0 rounded-full bg-blue-600 px-1 py-0 text-xs text-white"
              >0</span
            >
          </NuxtLink>

          <!-- Hamburger Button -->
          <button v-if="!isMenuOpen" class="lg:hidden" @click="toggleMenu">
            <svg
              class="w-7 h-7"
              fill="#000"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
    <!-- output the content -->
    <div class="">
      <slot />
    </div>

    <!-- Footer section -->
    <footer class="px-4 divide-y dark:bg-gray-100 dark:text-gray-800">
      <div
        class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div class="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            class="flex justify-center space-x-3 lg:justify-start">
            <div
              class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                fill="currentColor"
                class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-50">
                <path
                  d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
              </svg>
            </div>
            <span class="self-center text-2xl font-semibold">E-shop</span>
          </a>
        </div>
        <div
          class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div class="space-y-3">
            <h3 class="tracking-wide uppercase dark:text-gray-900">Product</h3>
            <ul class="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Features</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Integrations</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Pricing</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">FAQ</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="tracking-wide uppercase dark:text-gray-900">Company</h3>
            <ul class="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Privacy</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <h3 class="uppercase dark:text-gray-900">Developers</h3>
            <ul class="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">Public API</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Documentation</a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">Guides</a>
              </li>
            </ul>
          </div>
          <div class="space-y-3">
            <div class="uppercase dark:text-gray-900">Social media</div>
            <div class="flex justify-start space-x-3">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                class="flex items-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  class="w-5 h-5 fill-current">
                  <path
                    d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                class="flex items-center p-1">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5 fill-current">
                  <path
                    d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.921 4.921 0 00-8.58 4.487A13.935 13.935 0 011.671 3.149a4.904 4.904 0 001.523 6.572A4.914 4.914 0 01.963 9.07v.062a4.922 4.922 0 003.95 4.81c-.556.15-1.147.228-1.746.228-.426 0-.844-.041-1.255-.118a4.926 4.926 0 004.604 3.417A9.86 9.86 0 010 19.541a13.897 13.897 0 007.548 2.212c9.058 0 14.016-7.497 14.016-13.987 0-.214 0-.426-.015-.637a9.935 9.935 0 002.465-2.54z"></path>
                </svg>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                class="flex items-center p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  class="w-5 h-5 fill-current">
                  <path
                    d="M12 2.163c3.204 0 3.58.012 4.843.07 1.267.062 2.36.315 3.236 1.09.874.781 1.324 1.801 1.4 3.132.055 1.31.057 1.711.057 4.439s-.002 3.129-.057 4.44c-.075 1.33-.525 2.35-1.4 3.132-.876.775-1.97 1.028-3.236 1.09-1.263.058-1.64.07-4.843.07-3.204 0-3.58-.012-4.843-.07-1.267-.062-2.36-.315-3.236-1.09-.874-.781-1.324-1.801-1.4-3.132-.055-1.31-.057-1.711-.057-4.439s.002-3.129.057-4.44c.075-1.33.525-2.35 1.4-3.132.876-.775 1.97-1.028 3.236-1.09 1.263-.058 1.64-.07 4.843-.07zM12 0C8.741 0 8.308.012 7.042.07 5.806.132 4.745.421 3.951 1.215 3.157 2.005 2.868 3.064 2.806 4.302 2.75 5.565 2.75 6.008 2.75 12s0 6.435.057 7.698c.062 1.238.351 2.297 1.145 3.087.794.781 1.855 1.082 3.09 1.145 1.263.058 1.698.07 5.958.07 3.26 0 4.19-.012 4.843-.07 1.236-.063 2.296-.364 3.09-1.145.794-.79 1.082-1.849 1.145-3.087.058-1.263.057-1.698.057-7.698 0-5.991-.001-6.435-.057-7.698-.062-1.238-.351-2.297-1.145-3.087-.794-.794-1.854-1.083-3.09-1.145-1.262-.058-1.698-.07-4.843-.07z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
  },
};
</script>

<style scoped></style>
