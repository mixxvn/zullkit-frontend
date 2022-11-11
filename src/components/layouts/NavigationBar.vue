<script setup>
import { useUserStore } from '../../stores/user';
import { onMounted, computed } from 'vue';

import NavigationLink from './NavigationLink.vue'
import Logo from './Logo.vue'
import UserInfo from './UserInfo.vue'
import AuthButton from './AuthButton.vue'

const userStore = useUserStore()
const isLogin = computed(() => userStore.isLoggedIn)
const getUser = computed(() => userStore.getUser)

onMounted(() => {
    userStore.fetchUser()
})

</script>

<template>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap items-center justify-between mx-auto my-2">
            <Logo />
            <UserInfo v-if="isLogin" :user="getUser.data" />
            <AuthButton v-else="isLogin" />
            <NavigationLink />
        </div>
    </nav>
</template>