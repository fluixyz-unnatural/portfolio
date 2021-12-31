import { Box, VStack, HStack, Image, Divider, Heading, Text, Link } from "@chakra-ui/react"
import { TimeIcon, RepeatClockIcon } from "@chakra-ui/icons"
import { CategoryType } from 'src/types/microcms'
interface Props {
    title: string;
    tag: Array<CategoryType>;
    thumbnail: string;
    to: string;
    publish: string;
    revised: string;
}

function ArticleCard(props: Props) {
    return (
        <Box shadow="base" borderRadius={10} overflow="hidden" width="full" p={"1rem"} transition="0.2s" _hover={{ background: "#f6f6f8" }
        }>
            <HStack >
                <VStack align="left" textAlign="left" w="full">
                    <Heading as={Link} href={props.to} size="md">{props.title}</Heading>
                    <HStack fontSize="sm">
                        <TimeIcon /><Text>{props.publish}</Text>
                        {
                            props.publish == props.revised ? <Text></Text> : (<><RepeatClockIcon /><Text> {props.revised}</Text></>)
                        }
                    </HStack>
                    <HStack fontSize="sm">
                        <Text>カテゴリ: </Text>
                        {props.tag.map((elm, index) => <Link href={`/blog/category/${elm.id}/page/1`} key={index}>{elm.name}</Link>)}
                    </HStack>
                </VStack>
                <Box width={"130px"}>
                    <Link>
                        <Image boxSize="100px" objectFit="cover" src={props.thumbnail} alt="thumbnail" />
                    </Link>
                </Box>
            </HStack>
        </Box >
    )
}

export default ArticleCard