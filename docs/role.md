# 角色自定义变量

## initRoleData(roleId, bizFields, bizContent)
#### 初始化角色变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| bizFields | String | biz数据属性的描述列表,调用方的自己定义的,类似java里面对象的类描述信息,业务方可以用自定义bizId |
| bizContent | Object,Array | 自定义业务数据 |
``` javascript
/**
 * 初始化角色变量 
 * @param bizFields: 自定义业务字段 如: 'ROLE_EXAMPLE' 
 * @param bizContent: 自定义业务数据，接收 对象或者数组
 **/
const roleRes = await jll.initRoleData(
  roleId,
  bizFields, 
  bizContent
)
console.log('roleRes', roleRes);
```
## getRoleData(roleId, bizFields)
#### 获取角色自定义变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| bizFields | String | biz数据属性的描述列表,调用方的自己定义的,类似java里面对象的类描述信息,业务方可以用自定义bizId |

``` javascript
// `ROLE_DATA` 是自定义数据的 key
const getRoleData = await jll.getRoleData(roleId, 'ROLE_DATA')
console.log('getRoleData', getRoleData);

// 成功示例
{
	"code": 0,
	"apiName": "getRoleData",
	"errorMessage": "成功",
	"data": {
		"bizContent": {
			"role": 2
		},
		"dataVersion": 8
	}
}
```

## getRoleValue(roleId, key)
#### 获取角色自定义变量中某个值
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| key | String | 获取对象下的某个值，例如：ROLE_DATA.role |

``` javascript
// `ROLE_DATA` 获取 ROLE_DATA 下的 role 值
const getRoleData = await jll.getRoleValue(roleId, 'ROLE_DATA.role')
console.log('getRoleData', getRoleData); // 2
```

## setRoleData(roleId, bizFields, bizContent, dataVersion)
#### 更新角色自定义变量
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| bizFields | String | 业务字段的 key |
| bizContent | Object, Array | 业务字段的 内容 |
| dataVersion | Number | 如果需要版本控制，则需要传入dataVersion，不需要则不传 |

``` javascript
const setRoleRes = await jll.setRoleData(roleList[0].id, 'ROLE_DATA', {role: 2}, 8)
console.log('setRoleRes', setRoleRes);

// 成功示例
{
	"code": 0,
	"apiName": "updateRoleDataWithDataVersionSync",
	"errorMessage": "成功",
	"data": {
		"dataVersion": 9
	}
}

```

## setRoleValue(roleId, key, value, dataVersion)
#### 更新角色自定义变量中某个值
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| key | String | 业务字段的 key + 属性名 如: ROLE_DATA.role |
| value | 不限 | 需要修改的值 |
| dataVersion | Number | 如果需要版本控制，则需要传入dataVersion，不需要则不传 |

``` javascript
const setRoleValue = await jll.setRoleValue(
  roleList[0].id,
  'ROLE_DATA.role',
  3,
  1
)
console.log('setRoleValue', setRoleValue);

// 成功示例
{
	"code": 0,
	"apiName": "updateRoleDataWithDataVersionSync",
	"errorMessage": "成功",
	"data": {
		"dataVersion": 10
	}
}
```

## setRoleValueAdd(roleId, key, value, max)
#### 更新角色自定义变量指定值，自增，多人同时竞争一个东西时，可以使用
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| key | String | 业务字段的 key + 属性名 如: ROLE_DATA.role |
| value | Number | 需要新增的数值 |
| max | Number | 最大值，如果设定最大值，自减超过最大值，则返回失败 |
``` javascript
const response_1 = await jll.setRoleValueAdd(roleId, 'ROLE_DATA.role', 1, 999)
console.log('response_1', response_1);

// 成功示例
{
	"code": 0,
	"apiName": "setRoleValueAdd",
	"errorMessage": "成功",
	"data": null
}
```

## setRoleValueSub(roleId, key, value, min)
#### 更新角色自定义变量指定值，自减，多人同时竞争一个东西时，可以使用
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| roleId | Number | 角色ID |
| key | String | 业务字段的 key + 属性名 如: ROLE_DATA.role |
| value | Number | 需要新增的数值 |
| min | Number | 最小值，如果设定最小值，自减超过最小值，则返回失败 |

``` javascript
const response_1 = await jll.setRoleValueSub(roleId, 'ROLE_DATA.role', 1, 0)
console.log('response_1', response_1);

// 成功示例
{
	"code": 0,
	"apiName": "setRoleValueSub",
	"errorMessage": "成功",
	"data": null
}
```