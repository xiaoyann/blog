# Git 笔记

http://git-scm.com/book/zh/v2


## 基础

完整备份，近乎所有操作都是本地执行
> 客户端并不只提取最新版本的文件快照，而是把代码仓库完整地镜像下来。在 Git 中的绝大多数操作都只需要访问本地文件和资源。

直接记录快照，而非差异比较
> 每次你提交更新，或在 Git 中保存项目状态时，它主要对当时的全部文件制作一个快照并保存这个快照的索引。

三种状态
> - 已修改(modified)
> - 已暂存(staged)
> - 已提交(committed)


## 配置

配置文件

* 系统用户的通用配置：`/etc/gitconfig`
* 当前用户的配置：`~/.gitconfig`
* 当前仓库下的配置：`.git/config` 

设置用户信息
```
$ git config --global user.name "Yann Xiao"
$ git config --global user.email "striverx@163.com"
```

设置文本编辑器
```
$ git config --global core.editor emacs
```

查看配置信息
```
$ git config --list
$ git config user.name
```


## 基础

创建新的仓库或使用git对现有项目进行管理
```
$ git init
```

获取现有的仓库
```
$ git clone https://github.com/yannxiao/notes.git
```

检查当前状态
```
$ git status
$ git status -s
```

跟踪新文件或将修改后的文件放到暂存区(添加内容到下一次提交中)
```
$ git add file
```

忽略文件(.gitignore)
https://github.com/github/gitignore


比较文件差异
```
// 工作目录中当前文件和暂存区域快照之间的差异， 也就是修改之后还没有暂存起来的变化内容。
$ git diff  

// 查看已暂存的将要添加到下次提交里的内容
$ git diff --staged

// 使用差异比较工具
$ git difftool
```

提交更新
```
$ git commit
$ git commit -v
$ git commit -m 'init commit'
$ git commit -a -m 'init commit'
```

移除文件
```
$ git rm file
// 不再跟踪，但要保留文件
$ git rm --cached file
```

移动文件
```
$ git mv old_file new_file
```


## 分支管理
http://www.oschina.net/question/54371_59134


















