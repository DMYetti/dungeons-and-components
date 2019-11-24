import PropTypes from 'prop-types';
import React from 'react';

import getOrdinal from '../../utils/get-ordinal';
import Table from '../table';

export default function ClassTable({ title, levels, ...props }) {
  const hasSpellcasting = levels.some(level => level.spellcasting);

  return (
    <Table
      {...props}
      wide
      bordered
      title={title}
      data={levels}
      columns={[
        { key: '@index', label: 'Level', align: 'center', transform: (__, index) => getOrdinal(index) },
        { key: '@index', label: 'Proficiency Bonus', align: 'center', transform: (__, index) => getProficiencyBonus(index) },
        { key: 'features', label: 'Features', transform: v => (v ? v.join(', ') : orDash(v)) },
        ...(hasSpellcasting === false ? [] : [
          { key: 'spellcasting.cantrips', label: 'Cantrips Known', align: 'center', transform: orDash },
          { key: 'spellcasting.spells', label: 'Spells Known', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[0]', label: '1st', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[1]', label: '2nd', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[2]', label: '3rd', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[3]', label: '4th', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[4]', label: '5th', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[5]', label: '6th', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[6]', label: '7th', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[7]', label: '8th', align: 'center', transform: orDash },
          { key: 'spellcasting.slots[8]', label: '9th', align: 'center', transform: orDash },
        ]),
      ]}
    />
  );
}

ClassTable.propTypes = {
  title: PropTypes.string.isRequired,
  levels: PropTypes.arrayOf(PropTypes.shape({
    features: PropTypes.arrayOf(PropTypes.string),
    spellcasting: PropTypes.shape({
      cantrips: PropTypes.number.isRequired,
      spells: PropTypes.number.isRequired,
      slots: PropTypes.arrayOf(PropTypes.number).isRequired,
    }),
  })).isRequired,
};

function orDash(value) {
  return value || '—';
}

function getProficiencyBonus(level) {
  return Math.floor(level / 4) + 2;
}
