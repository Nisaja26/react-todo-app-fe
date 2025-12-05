import axios from 'axios'

const API_URL = 'http://localhost:8000/api/tasks';

export const getAllTask = () => axios.get(API_URL);

// belum lengkap