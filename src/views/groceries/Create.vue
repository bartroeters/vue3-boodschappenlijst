<script setup>
import { ref } from 'vue'
import groceryForm from '@/components/GroceryForm.vue'
import { addProduct } from '@/stores/ProductStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const submitForm = () => {
    addProduct(product.value)
    router.push('/')
}


const product = ref({name: "", price: 0, quantity: 0});
</script>

<template>
    <grocery-form v-model="product" @submit="submitForm()" />
</template>
