<script setup>
import GroceriesTable from '@/components/GroceriesTable.vue'
import { getAllProducts } from '@/stores/ProductStore'
import { deleteProduct } from '@/stores/ProductStore'

const products = getAllProducts();
</script>

<template>
    <groceries-table
        :products="products"
        @deleteProduct="deleteProduct($event)"
    />
</template>
