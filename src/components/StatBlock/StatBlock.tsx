import type { DiceType } from "../../helpers/dice"

import React from "react"
import { merge, startCase } from "lodash"

import Dice from "../Dice/Dice"

import { signed } from "../../helpers/numbers"
import { getStatModifier } from "../../helpers/stats"

import {
  Container,
  HorizontalRule,
  Title,
  Heading,
  Summary,
  Source,
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
} from "./StatBlock.styled"

export interface BaseStatBlockProps
  extends React.ComponentProps<typeof Container> {
  title: string
  size?: string
  type?: string
  subtype?: string
  alignment?: string
  gender?: string
  pronouns?: string
  languages?: string[]
  senses?: string[]

  abilities?: {
    charisma?: number
    constitution?: number
    dexterity?: number
    intelligence?: number
    strength?: number
    wisdom?: number
  }

  armorClass?: number
  hitPoints?: DiceType
  speed?: string
  challenge?: number

  savingThrows?: Array<[string, number]>
  skills?: Array<[string, number]>
  damageResistances?: string[]
  damageImmunities?: string[]
  damageVulnerabilities?: string[]
  conditionImmunities?: string[]

  properties?: Array<{
    title: string
    description: string
  }>
  traits?: Array<{
    title: string
    description: string
  }>
  actions?: Array<{
    title: string
    type?: string
    hit?: number
    range?: [number, string] | [number, number, string]
    damage?: [DiceType, string]
    description?: string
  }>

  sourceTitle?: string
  sourceLink?: string

  children?: React.ReactNode
}

