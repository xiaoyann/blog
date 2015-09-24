# Todos

### 总结并解决解决钱隆项目存在的问题

* 所有资源都打包到了一起
> 这么做的初衷是因为内容比较少，可以尽可能的减少请求数，虽然首次进来会加载完所有前端资源但也不会很慢。但是反过来想，如果首次进来加载的资源更少是不是会更快了？况且如实名认证等只会用到一次的页面为什么要每次都加载了？还有一个问题就是，一旦其中一个地方有改动，整个缓存都不能用了。
	

* 页面切换时，数据是完全重新加载再显示的，这样显示数据的地方会闪动。
> 应该缓存旧数据，当有旧数据时先使用旧数据，然后新数据加载完成后进行替换，并且应该降低请求新数据的频率。



### 优化静态资源的管理方案

* 缓存到localStorage

> 参考[大神之作](http://qiqu.uc.cn/?uc_param_str=frpfvedncpssntnwbi#!/index/index)
> [MT](https://github.com/mtjs/mt)
> [fouber Demo](http://scrat.io/#!/index)


### 根据自己的需求实现浏览器历史记录管理库



### 根据自己的需求实现ajax库
* 可缓存请求过的数据


### quickling、pageCache、bigPipe
* http://wenku.baidu.com/link?url=ixMzxgt7FjxtUrmd82ETasXTPqGP8DauBMPEW21sbAJmsATJ3KoqkttJU6zeWQV1602u8US1Jhn0BAgJP5lN_AJuHE-u_f_1nevXy_cAaGO


 
	

