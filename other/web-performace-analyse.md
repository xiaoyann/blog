# 前端性能分析

* 制定性能分析指标
* 制定数据获取方案
* 制定数据分析方案
* 制定性能优化方案

## 制定性能分析指标

指标 | 描述 | 理由
---- | ---- | ---- 
白屏时间 | 从打开页面(输入URL，刷新，跳转等方式)开始到页面显示内容的时间 | 直接影响用户体验
首屏时间 | 浏览器首屏内所有内容都呈现出来所花费的时间 | 直接影响用户体验
关键功能可使用时间 | 关键功能可使用时间 | 直接影响用户体验
页面总下载时间 | 页面所有资源都加载完成并显示出来的时间 | 尽然无言以对
基础优化规则 | 基于雅虎页面性能优化的34条规则来给页面评分 | 提高应用性能
页面异常 | 页面里的JS脚本错误 | 直接影响用户体验

## 制定数据获取方案

**白屏时间**

如果页面主要内容是直接写在HTML页面里，就可以在`<head></head>`里进行统计：

```html
// 1. 在页面顶部记录开始时间
<html>
<head>
    <meta charset="utf-8">
    <script>
        var WPS = {firstPaintTime: {}};
        WPS.firstPaintTime.startTime = (new Date()).getTime();
    </script>
    <link rel="stylesheet" type="text/css" href="xxx.css">
    <script>
        WPS.firstPaintTime.endTime = (new Date()).getTime();
    </script>
</head>
</html>
// 2. 
```

如果页面主要内容是通过JS创建的，那就应该根据JS会在什么时候创建内容的逻辑设置统计时间点。

**首屏时间**

```js
    
```

**关键功能可使用时间**

```js

```

**页面总下载时间**

```js

```

**基础优化规则**

使用 **[yslow](http://yslow.org/phantomjs/)** 进行测试。

**页面异常**


## 制定数据分析方案

## 制定性能优化方案


参考链接：

* http://fex.baidu.com/blog/2014/05/front_end-data/
* https://www.zhihu.com/question/24907805
* http://www.cnblogs.com/shinnychen/p/3750020.html
* http://www.infoq.com/cn/news/2015/06/web-performance-api
* http://www.webryan.net/2013/02/web-page-test-based-on-phontomjs/
* http://www.iteye.com/magazines/116-Web-Front-Performance-Best-Practice
* https://www.smashingmagazine.com/2012/11/writing-fast-memory-efficient-javascript/
* http://code.oneapm.com/javascript/2015/09/02/BrowserInsight/
* http://www.cnblogs.com/sunshq/p/5312231.html




