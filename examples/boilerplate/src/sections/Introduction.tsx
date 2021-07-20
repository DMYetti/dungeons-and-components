import {
  ColumnBreak,
  Description,
  Heading1,
  Heading2,
  Legalese,
  Page,
  PageTitle,
  TableOfContents,
} from "dungeons-and-components"

export default function Introduction(): JSX.Element {
  return (
    <>
      <Page footnote="Introduction">
        <PageTitle>Introduction</PageTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1>Synopsis</Heading1>
        <p>
          What is the story about? (Think of this like the summary on the back
          of a book.) <em>100-200 words.</em>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1>Using This Adventure</Heading1>
        <p>
          This adventure can be played with the Dungeons and Dragons 5e Basic
          Ruleset provided from the wizard of the coast website. The Dungeon
          Master’s Guide (DMG), Player’s Handbook (PHB), and Monster Manual (MM)
          are recommended but not a requirement.
        </p>

        <Description>
          <p>
            When you see a dialogue box like this; it’s meant to be read out
            loud or paraphrased for the Player Characters to set up some
            immersion.
          </p>
        </Description>

        <Heading1>Legalese</Heading1>
        <Legalese year="2020" name="Christopher Baker" />

        <ColumnBreak />

        <TableOfContents
          items={[
            "Introduction",
            [
              "Synopsis",
              "Using This Adventure",
              "About This Adventure",
              ["Adventure Background", "Adventure Hooks", "Adventure Overview"],
            ],
            "1. [Chapter 1 Name]",
            [
              "Map",
              ["M1. Location", "M2. Location", "M3. Location", "M4. Location"],
            ],
            "2. [Chapter 2 Name]",
            ["Suggested Word Count"],
            "3. [Chapter 3 Name]",
            ["Suggested Word Count"],
            "Epilogue",
            ["Outcome #1", "Outcome #2"],
            "Afterword",
            ["Acknowledgments", "Author Bio", "Art Credits"],
            "Appendices",
            [
              "Appendix A: Magic Items",
              "Appendix B: Monsters",
              "Appendix C: NPCs",
              "Appendix D: Handouts",
            ],
          ]}
        />
      </Page>

      <Page footnote="About This Adventure">
        <PageTitle>About This Adventure</PageTitle>

        <Heading1>Adventure Background</Heading1>
        <p>
          What information do DMs need to know to run the module?{" "}
          <em>100-300 words.</em>
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1>Adventure Hooks</Heading1>
        <p>
          How can the characters participate or get involved in the story?{" "}
          <em>100-200 words.</em>
        </p>

        <Heading2>Hook 1</Heading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading2>Hook 2</Heading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading2>Hook 3</Heading2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Page>

      <Page footnote="Adventure Overview">
        <PageTitle>Adventure Overview</PageTitle>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1>Ch 1. [Chapter 1 Name]</Heading1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1>Ch 2. [Chapter 2 Name]</Heading1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1>Ch 3. [Chapter 3 Name]</Heading1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Heading1 name="Epilogue Overview">Epilogue</Heading1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Page>
    </>
  )
}
