# jll-cli-docs
剧乐乐SDK使用文档

| 参数 | 是否必传 | 类型 | 说明 |
| --- | --- | --- | --- |
| sKey | 是 | String (token) |  角色token |
| roleId | 是 | String |  发起人角色id |
| bizContent | 是 | String  | 业务数据 |
| noticeRoleIds | 是 | String  | 通知角色(id) 英文逗号分隔 DM的角色id默认50 |
| noticeContent | 是 | JSON String | socket广播的内容 |
| bizFields | 是 | String(length: 1024) | biz数据属性的描述列表,调用方的自己定义的,类似java里面对象的类描述信息,业务方可以用自定义bizId |
| bizDataVersion | 是 | String(length: 20) | biz的数据的版本号,调用方自己进行定义 |
| version | 是 | 1.0.2 | sdk版本号 |