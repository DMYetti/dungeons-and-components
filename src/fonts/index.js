/* Main Font */
import BookSanityRegular from './BookSanity-Regular.otf'
import BookSanityBold from './BookSanity-Bold.otf'
import BookSanityItalic from './BookSanity-Italic.otf'
import BookSanityBoldItalic from './BookSanity-Bold-Italic.otf'

/* Headers */
import MrJeeves from './MrJeeves.woff'
import MrJeeves2 from './MrJeeves.woff2'

/* Notes and Tables */
import ScalySans from './ScalySans.woff'
import ScalySans2 from './ScalySans.woff2'
import ScalySansSmallCaps from './ScalySans-SmallCaps.woff'
import ScalySansSmallCaps2 from './ScalySans-SmallCaps.woff2'

/* Fancy First Letter */
import Solberry from './Solberry.woff'
import Solberry2 from './Solberry.woff2'

export default {
  BookSanity: [
    { files: [ BookSanityRegular ] },
    { files: [ BookSanityBold ], bold: true },
    { files: [ BookSanityItalic ], italic: true },
    { files: [ BookSanityBoldItalic ], bold: true, italic: true },
  ],
  MrJeeves: [
    { files: [ MrJeeves, MrJeeves2 ] },
  ],
  ScalySans: [
    { files: [ ScalySans, ScalySans2 ] },
  ],
  ScalySansSmallCaps: [
    { files: [ ScalySansSmallCaps, ScalySansSmallCaps2 ] },
  ],
  Solberry: [
    { files: [ Solberry, Solberry2 ] },
  ],
}

const formats = {
  otf: 'opentype',
  woff2: 'woff2',
  woff: 'woff',
}

export function getFormat(file) {
  const index = file.lastIndexOf('.')
  const ext = file.slice(index + 1)
  return formats[ext]
}
