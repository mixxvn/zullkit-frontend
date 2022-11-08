<script setup>

import axios from 'axios';
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router';

const mainImage = ref({});
const imageList = ref([]);
const router = useRoute();

async function getProduct(){
    try {
        const response = await axios.get('http://zullkit-backend.buildwithangga.id/api/products?id=' + router.params.id);
        imageList.value = response.data.data.galleries;
        mainImage.value = response.data.data.galleries[0].url;
        // console.log(mainImage)
        // console.log(response.data.data.galleries);
    } catch (error) {
        console.error(error);
    }
}

function changeMainImage (image){
    this.mainImage = image
}

onMounted (() => {
    getProduct();
})

</script>

<template>
    <section id="gallery">
        <img :src="mainImage" alt="" class="w-full mt-6 rounded-2xl">
        <div class="grid grid-cols-4 gap-4 mt-4">
            <template v-for="image in imageList" :key="image.id">
                <div @click="changeMainImage(image.url)" class="overflow-hidden cursor-pointer rounded-2xl" :class="{ 'ring-2 ring-indigo-500' : mainImage == image.url}">
                    <img :src="image.url " class="w-full" alt="">
                </div>
            </template>
            <!-- <div class="overflow-hidden cursor-pointer ring-2 ring-indigo-500 rounded-2xl">
                <img src="@/assets/img/gallery-3.png" class="w-full" alt="">
            </div>
            <div class="overflow-hidden cursor-pointer rounded-2xl">
                <img src="@/assets/img/gallery-4.png" class="w-full" alt="">
            </div>
            <div class="overflow-hidden cursor-pointer rounded-2xl">
                <img src="@/assets/img/gallery-5.png" class="w-full" alt="">
            </div> -->
        </div>
    </section>
</template>