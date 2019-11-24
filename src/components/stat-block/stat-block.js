import PropTypes from 'prop-types';
import React from 'react';
import PHBPropTypes from '../../utils/prop-types';

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
          <AbilityValue>{abilities.strength} ({getModifier(abilities.strength)})</AbilityValue>
        </Ability>
        <Ability>
          <AbilityLabel>DEX</AbilityLabel>
          <AbilityValue>{abilities.dexterity} ({getModifier(abilities.dexterity)})</AbilityValue>
        </Ability>
        <Ability>
          <AbilityLabel>CON</AbilityLabel>
          <AbilityValue>{abilities.constitution} ({getModifier(abilities.constitution)})</AbilityValue>
        </Ability>
        <Ability>
          <AbilityLabel>INT</AbilityLabel>
          <AbilityValue>{abilities.intelligence} ({getModifier(abilities.intelligence)})</AbilityValue>
        </Ability>
        <Ability>
          <AbilityLabel>WIS</AbilityLabel>
          <AbilityValue>{abilities.wisdom} ({getModifier(abilities.wisdom)})</AbilityValue>
        </Ability>
        <Ability>
          <AbilityLabel>CHA</AbilityLabel>
          <AbilityValue>{abilities.charisma} ({getModifier(abilities.charisma)})</AbilityValue>
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
  hitpoints: PHBPropTypes.die.isRequired,
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
    hit: PropTypes.string.isRequired, // 5 or: '@char+1'
    range: PropTypes.oneOfType([
      PHBPropTypes.tuple([
        PropTypes.oneOf([
          'reach',
        ]).isRequired,
        PropTypes.number.isRequired,
      ]),
      PHBPropTypes.tuple([
        PropTypes.oneOf([
          'range',
        ]).isRequired,
        PropTypes.number.isRequired,
        PropTypes.number.isRequired,
      ]),
    ]).isRequired,
    damage: PHBPropTypes.tuple([
      PHBPropTypes.die.isRequired,
      PropTypes.string,
    ]),
    description: PropTypes.string,
  })),
};
