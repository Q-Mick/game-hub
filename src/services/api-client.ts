import axios from 'axios';

export interface FetchResponse<T> {
	count: number;
	results: T[];
}

export default axios.create({
	baseURL: 'https://api.rawg.io/api',
	params: {
		key: 'c10295c7f83d492e8e80760440925e07',
	},
});
