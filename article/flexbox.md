## Flexbox
Link: <https://css-tricks.com/snippets/css/a-guide-to-flexbox/>

```
	.flex-container {
		display: flex;
	}
```

```
	<div class="flex-container">
		<div class="flex-item"></div>
		<div class="flex-item"></div>
	</div>
```

使用了*display: flex | inline-flex*的元素我们叫做**flex container**, **flex container**的子元素我们叫做**flex items**。

默认情况下，container只有一个伸缩行，所有的item都在这一行显示。items的宽度总和超过container的宽度时，item会按自身宽度占container宽度的比例缩放。给container设置*flex-wrap: wrap*后，item的最大宽度为container的宽度，不够显示的换行显示。

*flexbox*提供了很多属性分别使用在**flex container**和**flex items**上。

#### 作用于 flex container 的属性
##### display:
* flex
* inline-flex

##### flex-direction
* row
* row-reverse
* column
* column-reverse

##### flex-wrap
* nowrap
* wrap
* wrap-reverse

##### flex-flow
* flex-direction || flex-wrap

##### justify-content
* flex-start
* flex-end
* center
* space-between
* space-around

##### align-items
* flex-start
* flex-end
* center
* baseline
* stretch

##### align-content
* flex-start
* flex-end
* center
* stretch
* space-between
* space-around

#### 作用于 flex items 的属性
##### order
* interger

##### flex-grow
* number

##### flex-shrink
* number

##### flex-basis
* length | auto

##### flex

##### align-self
* auto
* flex-start
* flex-end
* center
* baseline
* stretch


#### 兼容性写法
Link: <https://css-tricks.com/using-flexbox/>

```
.flex-container {
	display: -webkit-box;
	display: -moz-flex;
	display: -ms-flexbox;
	display: -webkit-flex;
	display: flex;
}

.flex-item {
	-webkit-box-flex: 1;
	-moz-box-flex: 1;
	-webkit-flex: 1;
	-ms-flex: 1;
	flex: 1;
}
```













