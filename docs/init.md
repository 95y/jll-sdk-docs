# SDK 初始化相关 API
调用初始化API后，SDK会在本地 `sessionStorage` 缓存里 写入 'JLL_SDK_TOKEN' 变量值，后续调用 `GET` 或者 `SET` 就不需要再传入token


### 初始化SDK
引入SDK后，必须先执行 `jll.init(token)`，才可调用后续 `自定义全局变量Global` 和 `自定义角色变量Role` 相关API
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
