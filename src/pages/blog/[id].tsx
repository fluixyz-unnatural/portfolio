import React from "react"
import { useRouter } from "next/dist/client/router"
import { Box } from "@chakra-ui/react"

function Article() {
    const router = useRouter()
    const { id } = router.query
    return (
        <Box>
            {id}
        </Box>
    )
}

export default Article