export function BaseStatBlock({
  title,
  size,
  type,
  subtype,
  alignment,
  gender,
  pronouns,
  languages,
  senses,

  abilities,
  armorClass,
  hitPoints,
  speed,
  challenge,

  savingThrows,
  skills,
  damageResistances,
  damageImmunities,
  damageVulnerabilities,
  conditionImmunities,

  properties,
  traits,
  actions,

  sourceTitle,
  sourceLink,

  children,
  ...props
}: BaseStatBlockProps): JSX.Element {
  const hasLanguages = hasValue(languages)
  const hasSenses = hasValue(senses)
  const hasAbilities = hasValue(abilities)
  const hasChallenge = hasValue(challenge)

  const hasSavingThrows = hasValue(savingThrows)
  const hasSkills = hasValue(skills)
  const hasDamageResistances = hasValue(damageResistances)
  const hasDamageImmunities = hasValue(damageImmunities)
  const hasDamageVulnerabilities = hasValue(damageVulnerabilities)
  const hasConditionImmunities = hasValue(conditionImmunities)

  const hasProperties = hasValue(properties)
  const hasTraits = hasValue(traits)
  const hasActions = hasValue(actions)
  const hasChildren = typeof children !== "undefined"

  return (
    <Container {...props}>
      <Title>
        {title} {pronouns && `(${pronouns})`}
      </Title>
      {(size || gender || type || alignment) && (
        <Summary>
          {size && <span>{startCase(size)}</span>}
          {gender && <span>{startCase(gender)}</span>}
          {type && !subtype && <span>{startCase(type)},</span>}
          {type && subtype && (
            <span>
              {startCase(type)} ({startCase(subtype)}),
            </span>
          )}
          {alignment && <span>{startCase(alignment)}</span>}
        </Summary>
      )}

      {sourceTitle && (
        <Source>
          {sourceTitle && (
            <>
              [source:{" "}
              {sourceLink ? (
                <a
                  href={sourceLink}
                  target="_blank"
                  rel="external noopener noreferrer"
                >
                  {sourceTitle}
                </a>
              ) : (
                sourceTitle
              )}
              ]
            </>
          )}
        </Source>
      )}

      {(armorClass || hitPoints || speed) && (
        <>
          <HorizontalRule />

          <InfoList>
            {armorClass && (
              <InfoItem>
                <InfoLabel>Armor Class</InfoLabel>
                {armorClass}
              </InfoItem>
            )}
            {hitPoints && (
              <InfoItem>
                <InfoLabel>Hit Points</InfoLabel>
                <Dice value={hitPoints} />
              </InfoItem>
            )}
            {speed && (
              <InfoItem>
                <InfoLabel>Speed</InfoLabel>
                {speed}
              </InfoItem>
            )}
          </InfoList>
        </>
      )}

      {hasAbilities && (
        <>
          <HorizontalRule />

          <Abilities>
            {abilities?.strength && (
              <Ability>
                <AbilityLabel>STR</AbilityLabel>
                <AbilityValue>
                  {abilities.strength} ({getStatModifier(abilities.strength)})
                </AbilityValue>
              </Ability>
            )}
            {abilities?.dexterity && (
              <Ability>
                <AbilityLabel>DEX</AbilityLabel>
                <AbilityValue>
                  {abilities.dexterity} ({getStatModifier(abilities.dexterity)})
                </AbilityValue>
              </Ability>
            )}
            {abilities?.constitution && (
              <Ability>
                <AbilityLabel>CON</AbilityLabel>
                <AbilityValue>
                  {abilities.constitution} (
                  {getStatModifier(abilities.constitution)})
                </AbilityValue>
              </Ability>
            )}
            {abilities?.intelligence && (
              <Ability>
                <AbilityLabel>INT</AbilityLabel>
                <AbilityValue>
                  {abilities.intelligence} (
                  {getStatModifier(abilities.intelligence)})
                </AbilityValue>
              </Ability>
            )}
            {abilities?.wisdom && (
              <Ability>
                <AbilityLabel>WIS</AbilityLabel>
                <AbilityValue>
                  {abilities.wisdom} ({getStatModifier(abilities.wisdom)})
                </AbilityValue>
              </Ability>
            )}
            {abilities?.charisma && (
              <Ability>
                <AbilityLabel>CHA</AbilityLabel>
                <AbilityValue>
                  {abilities.charisma} ({getStatModifier(abilities.charisma)})
                </AbilityValue>
              </Ability>
            )}
          </Abilities>
        </>
      )}

      {(hasSavingThrows ||
        hasSkills ||
        hasDamageResistances ||
        hasDamageImmunities ||
        hasDamageVulnerabilities ||
        hasConditionImmunities ||
        hasSenses ||
        hasLanguages ||
        hasChallenge ||
        hasProperties) && (
        <>
          <HorizontalRule />

          <InfoList>
            {hasSavingThrows && (
              <InfoItem>
                <InfoLabel>Saving Throws</InfoLabel>
                {savingThrows
                  ?.map(
                    ([title, value]) => `${startCase(title)} ${signed(value)}`,
                  )
                  .join(", ")}
              </InfoItem>
            )}
            {hasSkills && (
              <InfoItem>
                <InfoLabel>Skills</InfoLabel>
                {skills
                  ?.map(
                    ([title, value]) => `${startCase(title)} ${signed(value)}`,
                  )
                  .join(", ")}
              </InfoItem>
            )}
            {hasDamageResistances && (
              <InfoItem>
                <InfoLabel>Damage Resistances</InfoLabel>
                {damageResistances
                  ?.map((damageResistance) => startCase(damageResistance))
                  .join(", ")}
              </InfoItem>
            )}
            {hasDamageImmunities && (
              <InfoItem>
                <InfoLabel>Damage Immunities</InfoLabel>
                {damageImmunities
                  ?.map((damageImmunity) => startCase(damageImmunity))
                  .join(", ")}
              </InfoItem>
            )}
            {hasDamageVulnerabilities && (
              <InfoItem>
                <InfoLabel>Damage Vulnerabilities</InfoLabel>
                {damageVulnerabilities
                  ?.map((damageVulnerability) => startCase(damageVulnerability))
                  .join(", ")}
              </InfoItem>
            )}
            {hasConditionImmunities && (
              <InfoItem>
                <InfoLabel>Condition Immunities</InfoLabel>
                {conditionImmunities
                  ?.map((conditionImmunity) => startCase(conditionImmunity))
                  .join(", ")}
              </InfoItem>
            )}
            {hasSenses && (
              <InfoItem>
                <InfoLabel>Senses</InfoLabel>
                {senses?.join(", ")}
              </InfoItem>
            )}
            {hasLanguages && (
              <InfoItem>
                <InfoLabel>Languages</InfoLabel>
                {languages?.map((language) => startCase(language)).join(", ")}
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
                {properties?.map(({ title, description }) => (
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

      {hasTraits && (
        <>
          <HorizontalRule />

          {traits?.map(({ title, description }) => (
            <Note key={title}>
              <NoteLabel>{title}</NoteLabel>
              {description}
            </Note>
          ))}
        </>
      )}

      {hasActions && (
        <>
          <HorizontalRule />

          <Heading>Actions</Heading>

          {actions?.map(({ title, type, hit, range, damage, description }) => (
            <Note key={title}>
              <NoteLabel>{title}.</NoteLabel>
              {type && <NoteType>{type}:</NoteType>}
              {typeof hit !== "undefined" && <span>{signed(hit)} to hit.</span>}
              {range?.length === 2 && (
                <span>
                  reach {range[0]} {range[1]}, one target.
                </span>
              )}
              {range?.length === 3 && (
                <span>
                  range {range[0]}/{range[1]} {range[2]}, one target.
                </span>
              )}
              {damage && (
                <span>
                  <NoteType>Hit:</NoteType>
                  <Dice value={damage[0]} type={damage[1]} /> damage.
                </span>
              )}
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

const templates: {
  commoner: Omit<BaseStatBlockProps, "title">
} = {
  commoner: {
    size: "medium",
    type: "humanoid",
    alignment: "true neutral",
    armorClass: 10,
    hitPoints: "1d8",
    speed: "30 ft.",
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

export interface StatBlockProps extends BaseStatBlockProps {
  title: string
  template?: keyof typeof templates
}

export default function StatBlock({
  template,
  ...props
}: StatBlockProps): JSX.Element {
  const defaults = (template && templates[template]) || {}
  const mergedProps = merge({}, defaults, props)

  return <BaseStatBlock {...mergedProps} />
}

function hasValue(value?: unknown): boolean {
  if (typeof value === "string") {
    return value !== ""
  }

  if (typeof value === "number") {
    return !Number.isNaN(value)
  }

  if (Array.isArray(value)) {
    return value.length > 0
  }

  if (typeof value === "object" && value !== null) {
    return Object.keys(value).length > 0
  }

  return !!value
}
