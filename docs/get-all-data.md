# 获取所有自定义变量

## getAllData()
#### 获取所有自定义变量

``` javascript
/**
 * 获取所有自定义变量 
 **/
const getAllData = await jll.getAllData()
console.log('getAllData', getAllData);

{
	"code": 0,
	"apiName": "getAllData",
	"errorMessage": "成功",
	"data": {
		"globalParamVoList": [{
			"bizContent": "{\"global\":10}",
			"bizDataVersion": "",
			"bizFields": "GLOBAL_DATA",
			"dataVersion": 2
		}],
		"roleParamVoList": [{
			"avatarUrl": "https://larp-test.you-drama.com/43004e/DFCAFE7D42E5F6F91692945755694.png",
			"dmFlag": false,
			"paramVos": [{
				"bizContent": "{\"role\":0}",
				"bizDataVersion": "",
				"bizFields": "ROLE_DATA",
				"dataVersion": 2
			}],
			"roleId": 734,
			"title": "点点点"
		}, {
			"avatarUrl": "https://larp-test.you-drama.com/43004e/880EDFA68C2D381D1692945734908.png",
			"dmFlag": false,
			"paramVos": [{
				"bizContent": "{\"role\":0}",
				"bizDataVersion": "",
				"bizFields": "ROLE_DATA",
				"dataVersion": 0
			}],
			"roleId": 733,
			"title": "点点点"
		}]
	}
}
```


| 参数 | 说明 |
| --- | --- |
| globalParamVoList | 全局自定义变量 |
| roleParamVoList | 角色自定义变量 |