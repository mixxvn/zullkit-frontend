import { defineStore } from "pinia";
import axios from 'axios'
// import { computed, ref } from "vue";

// export const useUserStore = defineStore('user', () => {
//     const user = ref(false)

//     const isLoggedIn = computed(() => user !== false)
//     const getUser = computed(() => user)

//     async function fetchUser() {
//         try {
//             const { data } = await axios.get('https://zullkit-backend.buildwithangga.id/api/user', {
//                 headers: {
//                     Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('token_access')
//                 }
//             })
//             user.value = data
//         } catch (error) {
//             user.value = false
//         }
//     }
// })



export const useUserStore = defineStore('user', {
    state: () => ({
        user: false
    }),
    getters: {
        isLoggedIn: (state) => state.user !== false,
        getUser: (state) => state.user
    },
    actions: {
        async fetchUser() {
            try {
                const { data } = await axios.get('https://zullkit-backend.buildwithangga.id/api/user', {
                    headers: {
                        Authorization: localStorage.getItem('token_type') + ' ' + localStorage.getItem('token_access')
                    }
                })
                this.user = data
            } catch (error) {
                this.user = false
            }
        }
    }
})