<template>
    <div class="mx-auto">
        <nav class="bg-gray-800 flex justify-between lg:justify-around items-center">
            <img class="p-2" src="../assets/logo.png" alt="logo" />

            <div class="lg:block hidden w-1/6 md:w-4/6">
                <ul class="flex gap-5 justify-center items-center">
                    <li v-for="(link, i) in links" :key="i">
                        <a class="link" :href="link.link">{{ link.nombre }}</a>
                    </li>
                    <li>
                        <a class="link border-2 rounded-full border-yellow-400 hover:bg-white hover:text-black transition duration-500"
                            href="#">Bowser fury</a>
                    </li>
                    <li>
                        <a class="text-white font-bold bg-rose-700 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-500"
                            href="#">Buy now</a>
                    </li>
                </ul>
            </div>


            <div class="block lg:hidden">
                <a href="#" class="link flex items-center" @click="menuShow = !menuShow">Menu
                    <span class="flex flex-col mx-1">
                        <div v-for="i in 3" :key="i" class="bg-white rounded-full h-1 w-8 my-1"></div>
                    </span>
                </a>
                <ul v-show="menuShow"
                    class="w-full my-6 py-6 absolute z-50 left-0 bg-gray-800 text-center flex flex-col gap-5">
                    <li v-for="(link, i) in links" :key="i">
                        <a class="link" :href="link.link">{{ link.nombre }}</a>
                    </li>
                    <li>
                        <a class="link border-2 rounded-full border-yellow-400 hover:bg-white hover:text-black transition duration-500"
                            href="#">Bowser fury</a>
                    </li>
                    <li>
                        <a class="text-white font-bold bg-rose-700 px-4 py-2 rounded-full hover:bg-white hover:text-black transition duration-500"
                            href="#">Buy now</a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //
            links: [
                {
                    nombre: "Home",
                    link: "#",
                },
                {
                    nombre: "Play together",
                    link: "#",
                },
                {
                    nombre: "Explore",
                    link: "#",
                },
            ],
            menuShow: false,
        }
    },
}
</script>