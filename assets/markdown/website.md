# 本站搭建指南

> 作者：Sampung

序号|标题|日期
:--:|:--:|:--:
1|[Ubuntu 下配置 Express 环境](#1st "Ubuntu 下配置 Express 环境")|2018-12-21
2|[使用 forever 守护 Node.js 进程](#2nd "使用 forever 守护 Node.js 进程")|2018-12-21
3|[使用 SSH 维护服务器](#3rd "使用 SSH 维护服务器")|2018-12-21
4|[使用 WinSCP 维护服务器](#4th "使用 WinSCP 维护服务器")|2018-12-21
5|[无法将项目部署到 80 端口的解决办法](#5th "无法将项目部署到 80 端口的解决办法")|2018-12-21

<span id="1st"></span>

### 1st. Ubuntu 下配置 Express 环境

具体操作为：

1. 安装 _Node.js_

        sudo apt-get install nodejs

2. 安装 _npm_

        sudo apt-get install npm

3. 安装 _Node.js-Legacy_

        sudo apt-get install nodejs-legacy

4. 安装 _Express-Generator_

        sudo npm install express-generator

5. 检查 _Node.js_ 是否可用

        node -v

<span id="2nd"></span>

### 2nd. 使用 forever 守护 Node.js 进程

正常情况下启动的 _Node.js_ 应用，在 _SSH_ 连接关闭时，也就停止了。要保持 _Node.js_ 应用持续运行，需要使用 _forever_ 守护进程，在连接断开时，保持应用持续工作。

具体操作为：

1. 安装 _forever_

        sudo npm install forever -g

2. 在应用根目录下利用 _forever_ 启动应用

        DEBUG=[app]* : forever start ./bin/www

使用 _forever_ 管理进程，具体操作有

1. 打开进程列表

        forever list

2. 根据 _pid_ 关闭进程

        forever stop [pid]

<span id="3rd"></span>

### 3rd. 使用 SSH 维护服务器

远程连接服务器有很多种方式，这里选用 _Ubuntu_ 的 _SSH_ 连接方式，维护服务器。

具体操作为：

1. _SSH_ 登陆

        ssh -q -l ubuntu -p 22 212.64.107.128

2. 输入登陆密码

3. 下载文件

        scp -r ~:web/sampung /home/Files/Code/Sampung

4. 上传文件

        scp -r /home/Files/Code/Samoung ~:web/sampung

<span id="4th"></span>

### 4th. 使用 SSH 维护服务器

远程连接服务器有很多种方式，这里选用 _Window 10_ 的 _WinSCP_ 连接方式，维护服务器。

具体操作为：

1. _SSH_ 登陆

        ssh -q -l ubuntu -p 22 212.64.107.128

2. 输入登陆密码

3. 下载文件

        scp -r ~:web/sampung /home/Files/Code/Sampung

4. 上传文件

        scp -r /home/Files/Code/Samoung ~:web/sampung

<span id="5th"></span>

### 5th. 无法将项目部署到 80 端口的解决办法

由于 _Linux_ 系统的限制，应用无法直接部署到 _80_ 端口，需要做特殊处理。

操作步骤为：

1. 设置安全组

2. 以 _root_ 身份运行

        DEBUG=[app]*: sudo npm forever start ./bin/www

3. 以 _root_ 身份运行的程序，直接打开进程列表是无法看到的

        sudo forever list

4. 以 _root_ 身份关闭进程

        duso forever stop [pid]

### 6th. 待续

待续
