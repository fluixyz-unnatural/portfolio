import { Box, Heading, Text, Image, HStack, VStack, Link, Button, Divider } from "@chakra-ui/react"
import iconImage from "../assets/icon.png"


const Profile = () => { 
  return (
    <Box shadow="sm" border="1px #eee solid" borderRadius="md" maxW="256px" p={6}>
        <VStack align={"start"}>
            <HStack>
                <Image alt="profile image" src={iconImage.src} width="48px" borderRadius={"50%"} />
                <VStack pl={2} align="start">
                    <Heading size="sm">fluixyz</Heading>
                    <HStack width="100%">
                        <Link href="https://twitter.com/higara333" isExternal><Button colorScheme="twitter" size="xs" >Twitter</Button></Link>
                        <Link href="https://github.com/fluixyz-unnatural" isExternal><Button colorScheme="gray" size="xs" >GitHub</Button></Link>
                    </HStack>
                </VStack>
            </HStack>
            <Divider />
            <Text fontSize="sm">あまりにも背景が寂しいからプロフィールを設置してみた。<br />好きなものの根源を辿るとすべてマイクラに行き着く。</Text>
        </VStack>
    </Box>
  )
}
export default Profile