import { Box, Center, TableContainer, Table, TableCaption, Thread, Th, Tr, Thead, Tbody, Td } from "@chakra-ui/react";

export function Experience() {
    return (
        <>
            <Box mt={"20px"} backgroundColor={"whiteAlpha.300"} padding={"20px"} borderRadius={"12.5px"}>
                <Center>
                    <TableContainer mt={"20px"}>
                        <Table variant={"simple"} size={"sm"}>
                            <Thead>
                        <Tr>
                        <Th>
                            Skill
                        </Th>
                        <Th>
                            Experience
                        </Th>
                        <Th>
                            Confidence
                        </Th>
                        </Tr>
                    </Thead>

                    <Tbody>
                        <Td>Python</Td>
                        <Td>7 Years</Td>
                        <Td>😍</Td>
                    </Tbody>

                    <Tbody>
                        <Td>JavaScript/ TS (mainly)</Td>
                        <Td>3 Years</Td>
                        <Td>🥰</Td>
                    </Tbody>

                    <Tbody>
                        <Td>C# Desktop</Td>
                        <Td>5 Years</Td>
                        <Td>😊</Td>
                    </Tbody>

                    <Tbody>
                        <Td>MongoDB</Td>
                        <Td>2 Years</Td>
                        <Td>😄</Td>
                    </Tbody>

                    <Tbody>
                        <Td>Web3: Solana</Td>
                        <Td>1 Year</Td>
                        <Td>😄</Td>
                    </Tbody>

                    <Tbody>
                        <Td>Web3: ETH</Td>
                        <Td>1 Year</Td>
                        <Td>😄</Td>
                    </Tbody>

                    <Tbody>
                        <Td>Firebase</Td>
                        <Td>1 Year</Td>
                        <Td>😅</Td>
                    </Tbody>
                    </Table>
                </TableContainer>
            </Center>
        </Box>
        </>
    )
}