浏览器原理

script执行顺序

异步加载script

document.write

defer async

~~~
function cachejs(script_filename){
    var cache = document.createElement('object');
    cache.data = script_filename;
    cache.id = "coolshell_script_cache_id";
    cache.width = 0;
    cache.height = 0;
    document.body.appendChild(cache);
}
~~~

javascript浮点数精度

undefined 是window的值 但不可修改

按script标签对进行预编译

<link rel="dns-prefetch" href="//" />