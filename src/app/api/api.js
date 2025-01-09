import axios from "axios";

export const api = axios.create({
    baseURL: 'https://shin-back.onrender.com/',
    // timeout: 1000,
    headers: {
        'Content-Type': 'application/json'
    }
  });