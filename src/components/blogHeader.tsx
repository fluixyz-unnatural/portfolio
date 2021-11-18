import { Heading, Divider, Link } from "@chakra-ui/react";

const BlogHeader = () => {
    return (
        <Link href="/blog" >
            <Heading fontFamily={"Fjalla One"} m="2rem" textAlign="center">{"fluixyz's log"}</Heading>
            <Divider mb="2rem" />
        </Link>
    )
}

export default BlogHeader;