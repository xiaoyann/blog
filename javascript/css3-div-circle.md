# 使用CSS3+DIV画一个带动画的环形图

```html
	<div id="chart-circle" class="chart-circle">
		<div class="track"></div>
		<div class="left">
			<div class="left-mask">
				<div class="left-inner"></div>
			</div>	
		</div>
		<div class="right">
			<div class="right-mask">
				<div class="right-inner"></div>
			</div>
		</div>
	</div>
    
    <input id="range" type="range" min="0" max="100" step="1" value="0">
```

```css
		.chart-circle {
			position: relative;
			width: 150px;
			height: 150px;
		}

		.chart-circle .track {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			border: 10px solid #ff6160;
			border-radius: 50%;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		.chart-circle .left,
		.chart-circle .right {
			position: absolute;
			top: 0;
			width: 50%;
			height: 100%;
			overflow: hidden;
		}

		.chart-circle .left {
			left: 0;
		}

		.chart-circle .right {
			right: 0;
		}

		.chart-circle .left-mask,
		.chart-circle .right-mask {
			position: absolute;
			top: 0;
			left: 0;
			width: 75px;
			height: 100%;
			overflow: hidden;
		}

		.chart-circle .left-mask {
			-webkit-transform-origin: 100% 50%;
			transform-origin: 100% 50%;
		}

		.chart-circle .right-mask {
			-webkit-transform-origin: 0% 50%;
			transform-origin: 0% 50%;
		}

		.chart-circle .left-inner,
		.chart-circle .right-inner {
			width: 150px;
			height: 100%;
			border: 10px solid #f3f3f3;
			border-radius: 50%;
			-webkit-box-sizing: border-box;
			-moz-box-sizing: border-box;
			box-sizing: border-box;
		}

		.chart-circle .right-inner {
			position: absolute;
			top: 0;
			right: 0;
		}
```

```javascript
	window.requestAnimationFrame = (function(win) {
		return win.requestAnimationFrame || 
				win.webkitRequestAnimationFrame || 
				win.mozRequestAnimationFrame || 
				function(callback) { setTimeout(callback, 1000/60);};
	})(window);

	var chart = document.getElementById('chart-circle');
	var range = document.getElementById('range');
	var left = chart.querySelector('.left-mask');
	var right = chart.querySelector('.right-mask');
	var rate = 0.7;
	var dest = rate * 360;

	range.oninput = onchange;

	function onchange() {
		var val = this.value / 100 * 360;
		draw(val);
	}

	function setRotate(el, value) {
		el.style.transform = 'rotate('+ value +'deg)';
		el.style.webkitTransform = 'rotate('+ value +'deg)';
	}

	function draw(value) {
		if (value <= 180) {
			setRotate(left, value);
		} else {
			setRotate(left, 180);
			setRotate(right, value - 180);
		}
	}

	var cur = 0;

	anim();

	function anim() {
		cur = dest - cur < 0.1 ? dest : cur + (dest - cur) * 0.08;
		requestAnimationFrame(function() {
			draw(cur);
			
			if (cur < dest) {
				anim();
			}
		}, 100);
	}

```