<template>
    <div>
        <footer class="px-4 divide-y dark:bg-gray-100 dark:text-gray-800 ">
            <div class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0 ">
                <div class="lg:w-1/3">
                    <a rel="noopener noreferrer" href="#" class="flex justify-center space-x-3 lg:justify-start">
                        <div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-600 text-3xl">
                            <Icon name="icon-park-solid:big-x" style="color: black" />
                        </div>
                        <span class="self-center text-2xl font-semibold">E-shop</span>
                    </a>
                </div>
                <div class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div class="space-y-3">
                        <h3 class="tracking-wide uppercase dark:text-gray-900">Product</h3>
                        <ul v-for="item in FooterProductsItems" :key="item" class="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <h3 class="tracking-wide uppercase dark:text-gray-900">Company</h3>
                        <ul v-for="item in FooterCompanyItems" :key="item" class="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <h3 class="uppercase dark:text-gray-900">Developers</h3>
                        <ul v-for="item in FooterDevelopersItems" :key="item" class="space-y-1">
                            <li>
                                <a rel="noopener noreferrer" href="#">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                    <div class="space-y-3">
                        <div class="uppercase dark:text-gray-900">Social media</div>
                        <div class="flex justify-start space-x-3">
                            <a rel="noopener noreferrer" href="#" title="Facebook" class="flex items-center p-1 text-2xl">
                                <Icon name="uil:facebook" style="color: black" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Twitter" class="flex items-center p-1 text-2xl">
                                <Icon name="uil:twitter" style="color: black" />
                            </a>
                            <a rel="noopener noreferrer" href="#" title="Instagram" class="flex items-center p-1 text-2xl">
                                <Icon name="uil:instagram" style="color: black" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    </div>
</template>

<script setup>
const FooterProductsItems = [
    { name: "Features", Link: "/features" },
    { name: "Integrations", Link: "/integrations" },
    { name: "Pricing", Link: "/pricing" },
]

const FooterCompanyItems = [
    { name: "Privacy", Link: "/privacy" },
    { name: "Terms of Service", Link: "/service" },
]

const FooterDevelopersItems = [
    { name: "Public API", Link: "/publicAPI" },
    { name: "Documentation", Link: "/documentation" },
    { name: "Guides", Link: "/guides" },
]
</script>

<style lang="scss" scoped></style>