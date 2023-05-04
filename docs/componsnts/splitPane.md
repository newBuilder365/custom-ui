---
title: 分割组件
order: 1
nav:
  title: '组件'
  order: 1
group:
  title: 其它组件
  order: 2
---

# 分割组件

## 横向分割

```jsx
import { SplitPane } from 'custombuild';
const { Pane } = SplitPane;

export default () => (
  <div style={{ height: '50vh' }}>
    <SplitPane split="vertical">
      <Pane initialSize="200px">You can use a Pane component</Pane>
      <div>or you can use a plain old div</div>
      <Pane initialSize="25%" minSize="0" maxSize="500px">
        Using a Pane allows you to specify any constraints directly
      </Pane>
    </SplitPane>
  </div>
);
```

## 竖向分割

```jsx
import { SplitPane } from 'custombuild';

export default () => (
  <div style={{ height: '50vh' }}>
    <SplitPane split="horizontal">
      <div>default min: 50px</div>
      <div />
    </SplitPane>
  </div>
);
```
