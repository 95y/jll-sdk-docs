# SDK 初始化相关 API
调用初始化API后，SDK会在本地 `sessionStorage` 缓存里 写入 'JLL_SDK_TOKEN' 变量值，后续调用 `GET` 或者 `SET` 就不需要再传入token


### 初始化SDK
引入剧乐乐SDK后，必须先执行 `jll.init(token)`
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| token | String | 角色的Token |
``` javascript

/**
 * jll.init(token)
 * @param token: 角色token
 **/
jll.init('角色token')
```
