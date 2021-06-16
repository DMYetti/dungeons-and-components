import Container from "dungeons-and-components"

import Afterword from "./sections/Afterword"
import Appendices from "./sections/Appendices"
import Chapter1 from "./sections/Chapter1"
import Chapter2 from "./sections/Chapter2"
import Chapter3 from "./sections/Chapter3"
import Cover from "./sections/Cover"
import Epilogue from "./sections/Epilogue"
import Introduction from "./sections/Introduction"

export default function Adventure(): JSX.Element {
  return (
    <Container>
      <Cover />
      <Introduction />
      <Chapter1 />
      <Chapter2 />
      <Chapter3 />
      <Epilogue />
      <Afterword />
      <Appendices />
    </Container>
  )
}
