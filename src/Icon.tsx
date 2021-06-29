import React from 'react';
import { IconContext, IconType } from 'react-icons';

export interface IconComponent extends React.FunctionComponent<IconContext & { Icon: IconType }>{}

const Icon: IconComponent = props => {

  const { children, Icon, ...others } = props;

  return <IconContext.Provider value={{ ...others }}>
    <Icon />
  </IconContext.Provider>

};

export default Icon;