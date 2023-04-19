---
title: 下拉选择
order: 2
nav:
  title: '组件'
  order: 1
group:
  title: antd组件
---

# 下拉选择

> 基于`antd`的`Select`组件，用法参考https://ant.design/components/select-cn

# 功能增强

- 多选情况下增加了全选功能

```jsx
import { useState } from 'react';
import { Select, utils } from 'custombuild';

export default () => {
  const [value, setValue] = useState([]);
  console.log('utils', utils.isNullOrEmpty('1'))
  return (
    <Select
      value={value}
      onChange={(e) => {
        setValue(e);
      }}
      style={{ width: 180 }}
      mode="multiple"
      options={[
        { value: 'jack', label: 'Jack' },
        { value: 'lucy', label: 'Lucy' },
        { value: 'Yiminghe', label: 'yiminghe' },
        { value: 'disabled', label: 'Disabled', disabled: true },
      ]}
    />
  );
};
```
