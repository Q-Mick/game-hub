import useData from './useData';

export interface Platform {
	id: number;
	name: string;
	slug: string;
}

export interface Game {
	id: number;
	slug: string;
	name: string;
	background_image: string;
	metacritic: number;
	parent_platforms: { platform: Platform }[];
}

const useGames = () => useData<Game>('/games');

export default useGames;
