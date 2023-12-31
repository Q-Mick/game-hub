import useGenres, { Genre } from '../hooks/useGenres';
import {
	List,
	ListItem,
	HStack,
	Image,
	Spinner,
	Button,
	Heading,
} from '@chakra-ui/react';
import getCroppedImageUrl from '../services/image-url';

interface Props {
	onSelectGenre: (genre: Genre) => void;
	selectedGenreId?: number;
}

const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
	const { data, isLoading, error } = useGenres();

	if (error) return null;
	if (isLoading) return <Spinner />;

	return (
		<>
			<Heading
				fontSize='2xl'
				marginBottom={3}>
				Genre
			</Heading>
			<List>
				{data?.results.map((genre) => (
					<ListItem
						key={genre.id}
						paddingY='5px'>
						<HStack>
							<Image
								boxSize='32px'
								borderRadius={8}
								objectFit='cover'
								src={getCroppedImageUrl(genre.image_background)}
							/>
							<Button
								textAlign='left'
								whiteSpace='normal'
								fontWeight={
									genre.id === selectedGenreId ? 'bold' : 'normal'
								}
								fontSize='lg'
								variant='link'
								onClick={() => onSelectGenre(genre)}>
								{genre.name}
							</Button>
						</HStack>
					</ListItem>
				))}
			</List>
		</>
	);
};

export default GenreList;
