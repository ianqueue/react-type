import React from 'react';

const defaultProps = {
  name: undefined
};

export interface Props {
  name?: string;
}

const Greeting = ({ name }: Props & typeof defaultProps) => {
  return <h1>Hello, {name}!</h1>;
};


export default Greeting;
