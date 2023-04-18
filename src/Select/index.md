# 下拉选择

> 基于`antd`的`Select`组件，后期可能在此基础上更改

```jsx
import { Select } from 'custombuild';

export default () => {
  return (
    <Select
      style={{ width: 120 }}
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
