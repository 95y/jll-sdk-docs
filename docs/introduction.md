# 简介

## H5开发流程 
一.开发游戏阶段:  
1) 在[柒巧空间](https://cspace.you-drama.com/#/user/login)上传剧本，得到一个 `剧本key`。同时上传剧本所需的角色列表  
2) 通过柒巧空间得到的key调用SDK的初始化 `initData` 接口, 返回角色列表  
`roleId`  -- `roleName` -- `roleToken`
3) 开发者根据自己剧本的角色 `roleId`，角色 `token`, 操作自定义的变量  
自定义变量  
-- 全局自定义变量  
-- 角色自定义变量

注:此时不需要操作剧乐乐APP，平行书小程序等。

**二**. H5游戏开发完成之后，需要配合剧乐乐APP，平行书小程序来真正进行游戏。  
1) 剧本配置H5地址，提交审核  
2) 剧本审核通过之后，DM用剧乐乐APP开房间,玩家通过小程序来玩。  
3) 平行书进行到机制阶段的时候，平行书小程序会通过地址来告诉H5小游戏 `roleId` 和 `token` 的值。此时的 `roleId` 就是玩家开房时候选择的角色，`token` 里面是包含房间Id等一系列业务逻辑的加密值。  
4) 此时H5游戏通过 `roleId` 和 `token` 来操作sdk的接口，此时效果应该是和开发阶段一致的。  

## 参数说明：

>**1、平行书&剧乐乐App打开H5的完整链接如下：**  
**https://h5机制地址.com?token=xx&roleId=xx&userId=xx&title=xx&env=prod**  
**2、开发人员可在url上添加自己的url参数，平行书&剧乐乐App 会检测url上是否带自定义url参数**  
     如：https://h5机制地址.com?自定义参数1=xx&自定义参数2=xx  <br><br>
**「自定义参数说明：如部分H5需要自己通过url携带参数用于判断当前场景等等」**  
     <font color=red>平行书&App会自动追加参数</font>
     **https://h5机制地址.com?自定义参数1=xx&自定义参数2=xx&token=xx&roleId=xx&title=xx**  
**「开发阶段建议把<font color=#ffa657>token</font>、<font color=#ffa657>roleID</font>自行拼接到url上，自行截取url参数，以保持与提测、生产阶段一致」**<br><br>
<font color=#ffa657></font>
```javascript
url参数字段说明：  
token: 接口请求凭证  
roleId: H5当前角色id  
userId: 小程序or剧乐乐App当前的用户id  
title: 用于设置title  
url参数预留关键字：env (自定义字段情况下，请勿使用env参数名)
```



```
Q & A：  
Q: H5中如何获取当前角色？  
A: 开发阶段可通过url上自己拼接roleId (角色ID)，进行对应角色的机制开发

Q: token哪里获取？  
A: 开发阶段: 可在柒巧空间的剧本编辑中，获取该剧本联调SDK的token  
提测&生产阶段：通过url截取token参数值
```
