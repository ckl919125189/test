# API 文档

## 概述

这是一个测试仓库的API文档。

## 模块

### index.js

主入口文件，包含基本功能。

#### 函数

##### `greet(name)`
返回问候语。

**参数：**
- `name` (string): 要问候的名字

**返回：**
- `string`: 问候语

**示例：**
```javascript
console.log(greet('阿Ken'));
// 输出: Hello 阿Ken!
```

##### `add(a, b)`
两个数字相加。

**参数：**
- `a` (number): 第一个数字
- `b` (number): 第二个数字

**返回：**
- `number`: 相加结果

## 使用示例

```javascript
const { greet, add } = require('./index.js');

console.log(greet('World')); // Hello World!
console.log(add(2, 3));      // 5
```

## 错误处理

所有函数都会验证输入参数，如果参数无效会抛出错误。

## 版本历史

查看 [CHANGELOG.md](../CHANGELOG.md)
