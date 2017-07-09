# php
http://www.php-internals.com/

### 打开错误提示

生产环境需要关闭，不然会暴露敏感信息

```
    # php.ini
    display_errors = On
```

### 开启错误日志

默认记录在WEB服务器的日志文件里，比如Apache的error_log

``` 
    # php.ini
    log_errors = On
```

### nginx 安装

* 下载并解压 https://nginx.org/en/download.html
* https://nginx.org/en/docs/configure.html
* make && make install && make clean
* 将生成的 nginx 执行文件路径添加到环境变量 PATH

```
export PATH=$PATH:/usr/local/nginx
```

* 中文文档：http://www.nginx.cn/doc/
* http://www.cnblogs.com/zhongshengzhen/p/nginx.html
* http://www.cnblogs.com/skynet/p/4173450.html


### php-fpm 配置文件
http://www.jb51.net/article/42716.htm

* [搞不清FastCgi与PHP-fpm之间是个什么样的关系]https://segmentfault.com/q/1010000000256516


### phpize
给PHP添加扩展用的


### mysql

安装之后需要做一些初始化操作

```
shell> bin/mysql_install_db --user=mysql    # Before MySQL 5.7.6
shell> bin/mysqld --initialize --user=mysql # MySQL 5.7.6 and up
shell> bin/mysql_ssl_rsa_setup              # MySQL 5.7.6 and up
```

* http://dev.mysql.com/doc/refman/5.7/en/installing-source-distribution.html
* 启动、重启、停止 http://blog.csdn.net/yzwlord/article/details/7312781

