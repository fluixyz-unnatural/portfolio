import { Box, VStack, HStack, Image, Divider, Heading, Text, Link } from "@chakra-ui/react"

interface Props {
    title: string;
    summary: string;
    thumbnail: string;
    to: string;
}

function ArticleCard(props: Props) {
    return (
        <Box shadow="md" borderRadius={10} overflow="hidden" width="full">
            <HStack as={Link} href={props.to} >
                <Image boxSize="100px" objectFit="cover" src={props.thumbnail} />
                <VStack align="left" textAlign="left" w="full">
                    <Heading size="md">{props.title}</Heading>
                    <Divider />
                    <Text size="sm" fontSize="0.8rem">{props.summary}</Text>
                </VStack>
            </HStack>
        </Box>
    )
}

export default ArticleCard