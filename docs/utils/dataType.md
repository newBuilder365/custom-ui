---
title: 数据类型
order: 1
nav:
  title: '公用方法'
  order: 2
---

## `isNaN`

> 判断数据类型是否为 NaN，直接使用`Number.isNaN()`就可以了，返回布尔数据

## `isObjct`

> 检测数据是否为对象

```jsx | pure
import { utils } from 'custombuild';

utils.isObject({});
```

## `isArray`

> 检测数据是否为数组

```jsx | pure
import { utils } from 'custombuild';

utils.isObject([]);
```

## `isNullOrEmpty`

> 检测数据是否为 null、undefined 或者为空

```jsx | pure
import { utils } from 'custombuild';

utils.isNullOrEmpty(null);
utils.isNullOrEmpty(undefined);
utils.isNullOrEmpty('');
utils.isNullOrEmpty({});
utils.isNullOrEmpty([]);
```
