<script setup>
import { ref } from 'vue'

const props = defineProps({
    defaultImage: String,
    galleries: Array
})

let mainImage = ref(props.defaultImage)

function changeMainImage(image) {
    this.mainImage = image
}
</script>

<template>
    <section id="gallery">
        <img :src="mainImage" alt="" class="w-full mt-6 rounded-2xl">
        <div class="grid grid-cols-4 gap-4 mt-4">
            <template v-for="gallery in galleries" :key="gallery.id">
                <div @click="changeMainImage(gallery.url)" class="overflow-hidden cursor-pointer rounded-2xl"
                    :class="{ 'ring-2 ring-indigo-500': mainImage == gallery.url }">
                    <img :src="gallery.url" class="w-full" alt="">
                </div>
            </template>
        </div>
    </section>
</template>
