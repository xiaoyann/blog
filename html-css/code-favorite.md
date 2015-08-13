# CSS 代码收藏
#### 超出指定行数自动加省略号
```css
{
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	max-height: 6rem;
	overflow: hidden;
	text-overflow: ellipsis;
	line-height: 1.2rem;
}
```

#### 省略超出部分并加上省略号 
```css
{
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
```

#### 清除浮动
```css
/* 1. 这种方法在某些版本的360浏览器下会有问题 */
.clearfix:after,
.clearfix:before {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both;
}

/* 2. */
.clearfix:after {
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
    content: ".";
    font-size: 0; 
    /* 虽然height已经为0，但当content里有内容，font-size又大于0时还是会产生高度。visibility: hidden只能使元素不可见，但所占用的位置还是会占用，所以将font-size设置为0是可以避免出现多余的空白，或者将content设置为空，或者设置 overflow: hidden; 都可以解决这个问题*/
}
.clearfix {
    *zoom: 1;  // 针对IE
}
```

#### 页脚固定在底部
```css
html, body {
    height: 100%;
}
.warrper {
    width: 100%;
    min-height: 100%;
    margin-bottom: -100px;
}
.inner {
    padding-bottom: 100px;
}
.footer {
    width: 100%;
    height: 100px;
    background: #000;
}
```

```html
<body>
    <div class="wrapper">
        <div class="inner">
            <span>main</span>
        </div>
    </div>
    <div class="footer">footer</div>
</body>
```




