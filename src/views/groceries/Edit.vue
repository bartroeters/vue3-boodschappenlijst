<script setup>
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import groceryForm from '@/components/groceryForm.vue'
import { editProduct, getById } from '@/stores/ProductStore'

const router = useRouter()
const route = useRoute()
const id = route.params.id
const product = ref(getById(id).value)

const submitForm = () => {
    editProduct(product.value)
    router.push('/')
}
</script>

<template>
    <grocery-form v-model="product" @submit="submitForm()" />
</template>
