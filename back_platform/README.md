# back_platform
# author hhj

## 下载mongoDB安装好之后：配置环境变量，不配也可以，不配的话启动就就得进入安装目录下 打开 cmd 
     
    a. 在电脑上打开cmd 命令行工具

    1) 输入 mongod  出现一串代码 开启数据库服务
    2) 再新开一个cmd  输入 mongo  连接数据库
    3) 再输入 show dbs 出现
    admin 0.00GB 
    local 0.00GB
    按照下面步骤：
#1. 创建数据库 创建数据集合 
    use meizu
    db.createCollection("phonelists")
    db.createCollection("headsetlist")
    db.createCollection("partlist")
    db.createCollection("arroundlist")
    db.createCollection("user")

#2. 插入数据
    db.phonelists.insert(phonelists.json  右边的括号先不写，等数据拷贝好再写
    注意：文件里的数据,注意先拷贝粘贴最后再写这个 ")" 不然数据录不进去

     db.headsetlists.insert(phonelists.json  同上

     db.partlists.insert(partlists.json  同上

     db.arroundlist.insert(arroundlists.json  同上

     db.users.insert(users.json  同上

至此 数据插入完毕 

查看数据 
 db.users.find()
 db.phonelists.find()
 db.headsetlists.find()
 db.partlists.find()
 db.arroundlist.find()

# 用vscode 打开 mystore 项目 

#按住 ctr + ~  打开终端 
输入 cd back_platform  

再输入  npm install

然后 npm start 


接着阅读前端 front_platform 项目的 readme.md 文件