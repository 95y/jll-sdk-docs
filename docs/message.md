# 消息通知


## onMessage(callback)
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| callback | Function | 接收消息的回调函数 |

``` javascript
jll.onMessage(res => {
  console.log('game: ', res)
})
```

## sendNotify(roleId, idsStr, noticeContent)
发送自定义消息
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | String, Number | 发送方角色ID |
| idsStr | String | 接收方的角色ID，逗号分割的字符串，例：100,101,102 |
| noticeContent | Object | 自定义消息体，需要发送的内容 |

``` javascript
const notifyRes = await jll.sendNotify(
  玩家角色ID,
  100,101,102,
  { type: 'testWebSocket' }
)
```

## 系统通知
返回参数字段说明
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| customType | String | global: 全局自定义变量发生更新<br/>role: 角色自定义变量更新 |
| dataVersion | Number | 该业务字段的最新dataVersion |
| key | String | 发生更新修改的业务字段 bizFields |
| message | String | 消息说明 |
| roleId | Number | 触发该消息的角色ID |

## 玩家自定义消息通知
返回字段说明
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| customType | String | custom: 自定义通知  |
| noticeContent | Object | 用户自定义消息内容 |

## socket属性
可访问SDK内websocket的实例
``` javascript
console.log(jll.socket)
```