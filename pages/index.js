import { styled, Text, Spacer, Divider, Link, Button } from "@nextui-org/react"
import confetti from "canvas-confetti"
import { useEffect } from "react";
import { annotate } from 'rough-notation';
import { trailingCursor } from 'cursor-effects';

const Box = styled("div")

export default function Home() {
  useEffect(() => {
    //new trailingCursor({ particles: 5 });


    const builds_title = document.getElementById('builds_title');
    const builds_title_annotation = annotate(builds_title, { type: 'bracket', color: 'turquoise', brackets: "left", padding: 10 });
    builds_title_annotation.show();

    const nest_title = document.getElementById('nest_title');
    const nest_title_annotation = annotate(nest_title, { type: 'underline', color: 'yellow', padding: 10 });
    nest_title_annotation.show();

    const cc_title = document.getElementById('cc_title');
    const cc_title_annotation = annotate(cc_title, { type: 'underline', color: 'yellow', padding: 10 });
    cc_title_annotation.show();

  }, [])

  return <>
    <Box css={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      id: "all",
      height: "100vh",
    }}>

      <Box>

        <Box css={{
          fontFamily: "monospace"
        }}>
          <Text h2 css={{
            textAlign: "center"
          }}>Lennard Dorst</Text>

          <Box css={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Link href="https://www.twitter.com/lennardeth" onClick={() => {
              confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.25, x: 0.45 },
              });
            }} css={{
              fontFamily: "monospace"
            }}>Twitter</Link>

            <Spacer x={5} />

            <Link href="https://www.github.com/0w9" onPress={() => {
              confetti({
                particleCount: 100,
                spread: 100,
                origin: { y: 0.25, x: 0.55 },
              });
            }} css={{
              fontFamily: "monospace"
            }}>GitHub</Link>
          </Box>

          <Spacer y={2} />

        </Box>

        <Spacer y={2} />

        <Divider />

        <Spacer y={2} />

        <Box css={{
          fontFamily: "monospace"
        }}>
          <Spacer y={2} />

          <Text h2 id="builds_title">
            my public builds
          </Text>

          <Spacer y={2} />

          <Box css={{
            fontFamily: "monospace",

          }}>
            <Text a>aug 22 - present:</Text>

            <Text h3 id="nest_title">nest app</Text>

            <Spacer y={0.5} />

            <Text a>
              Nest is a startup made by <a href="https://twitter.com/emanperez28">@emanperez28</a> and me.
            </Text>

            <Spacer y={0.5} />

            <Text a>
              Our focus is to build a content-creator tool to send out personalized newsletters to social media audience.
              <br />
              We work with different methods such as Twitter direct messaging.
            </Text>
          </Box>

          <Spacer y={2} />

          <Box css={{
            fontFamily: "monospace",

          }}>
            <Text a>july 22 - present:</Text>

            <Text h3 id="cc_title">contract guard</Text>

            <Spacer y={0.5} />

            <Text a>
              Contract Guard is a startup made by me in the <a href="buildspace.so">buildspace</a> N&W program.
            </Text>

            <Spacer y={0.5} />

            <Text a>
              Contract Guard is using web3 to verify the links& socials of web3 companies,
              <br />
              NFT collections and social media influencers.
            </Text>
          </Box>

        </Box>
      </Box>
    </Box >
  </>
}