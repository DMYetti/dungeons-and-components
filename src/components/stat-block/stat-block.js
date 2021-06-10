/* eslint-disable react/no-unused-prop-types */
/**
 * 1. The rule does not see nested props extracted during a map.
 * 2. There are several defined but not yet used props.
 */

import React from 'react'
import { startCase } from 'lodash'
import DNCPropTypes from '../../utils/prop-types'

import { getDiceAverage } from '../../utils/dice'
import { getModifier } from '../../utils/stats'

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
} from './stat-block.styled'

export function RawStatBlock({
  title,
  size,
  type,
  subtype,
  alignment,
  gender,
  armorclass,
  hitpoints,
  speed,
  abilities,
  proficiencies,
  conditions,
  damages,
  languages,
  challenge,
  properties,
  traits,
  actions,
  children,
  // ...props
}) {
  /* eslint-disable no-console */
  if (proficiencies) {
    console.warn('Property not yet supported: proficiencies')
  }
  if (conditions) {
    console.warn('Property not yet supported: conditions')
  }
  if (damages) {
    console.warn('Property not yet supported: damages')
  }
  /* eslint-enable no-console */

  const hasProficiencies = false
  const hasSenses = false
  const hasLanguages = Array.isArray(languages) && languages.length > 0
  const hasChallenge = typeof challenge === 'number'
  const hasProperties = Array.isArray(properties) && properties.length > 0
  const hasAbilities = abilities && Object.keys(abilities).length > 0
  const hasTraits = Array.isArray(traits) && traits.length > 0
  const hasActions = Array.isArray(actions) && actions.length > 0
  const hasChildren = typeof children !== 'undefined'

  return (
    <Container>
      <Title>{title}</Title>
      <Summary>
        <span>{startCase(size)}</span>
        {subtype ? (
          <span>{startCase(type)} ({startCase(subtype)}),</span>
        ) : (
          <span>{startCase(type)},</span>
        )}
        <span>{startCase(alignment)}</span>
        {gender && (<span>{startCase(gender)}</span>)}
      </Summary>

      <HorizontalRule />
      <InfoList>
        <InfoItem><InfoLabel>Armor Class</InfoLabel> {armorclass}</InfoItem>
        <InfoItem><InfoLabel>Hit Points</InfoLabel> ({getDiceAverage(hitpoints)}) {hitpoints}</InfoItem>
        <InfoItem><InfoLabel>Speed</InfoLabel> {speed}</InfoItem>
      </InfoList>

      {hasAbilities && (
        <>
          <HorizontalRule />
          <Abilities>
            <Ability>
              <AbilityLabel>STR</AbilityLabel>
              <AbilityValue>
                {abilities.strength} ({getModifier(abilities.strength)})
              </AbilityValue>
            </Ability>
            <Ability>
              <AbilityLabel>DEX</AbilityLabel>
              <AbilityValue>
                {abilities.dexterity} ({getModifier(abilities.dexterity)})
              </AbilityValue>
            </Ability>
            <Ability>
              <AbilityLabel>CON</AbilityLabel>
              <AbilityValue>
                {abilities.constitution} ({getModifier(abilities.constitution)})
              </AbilityValue>
            </Ability>
            <Ability>
              <AbilityLabel>INT</AbilityLabel>
              <AbilityValue>
                {abilities.intelligence} ({getModifier(abilities.intelligence)})
              </AbilityValue>
            </Ability>
            <Ability>
              <AbilityLabel>WIS</AbilityLabel>
              <AbilityValue>
                {abilities.wisdom} ({getModifier(abilities.wisdom)})
              </AbilityValue>
            </Ability>
            <Ability>
              <AbilityLabel>CHA</AbilityLabel>
              <AbilityValue>
                {abilities.charisma} ({getModifier(abilities.charisma)})
              </AbilityValue>
            </Ability>
          </Abilities>
        </>
      )}

      {(hasProficiencies || hasSenses || hasLanguages || hasChallenge || hasProperties) && (
        <>
          <HorizontalRule />
          <InfoList>
            {/* skills (from proficiencies) */}
            {/* senses */}
            {hasLanguages && (
              <InfoItem>
                <InfoLabel>Languages</InfoLabel>
                {languages.map(language => startCase(language)).join(', ')}
              </InfoItem>
            )}
            {hasChallenge && (
              <InfoItem>
                <InfoLabel>Challenge</InfoLabel>
                {challenge}
              </InfoItem>
            )}
            {hasProperties && (
              <>
                {properties.map(({ title, description }) => (
                  <InfoItem key={title}>
                    <InfoLabel>{title}</InfoLabel>
                    {description}
                  </InfoItem>
                ))}
              </>
            )}
          </InfoList>
        </>
      )}

      {(hasTraits || hasActions) && (<HorizontalRule />)}

      {hasTraits && (
        <>
          {traits.map(({ title, description }) => (
            <Note key={title}>
              <NoteLabel>{title}</NoteLabel>
              {description}
            </Note>
          ))}
        </>
      )}

      {hasActions && (
        <>
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
        </>
      )}

      {hasChildren && (
        <>
          <HorizontalRule />
          {children}
        </>
      )}
    </Container>
  )
}

RawStatBlock.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired,
  size: DNCPropTypes.size.isRequired,
  type: PropTypes.string.isRequired,
  subtype: PropTypes.string,
  alignment: PropTypes.string.isRequired,
  gender: PropTypes.string,

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
  }),
  proficiencies: PropTypes.arrayOf(PropTypes.string),

  conditions: PropTypes.shape({
    immune: PropTypes.arrayOf(PropTypes.string),
    vulnerable: PropTypes.arrayOf(PropTypes.string),
  }),
  damages: PropTypes.shape({
    immune: PropTypes.arrayOf(PropTypes.string),
    vulnerable: PropTypes.arrayOf(PropTypes.string),
  }),

  languages: PropTypes.arrayOf(PropTypes.string),
  challenge: PropTypes.number,

  properties: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),

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
}

const templates = {
  commoner: {
    size: 'medium',
    type: 'humanoid',
    alignment: 'true neutral',
    armorclass: 10,
    hitpoints: '1d8',
    speed: 30,
    abilities: {
      charisma: 10,
      constitution: 10,
      dexterity: 10,
      intelligence: 10,
      strength: 10,
      wisdom: 10,
    },
  },
}

export default function StatBlockWithTemplate({ template, ...props }) {
  const defaults = templates[template]

  return (
    <RawStatBlock {...defaults} {...props} />
  )
}

StatBlockWithTemplate.propTypes = {
  template: PropTypes.oneOf(Object.keys(templates)),
}
