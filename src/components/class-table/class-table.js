import PropTypes from 'prop-types';
import React from 'react';

import getOrdinal from '../../utils/get-ordinal';
import Table from '../table/table';

export default function ClassTable({ title, levels, preCols, postCols, ...props }) {
  const hasCantrips = levels.some(level => level.spellcasting?.cantrips);
  const hasSpellsKnown = levels.some(level => level.spellcasting?.spells);
  const maxSpellLevel = Math.max(...levels
    .map(level => level.spellcasting?.slots?.length)
    .filter(v => v));

  return (
    <Table
      {...props}
      wide
      bordered
      title={title}
      data={levels}
      columns={[
        { key: '@index', label: 'Level', align: 'center', transform: (__, index) => getOrdinal(index + 1) },
        { key: '@index', label: 'Proficiency Bonus', align: 'center', transform: (__, index) => getProficiencyBonus(index) },
        ...!preCols ? [] : preCols.map(({ key, label, transform, ...props }) => ({
          key,
          label,
          transform: (...props) => (transform && transform(...props)) || orDash(...props),
          align: 'center',
          ...props,
        })),
        { key: 'features', label: 'Features', transform: v => (v ? v.join(', ') : orDash(v)) },
        ...(maxSpellLevel <= 0 ? [] : [
          hasCantrips && { key: 'spellcasting.cantrips', label: 'Cantrips Known', align: 'center', transform: orDash },
          hasSpellsKnown && { key: 'spellcasting.spells', label: 'Spells Known', align: 'center', transform: orDash },
          maxSpellLevel >= 1 && { key: 'spellcasting.slots[0]', label: '1st', align: 'center', transform: orDash },
          maxSpellLevel >= 2 && { key: 'spellcasting.slots[1]', label: '2nd', align: 'center', transform: orDash },
          maxSpellLevel >= 3 && { key: 'spellcasting.slots[2]', label: '3rd', align: 'center', transform: orDash },
          maxSpellLevel >= 4 && { key: 'spellcasting.slots[3]', label: '4th', align: 'center', transform: orDash },
          maxSpellLevel >= 5 && { key: 'spellcasting.slots[4]', label: '5th', align: 'center', transform: orDash },
          maxSpellLevel >= 6 && { key: 'spellcasting.slots[5]', label: '6th', align: 'center', transform: orDash },
          maxSpellLevel >= 7 && { key: 'spellcasting.slots[6]', label: '7th', align: 'center', transform: orDash },
          maxSpellLevel >= 8 && { key: 'spellcasting.slots[7]', label: '8th', align: 'center', transform: orDash },
          maxSpellLevel >= 9 && { key: 'spellcasting.slots[8]', label: '9th', align: 'center', transform: orDash },
        ].filter(v => v)),
        ...!postCols ? [] : postCols.map(({ key, label, transform, ...props }) => ({
          key,
          label,
          transform: (...props) => (transform && transform(...props)) || orDash(...props),
          align: 'center',
          ...props,
        })),
      ]}
    />
  );
}

ClassTable.propTypes = {
  title: PropTypes.string.isRequired,
  levels: PropTypes.arrayOf(PropTypes.shape({
    features: PropTypes.arrayOf(PropTypes.string),
    spellcasting: PropTypes.shape({
      cantrips: PropTypes.number,
      spells: PropTypes.number,
      slots: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  })).isRequired,
  preCols: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })),
  postCols: PropTypes.arrayOf(PropTypes.shape({
    key: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    transform: PropTypes.func,
  })),
};

function orDash(value) {
  return value || '—';
}

function getProficiencyBonus(level) {
  return Math.floor(level / 4) + 2;
}
