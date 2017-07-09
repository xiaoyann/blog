# 开发问题总结

### iOS设备上，点击HTML元素会出现背景
```css
html * {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
```

### webkit内核浏览器上的数字输入框`<input type="number">`右边会有按钮
```css
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
	-webkit-appearance: none !important;
}

input[type="number"]{
	-moz-appearance: textfield;
}
```

### 微信认证回调地址不能有`#!`




