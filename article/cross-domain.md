#### method
targetWindow.postMessage(data, targetOrigin)
targetWindow 是指接收消息的window对象
targetOrign 是指接收消息的window的源(协议+主机+端口号, URL其他信息会忽略)

#### 监听message事件来接收消息

#### compatibility
IE7以上都支持 但IE7/8/9只能发送字符串 Chrome等支持其他类型的数据

#### Cross Domain
| 情况 | 栗子 | 备注 |
|--------|--------|--------|
| 端口不同 |  `http://www.a.com:80`  `http://www.a.com:81`| 客户端无解  |
| 协议不同 | `http://www.a.com` `https://www.a.com` | 客户端无解 |
| 同IP,不同访问方式 | `http://www.a.com` `http://127.0.0.1`  | 浏览器不会去识别域对应的IP |
| 子域不同 | `http://hehe.a.com` `http://haha.a.com` |
| 二级域名不同 | `http://www.a.com` `http://a.com` |
| 域名就是不同 | `http://www.a.com` `http://www.b.com` |

##### 使用 postMessage

##### 子域不同的解法 设置相同的 document.domain 
> - 若A.html要操作B.html，在这两个页面里都设置 document.domain = '主域'。然后通过iframe嵌入B.html就可以了
> - 适合使用iframe时遇到的跨域问题
> - 太局限与子域不同的跨域问题

##### 使用hash和iframe 
> - A.html要和B.html交互，A.html通过iframe嵌入B.html时，将要交互的数据通过hash传递给B。
> - B.html若要给A.html传递数据，可以通过修改A.html的hash，但B没权限，所以需要创建一个iframe，引入一个与A.html在同一个域下的C.html，通过hash将数据传递给C, C与A是在同域下的，所以它可以修改A的hash，A通过设置一个定时器检测hash变化获取数据的变化
> - 适合使用iframe时遇到的跨域问题 
> - 暴露在URL上，大小有限



~~~javascript
// A.html 传递给子窗口数据
var page_b = 'http://www.hehe.com/b.html'
var data = 'xxxxx'
var iframe = document.createElement('iframe')
iframe.src = page_b + '#' + data
document.body.appendChild(iframe)

// A.html 获取其他窗口交互的数据
var oldHash = location.hash.slice(1)
setInterval(function() {
    var newhash = location.hash.slice(1)
    if (newhash !== oldHash) {
        // do some things
    }
}, 1000)

// B.html 获取父级窗口传递的数据
var hash = location.hash.slice(1)
// do some things
// 向父级窗口传递数据
var iframe = document.createElement('iframe')
var data = 'fffffff'
var page_c = 'http://www.haha.com/c.html' 
iframe.src = page_c + '#' + data
document.body.appendChild(iframe)

// C.html 修改A.html的hash
var data = location.hash.slice(1)
window.parent.parent.location.hash = data
~~~

##### 使用script标签 该标签没有跨域限制
> -  服务器端通过返回一个JS函数调用的字符串，并将数据通过参数传递
> -  函数名为了灵活可以通过GET传参动态设置
> -  回调函数必须在该标签之前定义，因为javascript是按块顺序执行的
> - 适合跨域数据请求
> - 需要服务器端约定参数
~~~javascript
<script>
function callback(data) {
  console.log(data)
}
</script>
<script src="http://www.a.com/a.php?callback=callback" ></script>
~~~
~~~php
<?php
$data = 'xxxxxxx';
$callback = $_REQUEST['callback'];
echo $callback."('".$data."')";
~~~
 
##### 使用window.name
> - window.name值容量大(2M)，当页面重新加载不同的页面后依旧存在。
> - A.html要访问B.html的数据，在B.html里将数据放入window.name，A通过iframe加载B，加载完后这时可以通过window.name拿到数据，但需要先将B的src设置为与A同域，做一个空页面就好。



~~~javascript
var url = 'http://www.hehe.com/demo/test2.html'        
var iframe = document.createElement('iframe')
iframe.src = url
document.body.appendChild(iframe)

var state = 0
iframe.onload = function() {
    if (state == 1) {
        alert(iframe.contentWindow.name)    
    } else {
        state = 1
        iframe.contentWindow.location = 'http://www.haha.com/demo/test1.css'
    }
}

~~~

~~~javascript
(function(){
    var YUD = YAHOO.util.Dom, YUE = YAHOO.util.Event;

    dataRequest = {
        _doc: document,
        cfg: {
            proxyUrl: 'proxy.html'
        }
    };

    dataRequest.send = function(sUrl, fnCallBack){
        if(!sUrl || typeof sUrl !== 'string'){
            return;
        }

        sUrl += (sUrl.indexOf('?') > 0 ? '&' : '?') + 'windowname=true';

        var frame = this._doc.createElement('iframe'), state = 0, self = this;
        this._doc.body.appendChild(frame);
        frame.style.display = 'none';

        var clear = function(){
            try{
                frame.contentWindow.document.write('');
                frame.contentWindow.close();
                self._doc.body.removeChild(frame);
            }catch(e){}
        };

        var getData = function(){
            try{
                var da = frame.contentWindow.name;
            }catch(e){}
            clear();
            if(fnCallBack && typeof fnCallBack === 'function'){
                fnCallBack(da);
            }
        };

        YUE.on(frame, 'load', function(){
            if(state === 1){
                getData();
            } else if(state === 0){
                state = 1;
                frame.contentWindow.location = self.cfg.proxyUrl;
            }
        });

        frame.src = sUrl;
    };
})();
~~~

