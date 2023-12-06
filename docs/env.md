# 环境说明

## SDK 包
::: info 提示
分为`cjs`版本和`iife`版本

`cjs`：遵循 `CommonJs` 规范，支持 `require()` 方式引入

`iife`：自执行函数，引入 `iife` 版本则会直接在 `window` 对象下自动挂在 `jll` 变量
:::
> 暂不支持 npm 引入，后续会支持

### vue 引入示例 - `cjs版本`
``` javascript
// sdk.js
// process.env.NODE_ENV 为 Node 自带的环境变量，用于区分当前引入测试包或者正式包
// 根据自己项目去定义引入哪个包
const jll = require(`@/plugins/jllsdk.cjs.min_v3.0.0_${
  process.env.NODE_ENV === 'production' ? 'prod' : 'test'
}`)

export default jll

// page.vue
import jll from './sdk.js'
// 打印出 jll 下的所有方法~
console.log(jll)
```

### script标签引入示例 - `iife版本`
``` javascript
<script src="/plugins/jllsdk.iife.min_3.0.0.test.js"></script>
// or
<script src="/plugins/jllsdk.iife.min_3.0.0_prod.js"></script>

<script>
// 打印出 jll 下的所有方法~
console.log(jll)
</script>
```

## 沙盒环境与房间内 `idc` 环境

::: tip 沙盒环境
`沙盒环境`：指不在房间内启动机制，在 [柒巧空间](https://cspace.you-drama.com) 创建剧本后，

`进入剧本详情 - 编辑剧本 - 环节设置 - 机制素材 - token`
打开 token 弹框后，会看到 token 字样，后面一串加密字符串就是 `剧本key`

`剧本key`：用于获取当前剧本下的所有角色列表，包含`角色ID`，`角色token`、`角色昵称`等

`角色token`：用于后续 API 的调用凭证

具体拼接使用请查看[简介](/introduction.html)~
:::

::: tip 房间内 `idc` 环境
`idc环境`：玩家进入房间后，选择角色，后续启动 `H5机制` ，会自动在 url 上拼接`角色ID`、`角色token`、`用户ID`等相关信息

:::

## 变量说明

变量分为`全局变量`和`角色变量`

**全局变量：**  

::: tip
`全局变量`为房间内的自定义数据，例如游戏总库存、游戏商城物品等，可以定义为`全局变量`  
:::
  
**角色变量：**  
::: tip
`角色变量`为当前角色的自定义数据，与角色绑定，例如角色的属性、血量、蓝量、背包、金币等，与角色挂钩的可定义为角色变量，如`角色A`向游戏商城购买一本武功秘籍，则需要操作`全局变量`总库存`-1`，后操作角色A背包`角色变量`武功秘籍`+1`
:::