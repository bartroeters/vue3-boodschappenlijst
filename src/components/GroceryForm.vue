<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const productData = ref()

const submitForm = () => {
    emit('update:modelValue', productData.value)
}

onMounted(() => {
    productData.value = JSON.parse(JSON.stringify(props.modelValue));
})
</script>

<template>
    <form v-if=productData @submit.prevent="submitForm">
        <input placeholder="Add a new item to the list..." v-model="productData.name" />
        <div>
            <label for="name">Price:</label>
            <input id="price" name="price" type="number" step="0.01" v-model="productData.price" />
        </div>

        <div>
            <label for="quantity">Quantity:</label>
            <input id="quantity" name="quantity" type="number" v-model="productData.quantity" />
        </div>

        <button type="submit">Add</button>
    </form>
</template>

<style>
    @import '@/assets/styles/grocery-form.css';
</style>
