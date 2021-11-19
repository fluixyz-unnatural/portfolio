import { Box, Link, Text, Image, Heading, HStack, Badge } from "@chakra-ui/react"

interface Props {
    title: string;
    summary: string;
    thumbnail: string;
    tags: Array<string>;
    blog: string;
}

const WorkCard = (props: Props) => {
    return (
        <>
            <Link href={`/blog/${props.blog}`}>
                <Box w="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                    <Image src={props.thumbnail} alt="thumbnail" w="full" h={48} objectFit="cover" />
                    <Box p={5}>
                        <Heading mb={2} size="md">{props.title}</Heading>
                        <Text size="sm" mb={2} h={40}>{props.summary}</Text>
                        <HStack >{props.tags.map((tag, index) => <Badge key={index}>{tag}</Badge>)}</HStack>
                    </Box>
                </Box>
            </Link>
        </>
    )
}

export default WorkCard