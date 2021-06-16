import {
  Page,
  PageTitle,
  Heading1,
  Heading2,
  Description,
  Note,
} from "dungeons-and-components"

export default function Chapter1(): JSX.Element {
  return (
    <>
      <Page footnote="Chapter 1 — [Chapter 1 Name]">
        <PageTitle>Chapter 1 — [Chapter 1 Name]</PageTitle>
        <p>
          Intro to the section. Set the scene for the characters. You may choose
          to open this section with a read-aloud block. Keep the read-aloud text
          short and descriptive.
        </p>
        <p>What prompts the next part of the story?</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Note>
          <p>
            Chapter 1 should have between 800 – 1000 words. Use read-aloud text
            sparingly; it’s helpful for DMs to set the scene but can also
            detract from important information they need.
          </p>
        </Note>

        <Heading1>Map</Heading1>
        <p>
          This chapter is a good place to put your map key! You should use your
          map as the basis for your whole adventure, so the first chapter may be
          where you describe the locations on it.
        </p>

        <Heading2>M1. Location</Heading2>
        <Description>
          This is a great place to include in-game descriptions.
        </Description>
        <p>
          What’s happening here? Who do the characters meet? Are there enemies
          lurking here? Treasure to find? Employ the “five senses” guide to
          flesh out these sections.
        </p>

        <Heading2>M2. Location</Heading2>
        <Description>
          This is a great place to include in-game descriptions.
        </Description>
        <p>
          What’s happening here? Who do the characters meet? Are there enemies
          lurking here? Treasure to find? Employ the “five senses” guide to
          flesh out these sections.
        </p>

        <Heading2>M3. Location</Heading2>
        <Description>
          This is a great place to include in-game descriptions.
        </Description>
        <p>
          What’s happening here? Who do the characters meet? Are there enemies
          lurking here? Treasure to find? Employ the “five senses” guide to
          flesh out these sections.
        </p>

        <Heading2>M4. Location</Heading2>
        <Description>
          This is a great place to include in-game descriptions.
        </Description>
        <p>
          What’s happening here? Who do the characters meet? Are there enemies
          lurking here? Treasure to find? Employ the “five senses” guide to
          flesh out these sections.
        </p>
      </Page>
    </>
  )
}
