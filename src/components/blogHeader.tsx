import { Heading, Divider, Link } from "@chakra-ui/react";

const BlogHeader = () => {
    return (
        <Link href="/blog">
            <Heading m="2rem" textAlign="center">{"Fluixyz's blog"}</Heading>
            <Divider mb="2rem" />
        </Link>
    )
}

export default BlogHeader;