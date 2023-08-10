import {
	Card,
	CardBody,
	Image,
	Heading,
	Text,
	HStack,
	Skeleton,
	SkeletonText,
} from '@chakra-ui/react';
const GameCardSkeleton = () => {
	return (
		<Card>
			<Skeleton height="200" />
			<CardBody>
				<SkeletonText />
			</CardBody>
		</Card>
	);
};

export default GameCardSkeleton;
