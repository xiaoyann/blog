## Bower
[Bower](http://bower.io) 是 Twitter 出的一个包管理工具。让 WEB 开发者只需要使用几条简单的命令就可以管理想要使用的各种库或脚本，以及它们之间的依赖关系。

#### 安装
   	
``` 
	npm install -g bower
```	

#### 基本使用（以下载bootstrap为栗）
1. 首先可以查看下这个包的信息

```
	bower info bootstrap
```

2. 选择一个版本安装，如果有更新的版本会提示你选择一个。下载包的同时也会把依赖一并下载下来。
	
```
	bower install bootstrap#3.3.2
```
	
3. 查看已安装的包，以及依赖关系，是否兼容等信息都会展示出来

```
	bower list
```

4.  删除依赖的jquery，如果有其他包依赖这个包，会提示你是否真的要删除。删除之后再查看下列表，会告诉你有哪些未安装的依赖。

```
	bower uninstall jquery
```

    
#### 创建自己的包(栗子：learn_bower)
1. 包文件需要放在 [Github](https://github.com) ，我们使用 Bower 下载的包都是来自 github。所以先要创建仓库并上传包文件。

2. 生成bower.json文件，声明一些包信息用，他问你答就OK了

```
	bower init
```

3. 注册，需要包在 github 上的地址

```
	bower register learn_bower https://github.com/striver-x/learn_bower.git
```

 4. 注册完成后就可以查看到自己的包信息了

```
	bower info learn_bower
```

 5. 删除没用的包，以后会支持 bower unregister <package>

```
curl -X DELETE "https://bower.herokuapp.com/packages/<package>?access_token=<token>"
```  
 

  

