<script setup>

import IconLayer from '@/components/icons/IconLayer.vue'
import IconFortune from '@/components/icons/IconFortune.vue'
import IconDocumentation from '@/components/icons/IconDocumentation.vue'

</script>

<template>
    <div class="mb-12">

        <div class="block mb-2">
            <IconLayer />
            <h3 class="inline-block ml-2 text-lg font-semibold">
                Customizable
            </h3>
        </div>
        <p class="mt-2 text-lg text-gray-500">
            Accelerate your work with our millions <br>
            of ready-to-use design projects.
        </p>
    </div>
    <div class="mb-12">
        <div class="block mb-2">
            <IconFortune />
            <h3 class="inline-block ml-2 text-lg font-semibold">
                500 Fortune
            </h3>
        </div>
        <p class="mt-2 text-lg text-gray-500">
            Accelerate your work with our millions <br>
            of ready-to-use design projects.
        </p>
    </div>
    <div class="mb-12">
        <div class="block mb-2">
            <IconDocumentation />

            <h3 class="inline-block ml-2 text-lg font-semibold">
                Documentation
            </h3>
        </div>
        <p class="mt-2 text-lg text-gray-500">
            Accelerate your work with our millions <br>
            of ready-to-use design projects.
        </p>
    </div>
</template>