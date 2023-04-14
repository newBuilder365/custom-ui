import { Select, SelectProps } from 'antd';
import React, { type FC } from 'react';

const CSelect: FC = (props: SelectProps) => {
  return <Select {...props} />;
};

export default CSelect;
