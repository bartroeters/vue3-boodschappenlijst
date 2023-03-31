import { computed, ref } from 'vue'

// state
const products = ref([
    {id: 0, name: "laundry detergent", price: 5.55, quantity: 1},
    {id: 1, name: "steak", price: 6.2, quantity: 4},
    {id: 2, name: "bag of potatoes", price: 1.99, quantity: 2},
    {id: 3, name: "coffee filters", price: 0.99, quantity: 1},
    {id: 4, name: "brocoli", price: 2, quantity: 2},
    {id: 5, name: "milk", price: 1.49, quantity: 6},
    {id: 6, name: "olive oil", price: 6.75, quantity: 1}
])

export const id = ref(products.value.length)

// getters
export const getAllProducts = () => computed(() => products.value)
export const getById = (id) => computed(() => products.value.find(product => product.id == id))

// actions
export const addProduct = (product) => {
    products.value.push({
        id: id.value++,
        ...product
    })
}

export const editProduct = (product) => { products.value[product.id] = product }

export const deleteProduct = (index) => products.value.splice(index, 1)
