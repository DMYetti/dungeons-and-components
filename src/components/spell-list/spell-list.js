import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

import getOrdinal from '../../utils/get-ordinal';

import {
  Container,
  Title,
  Level,
  LevelTitle,
  Spells,
  Spell,
} from './spell-list.styled';

export default function SpellList({ title, spells, ...props }) {
  const levels = useMemo(() => getLevels(spells), [ spells ]);

  return (
    <Container {...props}>
      {title && (
        <Title>{title}</Title>
      )}
      {levels.map(([ level, spells ]) => (
        <Level key={level}>
          <LevelTitle>{ level === 0 ? `Cantrips (${0} Level)` : `${getOrdinal(level)} Level`}</LevelTitle>
          <Spells>
            {spells.map(spell => (
              <Spell key={spell}>{spell}</Spell>
            ))}
          </Spells>
        </Level>
      ))}
    </Container>
  );
}

SpellList.propTypes = {
  title: PropTypes.string,
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
