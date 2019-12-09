import PropTypes from 'prop-types';

function tupleTypeChecker(typeCheckers) {
  function checkType(isRequired, props, propName, componentName, location, propFullName, ...rest) {
    const { [propName]: tuple } = props;

    if (tuple == null) {
      if (isRequired) {
        if (tuple === null) {
          return new Error(`The ${location} \`${propFullName}\` is marked as required in \`${componentName}\`, but its value is \`null\`.`);
        }

        return new Error(`The ${location} \`${propFullName}\` is marked as required in \`${componentName}\`, but its value is \`undefined\`.`);
      }

      return null;
    }

    if (!Array.isArray(tuple)) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Must be an array.`);
    }

    if (tuple.length > typeCheckers.length) {
      return new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`. Too many values provided.`);
    }

    const errors = [];
    for (let index = 0; index < typeCheckers.length; index++) {
      const error = typeCheckers[index](
        tuple,
        index,
        componentName,
        location,
        `${propFullName}[${index}]`,
        ...rest,
      );

      if (error) {
        errors.push(error.message);
      }
    }

    if (errors.length) {
      return new Error(errors.join('\n'));
    }

    return null;
  }

  const chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function dieChecker() {
  return PropTypes.string;
}

function sizeChecker() {
  return PropTypes.oneOf([
    'tiny',
    'small',
    'medium',
    'large',
    'huge',
    'gargantuan',
  ]);
}

export default {
  tuple: tupleTypeChecker,
  die: dieChecker(),
  size: sizeChecker(),
};
