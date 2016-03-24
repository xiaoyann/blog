# 前端工程构建

## 构建系统应具备的功能
* 对文件进行MD5重命名，做强缓存
* 打包JS,CSS
* 压缩JS,CSS,HTML,PNG图片
* CssSprite图片合并
* 编译less,es6,jsx等资源
* 指定字符替换
* 指定资源域名
* 语法检查
* 按指定模块化规范自动包装define
* 自动引入依赖资源到相应HTML页面
* 实时编译和刷新浏览器
* 本地模拟服务
* 发布


## 使用 [FIS3](http://fis.baidu.com/fis3/index.html) 完成以上功能

### 对文件进行MD5重命名，做强缓存

```js
fis.match('a.js', {useHash: true});
// 指定MD5戳长度
fis.set('project.md5Length', 32);
// 指定MD5连接符号
fis.set('project.md5Connector', '_');
// 产出
// a_6ad91a61d30c0fde14540d3c164f6a18.js
```

### 打包JS,CSS

```js
// pages 下的所有 less
fis.match('/pages/**.less', {
	packTo: '/static/dist/a.css'
});
```

### 压缩JS,CSS,HTML,PNG图片

```js
// 压缩 js
fis.match('*.js', {
	// fis-optimizer-uglify-js 插件进行压缩，已内置
    optimizer: fis.plugin('uglify-js')
});

// 压缩 css
fis.match('*.less', {
	// fis-optimizer-clean-css 插件进行压缩，已内置
    optimizer: fis.plugin('clean-css')
});

// 压缩 PNG 图片
fis.match('*.png', {
	// fis-optimizer-png-compressor 插件进行压缩，已内置
  	optimizer: fis.plugin('png-compressor')
});

// 压缩 HTML
fis.match('*.html', {
	// fis-optimizer-htmlmin
	optimizer: fis.plugin('htmlmin')
});
```

### CssSprite图片合并 [参考文档](http://fis.baidu.com/fis3/docs/beginning/release.html#CssSprite%E5%9B%BE%E7%89%87%E5%90%88%E5%B9%B6)

```js
// 1. 使用__sprite标记需要合并的图片
li.list-1::before {
  background-image: url('./img/list-1.png?__sprite');
}

li.list-2::before {
  background-image: url('./img/list-2.png?__sprite');
}

// 2. 启用 fis-spriter-csssprites 插件
fis.match('::package', {
  spriter: fis.plugin('csssprites')
})

// 对 CSS 进行图片合并
fis.match('*.css', {
  // 给匹配到的文件分配属性 `useSprite`
  useSprite: true
});
```

### 编译less,es6,jsx等资源
```js
// 编译 less 文件
fis.match('**.less', {
	// 使用 fis-parser-less 进行编译
	parser: fis.plugin('less'), 
	// 编译后的文件后缀
	rExt: '.css'
});
```

### 指定字符替换
```js
// 域名更换成正式域名
// 开发时所有接口使用的 domainTest230，上线时需要将所有测试域名替换成 domainOnline
fis.media('online').match('**', {
    // fis3-deploy-replace
	deploy: fis.plugin('replace', {
		from: domainTest230,
		to: domainOnline
	})
});
```

### 指定资源域名
```js
fis.match('*.{js,css,less,png,gif,jpeg,jpg}', {
	domain: domainCDN
});
```

### 按指定模块化规范自动包装define
* [fis3-hook-commonjs](https://github.com/fex-team/fis3-hook-commonjs)
* [fis3-hook-amd](https://github.com/fex-team/fis3-hook-amd)
* [fis3-hook-cmd](https://github.com/fex-team/fis3-hook-cmd)

```js
// 1. 指定哪些文件需要被模块化
fis.match('*.js', {
    isMod: true
});

// 2. 指定以哪种模块化规范来包装 

// commonjs 规范 fis3-hook-commonjs
fis.hook('commonjs', {});

// amd 规范 fis3-hook-amd
fis.hook('amd', {});

// cmd 规范 fis3-hook-cmd
fis.hook('cmd', {});
```

### 语法检查
[fis3-lint-eslint](https://github.com/fiss-scaffold/fis3-lint-eslint)

```js
// 1. 配置
fis.match('*.js', {
	// fis3-lint-eslint
	lint: fis.plugin('eslint', {})
});

// 2. release 时加 -l
$ fi3 release -l
```

### 自动引入依赖资源到相应HTML页面
[fis3-postpackager-loader](https://github.com/fex-team/fis3-postpackager-loader)

```js
fis.match('::packager', {
    // fis3-postpackager-loader
  	postpackager: fis.plugin('loader', {})
});
```

### 实时编译和刷新浏览器
```js
$ fis3 release -wL
```

### 本地模拟服务 [参考文档](http://fis.baidu.com/fis3/docs/node-mock.html)


### 发布 [参考文档](http://fis.baidu.com/fis3/docs/beginning/debug.html#%E5%8F%91%E5%B8%83%E5%88%B0%E8%BF%9C%E7%AB%AF%E6%9C%BA%E5%99%A8)
```js
// 发布到本地
fis.media('local').match('/static/{dist,images,js}/**', {
	deploy: fis.plugin('local-deliver', {
		to: '/Users/xx/xx'
	})
});
// 发布到远端机
fis.media('qa').match('/static/{dist,images,js}/**', {
	deploy: fis.plugin('http-push', {
    	receiver: 'http://www.qa.com/receover.php',
    	to: '/Users/xx/xx'
  	})
});
```


## 使用 Gulp 完成以上功能



