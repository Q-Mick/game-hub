import { GameQuery } from '../App';
import useData from './useData';
import { Genre } from './useGenres';

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

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		'/games',
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
			},
		},
		[gameQuery] // Dependancy array
	);

export default useGames;
