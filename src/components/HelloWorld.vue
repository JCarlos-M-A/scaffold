<template>
  <div class="container bg-yellow-300 mx-auto flex flex-col items-center">
    <h1>{{ msg }}</h1>
    <h1>Geolocation</h1>
    <p>Your location is:</p>
    <p>Latitude: {{ loc.lat }}</p>
    <p>Longitude: {{ loc.long }}</p>

    <button class="p-4 rounded-md text-white bg-slate-900 hover:shadow-sm hover:shadow-black" @click="getCurrentPosition">
      Get Current Location
    </button>
  </div>
</template>

<script>
import { Geolocation } from '@capacitor/geolocation';
export default {
  data() {
    return {
      loc: {
        lat: null,
        long: null,
      }
    };
  },
  props: {
    msg: String,
  },
  methods: {
    async getCurrentPosition() {
      const pos = await Geolocation.getCurrentPosition();
      this.loc = {
        lat: pos.coords.latitude,
        long: pos.coords.longitude,
      }
    },
  },
}
</script>
