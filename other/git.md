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

查看历史提交
http://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%9F%A5%E7%9C%8B%E6%8F%90%E4%BA%A4%E5%8E%86%E5%8F%B2
```
$ git log
// 只显示两条信息
$ git log -2
// 显示每次提交的内容差异
$ git log -p
// 显示简略的统计信息
$ git log --stat
// 指定显示格式，--pretty还有其他多种选项
$ git log --pretty=oneline -1
// 更形象的展示分支、合并历史
$ git log --pretty=oneline --graph
// 查看指定时间内的日志
$ git log --since=2016-01-26
$ git log --author=yanxiao
$ git log --grep=v0.1.5
$ git log -Sfunction_name
// 查看指定目录或文件的日志
$ git log -- ./pages
```

撤销操作
http://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%92%A4%E6%B6%88%E6%93%8D%E4%BD%9C
```
$ git commit --amend
// 取消已放入暂存区的文件，只会修改暂存区
$ git reset HEAD <file>
// 取消对文件的修改，不可恢复
$ git checkout -- <file>
```

远程仓库操作

```
$ git remote -v
// 会抓取克隆（或上一次抓取）后新推送的所有工作
$ git fetch origin
// 推送分支到远程仓库
$ git push [remote-name] [branch-name]
// 查看远程仓库信息
$ git remote show [remote-name]
$ git remote rename old new
$ git remote rm [remote-name]
```

## 分支管理
http://www.oschina.net/question/54371_59134

## 恢复reset操作
```
// 查看历史操作，找到想要恢复的版本
$ git reflog
// 再次执行reset
$ git reset xxx
```

## 跟踪远程分支
```
// 第一种方法
// git branch [branch] [remotename]/[branch]
$ git checkout -b [branch] [remotename]/[branch]
// 第二种方法
$ git checkout --track [remotename]/[branch]
// 第三种方法(设置已有的分支跟踪其他分支)
$ git branch -u [remotename]/[branch]
```
















