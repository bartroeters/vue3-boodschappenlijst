<script setup>
import { ref, computed } from 'vue'

const props = defineProps({ products: Array})
const emit = defineEmits(['deleteProduct'])

const allProducts = ref(props.products)

const totalCost = computed(() => allProducts.value.reduce((value, {price, quantity}) => value += (price * quantity), 0).toFixed(2))
</script>

<template>
    <header>
        <div class="name">product</div>
        <div class="price">price</div>
        <div class="quantity">quantity</div>
        <div class="subtotal">subtotal</div>
    </header>

    <div v-for="(product, index) in allProducts" :key="index" class="grocery-list">
        <div class="name">{{ product.name }}</div>
        <div class="price">${{ product.price }}</div>
        <div class="quantity">${{ product.quantity }}</div>
        <div class="subtotal">${{ (product.quantity * product.price).toFixed(2) }}</div>
        <router-link :to="
            {
                name: 'edit',
                params: { id: product.id },
                query: {
                    // product: { 'id': 8, 'name': 'xxxxx', 'price': 'yy.yy', 'quantity': 'zz.zz' }
                    ...product
                }
            }"
            >edit
        </router-link>
        <div>&nbsp;&nbsp;|&nbsp;&nbsp;</div>
        <div class="delete"><a @click="emit('deleteProduct', index)">delete</a></div>
    </div>

    <div class="totalCost">${{ totalCost }}</div>
</template>

<style>
    @import '@/assets/styles/groceries-table.css';
</style>
