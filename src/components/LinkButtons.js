import { Box, IconButton, Link } from "@chakra-ui/react";
import { FaInfo, FaTwitter, FaGithub } from "react-icons/fa";

export function Info() {
    return (
        <>  
            <Box>
                <Link ml={"15px"} href="/about-me">
                    <IconButton icon={<FaInfo />} mr={"10px"}/>
                    <a> About me</a>
                </Link>
            </Box>  
        </>
    )
}

export function Twitter() {
    return (
        <>
            <Box>
                <Link ml={"15px"} href="https://www.twitter.com/lennardeth">
                  <IconButton icon={<FaTwitter />} mr={"10px"}/>
                  <a> @lennardeth</a>
                </Link>
            </Box>
        </>
    )
}

export function GitHub() {
    return (
        <>
            <Box>
                <Link ml={"15px"} href="https://github.com/0w9">
                  <IconButton icon={<FaGithub />} mr={"10px"}/>
                  <a> @0w9</a>
                </Link>
            </Box>
        </>
    )
}