# [FIS2](http://fex.baidu.com/fis-site/index.html)使用要点记录   

#### 优化脚本与样式资源位置
插件：[fis-postpackager-simple](https://github.com/hefangshi/fis-postpackager-simple)
`fis.config.set('modules.postpackager', 'simple');
fis.config.set('settings.postpackager.simple.autoReflow', true)`
>- release时要加参数`-p`，不然不会生效。
>- 该插件还有很多其他功能，详见github

#### 自动包装define
插件：[fis-postprocessor-jswrapper](https://github.com/fex-team/fis-postprocessor-jswrapper)
`fis.config.set('modules.postprocessor', 'jswrapper')`
`fis.config.set('settings.postprocessor.jswrapper.type', 'amd')`
>- 将需要模块化的文件的`isMod`设置为`true`

#### 自动加载脚本
插件：[fis-postpackager-autoload](https://github.com/hefangshi/fis-postpackager-autoload)
`fis.config.set('modules.postpackager', 'autoload')`
>- 其他配置详见github
>- 有了它就不需要手动引入模块化脚本了，构建时会自动引入页面依赖的脚本
>- 同时使用“simple”插件时要先配置“autoload”，因为FIS使用插件是按配置的先后顺序来的，不然后面自动引入的脚本不会被“simple”插件优化

#### 收集异步加载资源依赖
插件：[fis-postprocessor-require-async](https://github.com/xiangshouding/fis-postprocessor-require-async)

#### 相对资源路径不要省略`./`

#### 图片规则一定不要加文件夹进去
[问题](https://github.com/fex-team/fis/issues/623#issuecomment-124124805)

#### 增加可识别的HTML文件后缀
```
/fis/node_modules/fis-kernel/lib/util.js
```


