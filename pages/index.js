import { styled, Text, Spacer, Divider, Link, Button } from "@nextui-org/react"
import confetti from "canvas-confetti"
import { GrGithub, GrTwitter } from "react-icons/gr";

const Box = styled("div")

export default function Home() {
  return <>
    <Box css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      height: "100vh"
    }}>

      <Box>
        <Text h3 css={{
          textAlign: "center"
        }}>🚢</Text>

        <Spacer y={0.5} />

        <Text h3 css={{
          textAlign: "center"
        }}>Lennard.</Text>

        <Spacer y={0.5} />

        <Divider />

        <Spacer y={0.5} />

        <Box css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Link a href="https://www.twitter.com/lennardeth" css={{
            display: "inline-block",
          }} onClick={(e) => {
            confetti({
              particleCount: 100,
              spread: 100,
              origin: { y: 0.6 },
            });
          }}>
            <GrTwitter size="30" />
          </Link>

          <Link a href="https://www.github.com/0w9" css={{
            display: "inline-block",
          }} onClick={(e) => {
            confetti({
              particleCount: 100,
              spread: 100,
              origin: { y: 0.6 },
            });
          }}>
            <GrGithub size="30" />
          </Link>
        </Box>
      </Box>
    </Box>
  </>
}