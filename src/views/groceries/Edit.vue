<script setup>
import { ref } from 'vue'
import editForm from '@/components/EditForm.vue'
import { editProduct } from '@/stores/ProductStore'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({ product: Object})

const newProduct = ref(props.products)

console.log(newProduct.value)

const submitForm = () => {
    editProduct(product.value)
    router.push('/')
}

const product = ref({name: "", price: 0, quantity: 0});
</script>

<template>
    <edit-form v-model="product" @submit="submitForm()" />
</template>
