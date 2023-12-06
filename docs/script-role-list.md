# 获取剧本角色列表

::: tip 提示
机制开发时，需要通过 `剧本KEY` 去获取角色列表

在 `房间idc环境` 中，如果需要获取角色列表，sdk也提供了通过 `角色token` 去获取角色列表的API
:::

## 剧本Key： getScriptRoleListForKey
``` javascript
// 通过剧本KEY获取剧本角色列表
const roleList = await jll.getScriptRoleListForKey('剧本key')
console.log('沙盒环境剧本角色列表: ', roleList);

// 成功示例
{
	"code": 0,
	"apiName": "getScriptRoleListForKey",
	"errorMessage": "成功",
	"data": [{
		"avatarUrl": "角色头像 url",
		"dmFlag": false,
		"id": 734,
		"title": "点点点",
		"token": "角色token"
	}, {
		"avatarUrl": "角色头像 url",
		"dmFlag": false,
		"id": 733,
		"title": "点点点",
		"token": "角色token"
	}
    ...
  ]
}
```

## 角色Token： getScriptRoleListForToken

``` javascript
// 通过角色 token 获取剧本角色列表
const roleList = await jll.getScriptRoleListForToken()
console.log(roleList);

{
	"code": 0,
	"apiName": "getScriptRoleListForToken",
	"errorMessage": "成功",
	"data": [{
		"dmFlag": false,
		"roleAvatarUrl": "https://larp-test.you-drama.com/43004e/DFCAFE7D42E5F6F91692945755694.png",
		"roleId": 734,
		"roleNickName": "点点点"
	}, {
		"dmFlag": false,
		"roleAvatarUrl": "https://larp-test.you-drama.com/43004e/C1C1322F5E74CD8C1692945088506.png",
		"roleId": 732,
		"roleNickName": "热特特"
	}, {
		"dmFlag": true,
		"roleId": 50,
		"roleNickName": "DM"
	}
	...
	]
}
```