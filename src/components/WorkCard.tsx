import {
  Box,
  Link,
  Text,
  Image,
  Heading,
  HStack,
  Badge,
} from '@chakra-ui/react'

interface Props {
  title: string
  summary: string
  thumbnail: string
  tags: Array<string>
  blog: string
  confidence: number
}

const WorkCard = (props: Props) => {
  return (
    <>
      <Box
        w={['100%', 'sm']}
        maxW={'100%'}
        borderWidth={props.confidence > 50 ? '5px' : '1px'}
        borderColor={props.confidence > 50 ? 'purple.400' : 'gray.400'}
        borderRadius="lg"
        overflow="hidden"
      >
        <Link href={`/blog/${props.blog}`}>
          <Image
            src={props.thumbnail}
            alt="thumbnail"
            w="full"
            h={48}
            objectFit="cover"
          />
          <Box p={5}>
            <Heading mb={2} size="md">
              {props.title}
            </Heading>
            <Text size="sm" mb={2} h={40}>
              {props.summary}
            </Text>
            <HStack>
              {props.tags.map((tag, index) => (
                <Badge key={index}>{tag}</Badge>
              ))}
            </HStack>
          </Box>
        </Link>
      </Box>
    </>
  )
}

export default WorkCard
