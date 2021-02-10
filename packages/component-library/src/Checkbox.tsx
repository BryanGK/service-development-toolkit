import React from 'react';
import { createStyleBuilder, createBootstrap } from './helpers';

interface CheckboxProps {
  label?: string;
  value?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
}

export const applyTheme = (styles, config) => {
  const styleBuilder = createStyleBuilder(styles, config);

  const Scontainer: any = styleBuilder('div', 'container');
  const Slabel: any = styleBuilder('label', 'label');
  const Scheckbox: any = styleBuilder('input', 'input');

  const bootstrap = createBootstrap(styles, 'checkbox');

  const BaseComponent = (props: CheckboxProps) => {
    const { id, name, label, ariaLabel, styleProps, rest } = bootstrap(props);

    return (
      <Scontainer {...styleProps}>
        <Scheckbox {...rest} type="checkbox" id={id} />
        {label && (
          <Slabel {...styleProps} htmlFor={id}>
            {label}
          </Slabel>
        )}
      </Scontainer>
    );
  };

  return BaseComponent;
};

const Checkbox = applyTheme({}, {});

export default Checkbox;
