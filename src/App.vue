<template>
  <ToolBar />

  <section>
    <img src="./assets/hero.jpg" alt="hero" />
  </section>

  <section>
    <div class="bg-wave-pattern h-6 bg-repeat-x relative -top-2"></div>
    <div class="bg-pattern-white-dots text-center p-4 flex md:flex-row flex-col gap-3 justify-center">
      <a href="#"
        class="inline-block py-3 px-16 bg-slate-900 border-transparent text-white font-bold text-2xl rounded-3xl hover:border-slate-900 hover:border-2 hover:bg-white hover:text-slate-900 transition duration-300">Buy
        now</a>
      <a href="#"
        class="inline-block py-3 px-16 bg-rose-900 border-transparent text-white font-bold text-2xl rounded-3xl hover:border-rose-900 hover:border-2 hover:bg-white hover:text-rose-900 transition duration-300">Watch
        the trailer</a>
    </div>

    <div class="bg-wave-pattern h-6 bg-repeat-x relative top-2"></div>
  </section>

  <section class="bg-pattern-characters-red pt-28">
    <div class="lg:container mx-auto md:flex gap-5 md:w-full p-3">
      <div class="left mx-auto bg-character-l bg-no-repeat bg-contain bg-top w-5/6 md:w-1/2 pt-52">
        <div class="card mt-72">
          <div class="cover bg-black">
            <video src="./assets/video01.mp4" autoplay loop muted></video>
          </div>
          <div class="content bg-wave-pattern bg-repeat-x relative -top-3">
            <h3 class="py-6 text-black text-4xl">
              Play together
            </h3>
            <p class="text-xl">
              Play with your friends and family
            </p>

            <a href="#" class="boton group">
              Watch the trailer
              <span class="flecha">
              </span>
            </a>
          </div>

          <div class="flex justify-between pb-4 px-4">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>

      <div class="right w-5/6 md:w-1/2 text-center mx-auto">
        <h2 class="font-bold text-white text-6xl py-6">
          Available now
        </h2>
        <p class="font-bold text-white text-2xl mx-auto py-10 w-4/5">
          Team up for a paws-itively adorable adventure!
        </p>

        <p class=" text-white mx-auto w-4/5">

          Bowser has returned to his own and only Mario and his friends can be the salvation! Use upgrades like the
          Super Bell, which grants feline abilities like climbing and scratching, to defeat Bowser and his minions.
        </p>

        <div class="card mt-10">
          <div class="cover bg-black">
            <video src="./assets/video02.mp4" autoplay loop muted></video>
          </div>
          <div class="content bg-wave-pattern bg-repeat-x relative -top-3">
            <h3 class="py-6 text-black text-4xl text-bold">
              Explore
            </h3>
            <p class="text-xl">
              Wander through some familiar locations.
            </p>

            <a href="#" class="boton group">
              Take a look!
              <span class="flecha">
              </span>
            </a>
          </div>

          <div class="flex justify-between pb-4 px-4">
            <div class="dot"></div>
            <div class="dot"></div>
          </div>
        </div>
      </div>
    </div>


    <div class="coins flex gap-9 p-9 justify-center flex-wrap">
      <img class="w-[80px] h-[80px]" v-for="i in 3" :key="i" src="./assets/coin.gif" alt="coin">
      <img class="w-[80px] h-[80px] hidden sm:block" v-for="i in 3" :key="i" src="./assets/coin.gif" alt="coin">
    </div>
  </section>

  <section class="bg-pattern-yellow-dots">
    <div class="bg-wave-pink bg-repeat-x h-6 relative -top-4"></div>

    <div class="sm:container w-2/3 mx-auto md:flex justify-center items-center text-center py-6">
      <div class="left xl:w-1/3 lg:w-1/2 p-5">
        <h3 class="text-yellow-900 font-black sm:text-4xl">
          can you find all 5
          hidden tags?
        </h3>


        <p class="py-4 text-xl text-yellow-900 font-black">
          Get 100 My Nintendo Platinum Points if you find them all!
        </p>

        <p>
            <a href="#" class="boton group">
              Iniciar secion<span class="flecha"></span>
            </a>
        </p>
      </div>

      <div class="rigth xl:w-2/3 lg:w-1/2 p-5">
        <img src="./assets/bowser-dark.png" alt="bowser">
        <div class="bg-arrow-blue h-6 bg-repeat-x relative -top-2"></div>
      </div>
    </div>
  </section>
  <div class="bg-wave-pattern h-2 bg-repeat-x relative -top-2"></div>
  <div class="bg-wave-pattern h-6 bg-repeat-x relative top-2"></div>
  <FooterFoo />
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import ToolBar from "./components/toolbar.vue";
import FooterFoo from "./components/footer.vue";
import { SplashScreen } from '@capacitor/splash-screen';

export default {
  data() {
    return {
      //
      msj: "Hola mundo"
    };
  },
  beforeMount() {
    SplashScreen.hide();
  },
  components: {
    HelloWorld,
    ToolBar,
    FooterFoo
  },
};
</script>
