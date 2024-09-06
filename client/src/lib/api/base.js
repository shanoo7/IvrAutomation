import axios from 'axios';

const instance = axios.create({
	baseURL: process.env.VITE_API_BASE_URL,
	headers: {
		'Authorization': `Bearer ${localStorage.getItem('TOKEN')}`,
	},
});