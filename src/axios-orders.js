import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://burger-builder-98f97.firebaseio.com/',
})

export default instance
