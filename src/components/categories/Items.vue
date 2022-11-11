<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';
import { useRoute } from 'vue-router';

import NewItemCard from '@/components/ItemsCard.vue'

const newItems = ref([]);
const route = useRoute()
const category = ref({});

async function getItemData(){
  try {
    const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/categories?id=' + route.params.id + '&show_product=1');
    // console.log(response.data.data)
    newItems.value = response.data.data.products
    category.value = response.data.data
    // console.log(response.data.data.name)
  } catch (error) {
    console.error(error);
  }
}

onMounted(() => {
  getItemData()
})

</script>

<template>
    <div class="container px-4 mx-auto my-16 md:px-12">
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">{{ category.name }}</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <NewItemCard v-for="newItem in newItems" :key="newItem.id" :id="newItem.id" :title="newItem.name" :description="newItem.subtitle" :image="newItem.thumbnails" />
      </div>
    </div>
</template>