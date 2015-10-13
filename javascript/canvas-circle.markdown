# 使用canvas画一个带动画的环形图

```html
<canvas id="canvas" width="300px" height="300px"></canvas>
```

```javascript
	var canvas = document.getElementById('canvas');
	var context = canvas.getContext('2d');
	var width = canvas.width;
	var	height = canvas.height;
	

	// 1. 解决在Retina屏下边界会模糊的问题
	var devicePixelRatio = window.devicePixelRatio;
	if (devicePixelRatio) {
		canvas.style.width = width + "px";
		canvas.style.height = height + "px";
		canvas.width = width * devicePixelRatio;
		canvas.height = height * devicePixelRatio;
		context.scale(devicePixelRatio, devicePixelRatio);
	}
	

	var origin = {x: width/2, y: height/2};
	var radius = width/2;
	var dest = Math.PI * 2;
	var cur = 0;

	var drawCircle = function () {
		// 增加缓冲
		cur = dest - cur < 0.005 ? dest : cur + (dest - cur) * 0.08;

		requestAnimationFrame(function() {
			
			// 2. 每次绘制时把之前的清除掉，只保留当前状态的图像
			context.clearRect(0, 0, width, height);
			
			context.beginPath();
			context.fillStyle = 'red';
			context.moveTo(origin.x, origin.y);
			context.arc(origin.x, origin.y, radius, 0, cur, false);
			context.fill();
			
			// 里面的圆需要在环画完之后再画，因为后画的层级高，才能覆盖其他的
			context.beginPath();
			context.moveTo(origin.x, origin.y);
			context.fillStyle = '#fff';
			context.arc(origin.x, origin.y, radius - 10, 0, dest, false);
			context.fill();

			if (cur < dest) {
				drawCircle();
			}
		});
	}

	drawCircle();

```