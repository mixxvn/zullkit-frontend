<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios';

import NewItemCard from '@/components/ItemsCard.vue'

const newItems = ref([]);

async function getItemData(){
  try {
    const response = await axios.get('https://zullkit-backend.buildwithangga.id/api/products'); 
    newItems.value = response.data.data.data
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
      <h2 class="mb-4 text-xl font-medium md:mb-0 md:text-lg">New Items</h2>
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <NewItemCard v-for="newItem in newItems" :key="newItem.id" :id="newItem.id" :title="newItem.name" :description="newItem.subtitle" :image="newItem.thumbnails" />
      </div>
    </div>
</template>