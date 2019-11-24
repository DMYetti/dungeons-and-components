import PropTypes from 'prop-types';
import React from 'react';
import PHBPropTypes from '../../utils/prop-types';

import getOrdinal from '../../utils/get-ordinal';

import {
  Container,
  Title,
  Details,
  InfoList,
  Info,
  Label,
  Value,
  Description,
} from './spell.styled';

export default function Spell({
  title,
  level,
  school,
  time,
  range,
  components,
  duration,
  children,
  ...props
}) {
  return (
    <Container {...props}>
      <Title>{title}</Title>
      <Details>{getOrdinal(level)}-level {school}</Details>

      <InfoList>
        <Info>
          <Label>Casting Time</Label>
          <Value>{Array.isArray(time) ? (`${time[0]} ${time[1]}`) : time}</Value>
        </Info>

        <Info>
          <Label>Range</Label>
          <Value>{Array.isArray(range) ? (`${range[0]} ${range[1]}`) : range}</Value>
        </Info>

        <Info>
          <Label>Components</Label>
          <Value>
            {[
              components.verbal && 'V',
              components.somatic && 'S',
              components.material && 'M',
            ].filter(v => v).join(', ')}
          </Value>
        </Info>

        <Info>
          <Label>Duration</Label>
          <Value>{Array.isArray(duration) ? (`${duration[0]} ${duration[1]}`) : duration}</Value>
        </Info>
      </InfoList>

      <Description>
        {children}
      </Description>
    </Container>
  );
}

Spell.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  school: PropTypes.string.isRequired,
  time: PropTypes.oneOfType([
    PropTypes.string,
    PHBPropTypes.tuple([
      PropTypes.number.isRequired,
      PropTypes.oneOf([
        'action',
        'bonus action',
      ]).isRequired,
    ]),
  ]).isRequired,
  range: PropTypes.oneOfType([
    PropTypes.string,
    PHBPropTypes.tuple([
      PropTypes.number.isRequired,
      PropTypes.oneOf([
        'feet',
      ]).isRequired,
    ]),
  ]).isRequired,
  components: PropTypes.shape({
    verbal: PropTypes.bool,
    somatic: PropTypes.bool,
    material: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string,
    ]),
  }),
  duration: PropTypes.oneOfType([
    PropTypes.string,
    PHBPropTypes.tuple([
      PropTypes.number.isRequired,
      PropTypes.oneOf([
        'rounds',
        'minutes',
        'hours',
      ]).isRequired,
    ]),
    PHBPropTypes.tuple([
      PropTypes.oneOf([
        'concentration',
      ]).isRequired,
      PropTypes.string.isRequired,
    ]),
  ]).isRequired,
  children: PropTypes.node.isRequired,
};
