###  git 

amend重新提交

当我们commit之后突然发现漏掉了一个文件, 这个时候不可能对一个文件再进行commit一次, 这样做就显得很多余, 而如果版本回退之前再添加也比较麻烦. 这个时候就可以使用这个amend命令.如下:

$ git commit -m "版本1.5开发代码"

# 正当你松了一口气的时候发现配置文件忘记修改了, 你赶紧修改,并适合用add到暂存区
$ git add project.property
$ git commit --amend         
# 你会神奇的发现你没有增加任何多余的操作就把漏掉的文件补齐到最后一次提交中


# 删除dev分支
$ git branch -d dev

# 如果dev分支还有未提交的内容,为了保证你的数据安全git默认是不允许删除,可以使用`-D`强制删除
$ git branch -D dev

# rebase <目标分支名> [需要移动变基底的分支]
$ git rebase master experiment

# 此时目标分支后面会追加另一个分支的提交. 此时只需要切换到master分支,合并分支即可.
$ git checkout master
$ git merge experiment

# 设置HEAD指向的分支的上游为远程dev分支
$ git branch -u origin/dev


查看设置的所有跟踪分支

$ git branch -vv

对远程仓库的名称进行修改

$ git remote rename oldName newName


347244203505
441881199601301948
http://bm.scs.gov.cn/2017/StudentLogin.aspx

