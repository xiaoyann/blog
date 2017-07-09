### 获取元素的rotate值
> 可以直接 element.style.transform 获取，很多JS库也是这么做的，但这样只能先设置行间样式，再去获取。而获取到的计算属性是一个矩阵值，这就需要转换了。

```javascript
function getRotateWithMatrix(a, b) {
	return Math.round(Math.atan(b / a) * 180 / Math.PI);
}

// matrix(0.866025403784439, 0.5, -0.5, 0.866025403784439, 0, 0)
function parseMatrix(matrix) {
	return matrix.replace(/matrix\(|\)|\s*/g, '').split(',');
}
```