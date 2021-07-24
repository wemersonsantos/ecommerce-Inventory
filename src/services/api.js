import axios from 'axios';

const api = axios.create({
    baseURL: 'https://my-json-server.typicode.com/wemersonsantos/ecommerce-Inventory'
})

export default api