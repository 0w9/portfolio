import { Center, Flex, VStack, Heading, HStack, Stack, Box, Text, Code, Divider, Accordion, AccordionButton, AccordionItem, AccordionPanel, AccordionIcon } from "@chakra-ui/react"

import { Living, Sports_Biking, School_Education, Programming, Buildspace, LuckyDog } from "../../assets/texts/AboutMe";
import { Living_Icon, Sports_Biking_Icon, School_Education_Icon, Programming_Icon, Buildspace_Icon, LuckyDog_Icon } from "../../components/AboutMeIcons"

export function AboutPage() {
    return (
        <>
            <Flex flexDirection="column" width="100wh" height="90vh" justifyContent="center" lignItems="center">
                <Stack flexDir="column" justifyContent="center" alignItems="center">
                    <VStack>
                        <Box>
                            <Box>
                                <VStack>
                                    <Heading>About me</Heading>
                                    <br />

                                    <Text width={"75vh"}>Welcome! My name is Lennard Dorst. I am 17 years old and a steadily learning programmer. Here I'll give you a short overview about my person!</Text>
                                    <br height={"5vh"} />    
            
                                    <Accordion width={"75vh"}   >
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Living_Icon />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>

                                            <Living />
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Sports_Biking_Icon />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>

                                            <Sports_Biking />
                                        </AccordionItem>
                                
                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <School_Education_Icon />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>

                                            <School_Education />
                                        </AccordionItem>                                

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Programming_Icon />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            
                                            <Programming />
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <Buildspace_Icon />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>

                                            <Buildspace />
                                        </AccordionItem>

                                        <AccordionItem>
                                            <h2>
                                                <AccordionButton>
                                                    <LuckyDog_Icon />
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>

                                            <LuckyDog />
                                        </AccordionItem>
                                    </Accordion>
                                </VStack>
                            </Box>
                        </Box>
                    </VStack>
                </Stack>
            </Flex>
        </>
    )
}