# SDK内置的其他辅助API

## getDataVersion()
获取所有业务数据的最新版本号

``` javascript
const dataVersion = await jll.getDataVersion()
console.log('dataVersion', dataVersion);
{
	"code": 0,
	"apiName": "getDataVersion",
	"errorMessage": "成功",
	"data": {
		"globalParamVoList": [{
			"bizFields": "GLOBAL_DATA",
			"dataVersion": 0
		}, {
			"bizFields": "GLOBAL_GAME_STEP",
			"dataVersion": 0
		}],
		"roleParamVoList": [{
			"avatarUrl": "https://larp-test.you-drama.com/43004e/DFCAFE7D42E5F6F91692945755694.png",
			"dmFlag": false,
			"paramVos": [{
				"bizFields": "ROLE_STUDENT",
				"dataVersion": 0
			}],
			"roleId": 100,
			"title": "点点点"
		}, {
			"avatarUrl": "https://larp-test.you-drama.com/43004e/C1C1322F5E74CD8C1692945088506.png",
			"dmFlag": false,
			"paramVos": [{
				"bizFields": "ROLE_STUDENT",
				"dataVersion": 0
			}],
			"roleId": 101,
			"title": "热特特"
		}]
	}
}
```
#### Response 说明
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| globalParamVoList | Array | 全局变量  |
| roleParamVoList | Array | 角色变量 |

## getGenerateId(count)
生成唯一ID

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| count | Number | 需要生成的数量  |

``` javascript
const getGenerateId = await jll.getGenerateId(1)
console.log(getGenerateId);
{
	"code": 0,
	"apiName": "getGenerateId",
	"errorMessage": "成功",
	"data": [1143]
}
```
## getRoleInfo()
获取当前角色信息

## appBack()
小程序、App退出webview

