import { Box, VStack, HStack, Image, Divider, Heading, Text, Link } from "@chakra-ui/react"

interface Props {
    title: string;
    tag: Array<string>;
    thumbnail: string;
    to: string;
    publish: string;
    revised: string;
}

function ArticleCard(props: Props) {
    return (
        <Box shadow="md" borderRadius={10} overflow="hidden" width="full" p={"1rem"}>
            <HStack as={Link} href={props.to} >
                <VStack align="left" textAlign="left" w="full">
                    <Heading size="md">{props.title}</Heading>
                    <HStack fontSize="sm">
                        <Text>公開: {props.publish}</Text>
                        <Text>更新: {props.revised}</Text>
                        <Text>カテゴリ: </Text>
                        {props.tag.map((elm, index) => <Text key={index}>{elm}</Text>)}
                    </HStack>
                </VStack>
                <Image boxSize="100px" objectFit="cover" src={props.thumbnail} alt="thumbnail" />
            </HStack>
        </Box>
    )
}

export default ArticleCard