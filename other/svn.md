# SVN 使用
http://svnbook.red-bean.com/nightly/zh/index.html

## 合理的结构
- trunk 
- branches 
- tags


```
// 查看 svn copy 时的版本
$ svn log --stop-on-copy
```

#### svn merge
```
// 合并分支示例，意思是diff分支b1@100与b1最新版的差异，并合并到trunk
// 1. svn://svn.test.com/test/branches/b1@100@100 代表该分支创建时的状态，版本号可以通过 svn log --stop-on-copy 查看得到
// 2. 最后的：svn://svn.test.com/test/branches/b1，代表b1分支的最新状态
trunk$ svn merge svn://svn.test.com/test/branches/b1@100 svn://svn.test.com/test/branches/b1
```
