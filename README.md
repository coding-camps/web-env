# Web Dev Env

## 介绍

- 这是一个Node开发环境下的静态网页实验环境
- 前端服务器是 Vite 提供的 web 服务器
- 其前端可用 HTML + CSS + JavaScript 开发纯静态网页
- 后端用 NestJS 作为服务器，必要时可以连接 MySQL，Redis，Mongo等
- 其后端可用 typescript 开发后端程序

## 优缺点分析

- 现在流行的前端开发环境，如 React、Vue、Angular 等，对原生前端进行了包装，对研究和分析纯前端问题有影响，所以我们有需要仅使用 HTML + CSS + Javascript 的纯净前端环境。
- 自然而然前端需要一个静态服务器提供支持，而前端有时要和后端进行通信，所以也需要一个后端服务器。
- 常见的服务器有这几类，根据我们的需求优缺点分析如下：

| 服务器 | 前端服务 | 后端服务 |
| :------: | :-------- | :-------- |
| 大型服务器，<br/>如apache httpd, nginx，IIS等 | 配置麻烦<br/>而且还会碰到一些奇怪的问题 | PHP或其他CGI程序，<br/>缺点是太古老了。 |
| Nodejs环境下的微型服务器<br/>如 express 和 koa | 1.无法提供开箱即用的服务器特征<br/>如自动刷新前端;<br/>2.需要自己编码配置服务器 | 需要基于NodeJs的后端服务，<br/>但目前的express或koa已经不流行了 |
| 基于Java或Golang的服务器<br/>如tomcat | 缺点：需要安装相应开发环境，<br/>如JDK | 需要懂得相应环境下的web编程，<br/>但这对前端人员来说有点麻烦，要求过高 |

- 根据目前前端技术的经验，选择vite 作为前端服务器，配置简单，而且支持前端自动刷新；选择NestJS作为后端服务器及后端服务开发环境，具有多种特征，而且编程使用typescript。

## 使用命令说明

### _准备_

推荐用yarn，也可以用npm，或者其他类似的环境。如下命令安装依赖：
> `yarn install` 或 `npm install`

### _前端_

启动前端服务器，启动后如果修改了前端文件（`public`文件夹下的文件）可自动刷新页面：
> `yarn dev` 或 `npm run dev`

### _后端_

启动后端服务器，启动后如果修改了后端文件（`src`文件夹下的文件）可自动刷新后端服务器，相应的前端页面刷新后或重新操作后，可以看到前端成功调用后端服务。
> `yarn start:dev` 或 `npm run start:dev`

## 文件及目录结构

```bash
├── README.md              本文件
├── dist                   后端服务器NestJS运行时自动编译的文件
├── nest-cli.json          后端服务器Nest JS配置文件
├── tsconfig.build.json    后端NestJS的typescript 配置，for build
├── tsconfig.json          后端NestJS的typescript 配置，共享
├── src                    后端NestJS源码目录，默认为nest cli生成的文件
├── test                   后端NestJS测试源码目录，默认为nest cli生成的文件
├── vite.config.js         前端服务器 vite 配置
├── public                 前端静态网页源码目录，vite配置指向这里，默认可以为空
├── package.json           主配置文件，NestJS 和 Vite共用
└── yarn.lock              主配置依赖lock文件，推荐使用yarn，也可以用npm等
```
