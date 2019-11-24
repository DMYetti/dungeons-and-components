import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import getOrdinal from '../../utils/get-ordinal';

import {
  Container,
  Level,
  LevelTitle,
  SpellList,
  SpellName,
} from './spell-list.styled';

export default function Spell({ spells, ...props }) {
  const levels = useMemo(() => getLevels(spells), [ spells ]);

  return (
    <Container {...props}>
      {levels.map(([ level, spells ]) => (
        <Level key={level}>
          <LevelTitle>{ level === 0 ? `Cantrips (${0} Level)` : `${getOrdinal(level)} Level`}</LevelTitle>
          <SpellList>
            {spells.map(spell => (
              <SpellName key={spell}>{spell}</SpellName>
            ))}
          </SpellList>
        </Level>
      ))}
    </Container>
  );
}

Spell.propTypes = {
  spells: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    level: PropTypes.number.isRequired,
  })).isRequired,
};

function getLevels(spells) {
  const levels = new Map();
  for (const { title, level } of spells) {
    const spells = levels.get(level) || [];
    spells.push(title);
    levels.set(level, spells);
  }

  return Array.from(levels.entries())
    .map(([ level, spells ]) => [ level, spells.sort() ]);
}
