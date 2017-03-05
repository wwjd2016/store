# store
杂货铺
#centos6安装nvm
1. $ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh | bash
2. 重启终端
3. 安装对应版本的nvm nvm install v 0.0.0

#node 服务器要填对外的主机名，ifconfig

#git  diff 命令
1. git diff <file> 当前文件与暂存区里面的目录树对比差异
2. git diff HEAD 当前文件与HEAD指向的分支的目录树的差异
3. git diff --cached 或者 --stage 当前暂存区目录树与HEAD指向的分支的差异

#git checkout 命令
1. git checkout <file>把未add进暂存区的修改，按照暂存区的目录树恢复
2. git checkout HEAD <file> 把所有修改包括暂存区，按照HEAD指向的分支目录树恢复
3. git reset HEAD 把暂存区的目录树按照欧HEAD恢复，不会影响工作区
4. git rm --cached <file>从暂存区删除文件，工作区不会影响

reset.
