import { Heading, Divider, Link } from "@chakra-ui/react";

const WorksHeader = () => {
    return (
        <Link href="/works" >
            <Heading fontFamily={"Fjalla One"} p="2rem" textAlign="center">{"fluixyz's works"}</Heading>
            <Divider mb="2rem" />
        </Link>
    )
}

export default WorksHeader;