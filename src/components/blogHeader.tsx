import { Heading, Divider, Link } from "@chakra-ui/react";

const BlogHeader = () => {
    return (
        <Link href="/blog/page/1" >
            <Heading fontFamily={"Fjalla One"} p="2rem" textAlign="center">{"fluixyz's log"}</Heading>
            <Divider mb="2rem" />
        </Link>
    )
}

export default BlogHeader;