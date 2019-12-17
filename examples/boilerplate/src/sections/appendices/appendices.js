import React from 'react';

import {
  Page,
  PageTitle,
  StatBlock,
  // MagicItem,
} from 'dungeons-and-components';

export default function Appendices() {
  return (
    <>
      <Page footnote="Appendix A: Magic Items">
        <PageTitle>Appendix A: Magic Items</PageTitle>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Page>

      <Page footnote="Appendix B: Monsters">
        <PageTitle>Appendix B: Monsters</PageTitle>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Page>

      <Page footnote="Appendix C: NPCs">
        <PageTitle>Appendix C: NPCs</PageTitle>

        <StatBlock
          template="commoner"
          title="Common Townsperson"
          languages={[ 'common' ]}
        />
      </Page>

      <Page footnote="Appendix D: Handouts">
        <PageTitle>Appendix C: Handouts</PageTitle>

        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </Page>
    </>
  );
}
