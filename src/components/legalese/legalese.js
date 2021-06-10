import React from 'react'

/**
 * Use `Legalese` to provide a cover page.
 */
export default function Legalese({ year, name }) {
  return (
    <>
      <p>DUNGEONS & DRAGONS, D&D, Wizards of the Coast, Forgotten Realms, Ravenloft, Eberron, Ravnica, the dragon ampersand, Player’s Handbook, Monster Manual, Dungeon Master’s Guide, D&D Adventurers League, all other Wizards of the Coast product names, and their respective logos are trademarks of Wizards of the Coast in the USA and other countries.</p>

      <p>This work contains material that is copyright Wizards of the Coast and/or other authors. Such material is used with permission under the Community Content Agreement for Dungeon Masters Guild.</p>

      <p>All other original material in this work is copyright {year} by {name} and published under the Community Content Agreement for Dungeon Masters Guild.</p>
    </>
  )
}

Legalese.propTypes = {
  year: PropTypes.node.isRequired,
  name: PropTypes.node.isRequired,
}
