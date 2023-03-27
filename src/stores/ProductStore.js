import { computed, ref } from 'vue'

// state
const products = ref([
    {id: 1, name: "laundry detergent", price: 5.55, quantity: 1},
    {id: 2, name: "steak", price: 6.2, quantity: 4},
    {id: 3, name: "bag of potatoes", price: 1.99, quantity: 2},
    {id: 4, name: "coffee filters", price: 0.99, quantity: 1},
    {id: 5, name: "brocoli", price: 2, quantity: 2},
    {id: 6, name: "milk", price: 1.49, quantity: 6},
    {id: 7, name: "olive oil", price: 6.75, quantity: 1}
])

export const id = products.length++

// getters
export const getAllProducts = () => computed(() => products.value)
export const getById = (id) => () => computed(() => products.value.find(product => product.id === id))

// actions
export const addProduct = (product) => products.value.push(product)
export const deleteProduct = (index) => products.value.splice(index, 1)
export const editProduct = (index) => console.log('testing')
