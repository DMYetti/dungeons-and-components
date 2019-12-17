import React from 'react';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import Container from 'dungeons-and-components';

import Cover from './sections/cover/cover';
import Introduction from './sections/introduction/introduction';
import Chapter1 from './sections/chapter1/chapter1';
import Chapter2 from './sections/chapter2/chapter2';
import Chapter3 from './sections/chapter3/chapter3';
import Epilogue from './sections/epilogue/epilogue';
import Afterword from './sections/afterword/afterword';
import Appendices from './sections/appendices/appendices';

export default function Adventure() {
  return (
    <HelmetProvider>
      <Container>
        <Helmet title="A Dungeons and Dragons 5e adventure" />

        <Cover />
        <Introduction />
        <Chapter1 />
        <Chapter2 />
        <Chapter3 />
        <Epilogue />
        <Afterword />
        <Appendices />
      </Container>
    </HelmetProvider>
  );
}
