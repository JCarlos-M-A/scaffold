<template>
    <div class="flex justify-center items-center flex-col gap-5 p-9 bg-slate-900">
        <button class="boton group hover:border-rose-900" @click="getCurrentPosition">
            Servicio al cliente
            <span class="flecha"></span>
        </button>
        <p class="text-white">Latitude: {{ loc.lat }}</p>
        <p class="text-white">Longitude: {{ loc.long }}</p>
        <p class="text-white">
            ©2013-2021 Nintendo. Super Mario and Nintendo Switch are trademarks of Nintendo
        </p>
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
