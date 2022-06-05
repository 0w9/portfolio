import { Center, HStack, Button, Box, Flex, Link } from "@chakra-ui/react"

export function NavBar() {
    return(
        <>
            <Center height={"20%"}>
                <Box>
                    <Flex>
                        <HStack margin={"10px"}>
                            <Link href="/">
                                <Button>
                                    Home
                                </Button>
                            </Link>

                            <Link href="/projects">
                                <Button>
                                    Projects
                                </Button>     
                            </Link>

                            <Link href="/about-me">
                                <Button>
                                    About me
                                </Button>
                            </Link>

                            <Link href="/contact">
                                <Button>
                                    Contact
                                </Button>
                            </Link>
                        </HStack>
                    </Flex>
                </Box>
            </Center>
        </>
    )
}