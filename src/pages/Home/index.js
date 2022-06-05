import { VStack, Flex, Center, Box, Heading, Stack, IconButton, Link, Image, HStack, Text, Icon, Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer,} from '@chakra-ui/react';
import { FaTwitter, FaGithub, FaInfo } from "react-icons/fa";

import { Experience } from '../../components/Experience';
import { Info, Twitter, GitHub } from '../../components/LinkButtons';

export function HomePage() {
  return (
    <Flex flexDirection="column" width="100wh" height="80vh" justifyContent="center" lignItems="center">
      <Stack flexDir="column" justifyContent="center" alignItems="center">

        <Box>
        
          <Box>
            <HStack>
              <Heading fontSize={"100px"}>Lennard Dorst</Heading>
              <Image  src="https://avatars.githubusercontent.com/u/79471472?v=4" borderRadius={"full"} boxSize={"100px"}></Image>    
            </HStack>
          </Box>

        <Box>
          <Center>
            <VStack>
              <Text fontSize={"25"}>Hello! I am Lennard, a full stack developer located in 🇩🇪.</Text>
              <Text fontSize={"20"} mt={"2px"}>I ❤️ learning new things, and discover the tech every day.</Text>
              <a fontSize={"13"} mt={"2px"}>*Please make sure there will be more work added here daily, the website was started on the 5th of July*</a>
            </VStack>
          </Center> 

          <Center mt={"20px"}>
              <Box>
                <HStack>

                  <Info />
                  <Twitter />
                  <GitHub />

                </HStack>

                <Experience />

              </Box>
            </Center>
          </Box>
        </Box>
      </Stack>
    </Flex>

  );
}
