import{_ as s,o as a,c as t,Q as n}from"./chunks/framework.62b283ab.js";const b=JSON.parse('{"title":"消息通知","description":"","frontmatter":{},"headers":[],"relativePath":"message.md","filePath":"message.md","lastUpdated":1706077760000}'),e={name:"message.md"},o=n(`<h1 id="消息通知" tabindex="-1">消息通知 <a class="header-anchor" href="#消息通知" aria-label="Permalink to &quot;消息通知&quot;">​</a></h1><h2 id="onmessage-callback" tabindex="-1">onMessage(callback) <a class="header-anchor" href="#onmessage-callback" aria-label="Permalink to &quot;onMessage(callback)&quot;">​</a></h2><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>callback</td><td>Function</td><td>接收消息的回调函数</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">jll.</span><span style="color:#B392F0;">onMessage</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">res</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;game: &#39;</span><span style="color:#E1E4E8;">, res)</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">jll.</span><span style="color:#6F42C1;">onMessage</span><span style="color:#24292E;">(</span><span style="color:#E36209;">res</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;game: &#39;</span><span style="color:#24292E;">, res)</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div><h2 id="sendnotify-roleid-idsstr-noticecontent" tabindex="-1">sendNotify(roleId, idsStr, noticeContent) <a class="header-anchor" href="#sendnotify-roleid-idsstr-noticecontent" aria-label="Permalink to &quot;sendNotify(roleId, idsStr, noticeContent)&quot;">​</a></h2><p>发送自定义消息</p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>roleId</td><td>String, Number</td><td>发送方角色ID</td></tr><tr><td>idsStr</td><td>String</td><td>接收方的角色ID，逗号分割的字符串，例：100,101,102</td></tr><tr><td>noticeContent</td><td>Object</td><td>自定义消息体，需要发送的内容</td></tr></tbody></table><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">notifyRes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> jll.</span><span style="color:#B392F0;">sendNotify</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  玩家角色ID,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">101</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">102</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  { type: </span><span style="color:#9ECBFF;">&#39;testWebSocket&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">notifyRes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> jll.</span><span style="color:#6F42C1;">sendNotify</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  玩家角色ID,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">101</span><span style="color:#24292E;">,</span><span style="color:#005CC5;">102</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  { type: </span><span style="color:#032F62;">&#39;testWebSocket&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">)</span></span></code></pre></div><h2 id="系统通知" tabindex="-1">系统通知 <a class="header-anchor" href="#系统通知" aria-label="Permalink to &quot;系统通知&quot;">​</a></h2><p>返回参数字段说明</p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>customType</td><td>String</td><td>global: 全局自定义变量发生更新<br>role: 角色自定义变量更新</td></tr><tr><td>dataVersion</td><td>Number</td><td>该业务字段的最新dataVersion</td></tr><tr><td>key</td><td>String</td><td>发生更新修改的业务字段 bizFields</td></tr><tr><td>message</td><td>String</td><td>消息说明</td></tr><tr><td>roleId</td><td>Number</td><td>触发该消息的角色ID</td></tr></tbody></table><h2 id="玩家自定义消息通知" tabindex="-1">玩家自定义消息通知 <a class="header-anchor" href="#玩家自定义消息通知" aria-label="Permalink to &quot;玩家自定义消息通知&quot;">​</a></h2><p>返回字段说明</p><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>customType</td><td>String</td><td>custom: 自定义通知</td></tr><tr><td>noticeContent</td><td>Object</td><td>用户自定义消息内容</td></tr></tbody></table><h2 id="socket属性" tabindex="-1">socket属性 <a class="header-anchor" href="#socket属性" aria-label="Permalink to &quot;socket属性&quot;">​</a></h2><p>可访问SDK内websocket的实例</p><div class="language-javascript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(jll.socket)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(jll.socket)</span></span></code></pre></div>`,17),l=[o];function p(r,c,d,i,y,E){return a(),t("div",null,l)}const g=s(e,[["render",p]]);export{b as __pageData,g as default};
