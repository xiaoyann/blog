### 超出指定行数自动加省略号
```css
.className {
	display: -webkit-box;
	-webkit-line-clamp: 3;
	-webkit-box-orient: vertical;
	overflow: hidden;
	text-overflow: ellipsis;
	max-height: 6rem;
	line-height: 1.2rem;
}
```