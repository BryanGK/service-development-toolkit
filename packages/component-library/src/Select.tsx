import React from 'react';
import randomstring from 'randomstring';
import { SizeStyles } from './interface/size';
import { VariantStyles } from './interface/variant';
import { getStyleBuilder } from './helpers';

interface SelectProps {
  id?: string;
  name?: string;
  label?: string;
  variant?: string;
  size?: string;
  children?: any;
  defaultValue?: string;
  disabled?: boolean;
}

interface Styles extends VariantStyles, SizeStyles {
  defaultProps?: object;
  shared?: object;
}

const defaultStyles: Styles = {
  defaultProps: {
    variant: 'secondary',
    size: 'medium',
  },
  shared: {
    container: '',
    label: '',
    select: '',
  },
};

export const applyTheme = stylesToApply => {
  const styleBuilder = getStyleBuilder(stylesToApply, ['size', 'variant', 'fullWidth']);
  const Scontainer = styleBuilder('div', 'container');
  const Slabel = styleBuilder('label', 'label');
  const Sselect = styleBuilder('select', 'select');

  const BaseComponent = (props: SelectProps) => {
    let { id, name } = props;
    const { variant, size, label, children } = props;
    if (!id) {
      id = randomstring.generate(10);
    }

    if (!name) {
      name = `${id}-select`;
    }

    const ariaLabel = label || name;

    return (
      <Scontainer variant={variant} size={size}>
        {label && <Slabel htmlFor={id}>{label}</Slabel>}
        <Sselect aria-label={ariaLabel} {...props} id={id} name={name}>
          {children}
        </Sselect>
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Select = applyTheme(defaultStyles);

export default Select;
