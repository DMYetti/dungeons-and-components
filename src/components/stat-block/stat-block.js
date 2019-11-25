import PropTypes from 'prop-types';
import React from 'react';
import DNCPropTypes from '../../utils/prop-types';

import { getDiceAverage } from '../../utils/dice';
import { getModifier } from '../../utils/stats';

import {
  Container,
  HorizontalRule,
  Title,
  Heading,
  Summary,
  InfoList,
  InfoItem,
  InfoLabel,
  Abilities,
  Ability,
  AbilityLabel,
  AbilityValue,
  AbilityModifier,
  Note,
  NoteLabel,
  NoteType,
} from './stat-block.styled';

export default function StatBlock({
  title,
  size,
  type,
  alignment,
  armorclass,
  hitpoints,
  speed,
  abilities,
  proficiencies,
  conditions,
  damages,
  languages,
  challenge,
  traits,
  actions,
  // ...props
}) {
  return (
    <Container>
      <Title>{title}</Title>
      <Summary>{size} {type}, {alignment}</Summary>

      <HorizontalRule />

      <InfoList>
        <InfoItem><InfoLabel>Armor Class</InfoLabel> {armorclass}</InfoItem>
        <InfoItem><InfoLabel>Hit Points</InfoLabel> ({getDiceAverage(hitpoints)}) {hitpoints}</InfoItem>
        <InfoItem><InfoLabel>Speed</InfoLabel> {speed}</InfoItem>
      </InfoList>

      <HorizontalRule />

      <Abilities>
        <Ability>
          <AbilityLabel>STR</AbilityLabel>
          <AbilityValue>{abilities.strength}</AbilityValue>
          <AbilityModifier>({getModifier(abilities.strength)})</AbilityModifier>
        </Ability>
        <Ability>
          <AbilityLabel>DEX</AbilityLabel>
          <AbilityValue>{abilities.dexterity}</AbilityValue>
          <AbilityModifier>({getModifier(abilities.dexterity)})</AbilityModifier>
        </Ability>
        <Ability>
          <AbilityLabel>CON</AbilityLabel>
          <AbilityValue>{abilities.constitution}</AbilityValue>
          <AbilityModifier>({getModifier(abilities.constitution)})</AbilityModifier>
        </Ability>
        <Ability>
          <AbilityLabel>INT</AbilityLabel>
          <AbilityValue>{abilities.intelligence}</AbilityValue>
          <AbilityModifier>({getModifier(abilities.intelligence)})</AbilityModifier>
        </Ability>
        <Ability>
          <AbilityLabel>WIS</AbilityLabel>
          <AbilityValue>{abilities.wisdom}</AbilityValue>
          <AbilityModifier>({getModifier(abilities.wisdom)})</AbilityModifier>
        </Ability>
        <Ability>
          <AbilityLabel>CHA</AbilityLabel>
          <AbilityValue>{abilities.charisma}</AbilityValue>
          <AbilityModifier>({getModifier(abilities.charisma)})</AbilityModifier>
        </Ability>
      </Abilities>

      <HorizontalRule />

      <InfoList>
        <InfoItem><InfoLabel>Languages</InfoLabel> {languages.join(', ')}</InfoItem>
        <InfoItem><InfoLabel>Challenge</InfoLabel> {challenge}</InfoItem>
      </InfoList>

      <HorizontalRule />

      {traits.map(({ title, description }) => (
        <Note key={title}>
          <NoteLabel>{title}</NoteLabel>
          {description}
        </Note>
      ))}

      <Heading>Actions</Heading>

      {actions.map(({ title, type, hit, range, damage, description }) => (
        <Note key={title}>
          <NoteLabel>{title}.</NoteLabel>
          <NoteType>{type}:</NoteType>
          {range.length === 2 ? (
            <span>{hit} to hit, {range[0]} {range[1]}ft., one target.</span>
          ) : (
            <span>{hit} to hit, {range[0]} {range[1]}/{range[2]}ft., one target.</span>
          )}
          <span>Hit {getDiceAverage(damage[0])} ({damage[0]}) {damage[1]} damage.</span>
          {description}
        </Note>
      ))}
    </Container>
  );
}

StatBlock.propTypes = {
  title: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  alignment: PropTypes.string.isRequired,

  armorclass: PropTypes.number.isRequired,
  hitpoints: DNCPropTypes.die.isRequired,
  speed: PropTypes.number.isRequired,

  abilities: PropTypes.shape({
    charisma: PropTypes.number.isRequired,
    constitution: PropTypes.number.isRequired,
    dexterity: PropTypes.number.isRequired,
    intelligence: PropTypes.number.isRequired,
    strength: PropTypes.number.isRequired,
    wisdom: PropTypes.number.isRequired,
  }).isRequired,
  proficiencies: PropTypes.arrayOf(PropTypes.string).isRequired,

  conditions: PropTypes.shape({
    immune: PropTypes.arrayOf(PropTypes.string),
    vulnerable: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  damages: PropTypes.shape({
    immune: PropTypes.arrayOf(PropTypes.string),
    vulnerable: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,

  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  challenge: PropTypes.number.isRequired,

  traits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),

  actions: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    hit: PropTypes.number.isRequired,
    range: PropTypes.oneOfType([
      DNCPropTypes.tuple([
        PropTypes.oneOf([
          'reach',
        ]).isRequired,
        PropTypes.number.isRequired,
      ]),
      DNCPropTypes.tuple([
        PropTypes.oneOf([
          'range',
        ]).isRequired,
        PropTypes.number.isRequired,
        PropTypes.number.isRequired,
      ]),
    ]).isRequired,
    damage: DNCPropTypes.tuple([
      DNCPropTypes.die.isRequired,
      PropTypes.string,
    ]),
    description: PropTypes.string,
  })),
};
