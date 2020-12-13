# 项目概览

## 功能

- nav 下拉菜单与适配
  - PC 与 phone 的 subMenu 为两套 dom, 共用同一个数据源;
  - 常规一些 hooks 的综合型大杂烩操作;

---

- ![视觉](./public/main.png "SubMenu PC")
- ![视觉](./public/main.png "SubMenu Phone")

## react-icon

- https://react-icons.github.io/react-icons
- 用到 react 图标库
  - 用法:

```
npm install react-icons --save
```

```js
import { FaGithubAlt } from "react-icons/fa";

function App() {
  return <FaGithubAlt />;
}
```
