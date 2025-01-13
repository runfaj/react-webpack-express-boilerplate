import React from 'react';
import { Popper, Target, Content } from 'react-nested-popper';

import styles from './Component.scss';

const Component = () => (
  <div className="component">
    <Popper>
      <Target>target</Target>
      <Content>some content</Content>
    </Popper>
  </div>
);

export default Component;
