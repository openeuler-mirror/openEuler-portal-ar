# openEuler-portal-ar

[openEuler 阿语社区官网](https://ar.openeuler.org/ar/)的源码仓库

## 目录结构

官网使用`vitepress`作为基础框架搭建，采用`vue3`+`typescript`。大部分功能仅通过静态文件渲染，只有少部分功能模块（日历、CVE、搜索、筛选）需要后端部署配合运行。

```text
  app
    ├─ .vitepress
      ├─ public // 静态资源文件，不参与打包编译
      ├─ src // 业务
        ├─ api // 接口
        ├─ assets // 资源文件
        ├─ components // 组件
        ├─ i18 // 国际化
        ├─ shared // 公用方法/样式
        ├─ stores // 状态管理
        ├─ views // 业务vue文件
    
```

## 参与贡献

1. Fork 本仓库
2. 新建 `feat/xxx` 分支
3. 提交代码
4. 新建 Pull Request

注意：请使用`git rebase -i`合并 commit，确保每次 pr 只有一次 commit。操作流程请参考[相关文档](https://zhuanlan.zhihu.com/p/429214913)

## 规范说明

### 命名

#### 命名形式

1. `camelCase`: 驼峰式
2. `kebab-case`: 短横线连接式
3. `PascalCase`: 帕斯卡命名式
4. `Snake`: 下划线连接式

#### 说明

1. 文件夹以及文件命名(除 Vue SFC)采用`kebab-case`
2. Vue SFC 文件命名使用`PascalCase`, 在该文件中使用的 Vue 组件也使用`PascalCase`
3. Vue 组件中`emit`事件使用`kebab-case`
4. 变量以及方法命名使用`camelCase`, 资源文件使用`Snake`表明 light/dark, ar，，`eg: homeBanner_light_ar`, 其中风格在前，语言在后
5. CSS 使用`kebab-case`命名
6. Icon 组件引入时增加 Icon 前缀，eg:`import IconDownload from '~icons/app/download'`

### 系统架构设计文档

1. 所有接口类方法请写在`app/.vitepress/src/api`中，并按照[jsdoc 注释规范](https://www.shouce.ren/api/view/a/13232)给出注释，不同模块接口请按文件进行区分, eg: `api-search.ts`
2. 公共 utils 方法请按[jsdoc 注释规范](https://www.shouce.ren/api/view/a/13232)给出注释
3. 变量命名做到见名知义，方法命名使用动词或动宾结构, eg: `import warningImg from '@/assets/icons/warning.png`, `const getUserEmail=()=>{}`
4. 调用接口获取数据请使用`try {} catch(error) {}`进行校验
5. 约束`for...in`的使用, 可以使用`Object.keys().forEach`
6. 使用`prettier`插件作为格式化工具
7. 提交之前请先进行 eslint 检查： 执行脚本，运行`pnpm lint`。确认无问题后提交。项目工程的git hooks 已配置相关校验，如`git commit`不成功，请查看相关错误信息，并进行修改
8. `git commit`信息请尽量参照[相关规范](https://zhuanlan.zhihu.com/p/182553920)
9. 其他注意事项请参考业界相关通用[开发规范说明](https://github.com/airbnb/javascript)
10. 阿语设计复用英语站点的接口设计方式


### 部署手册

通过项目流水线功能构建并发布项目，

首先读取 [Dockerfile](https://atomgit.com/openeuler/openEuler-portal-ar/blob/master/Dockerfile) 文件，根据其中配置 拉取依赖 打包项目并构建镜像，最后将镜像推送到华为云。


### 维护手册

阿语页面为：

https://ar.openeuler.org/ar/

https://ar.openeuler.org/ar/download/

https://ar.openeuler.org/ar/download/commercial-release/

https://ar.openeuler.org/ar/docs/

https://ar.openeuler.org/ar/security/security-bulletins/

https://ar.openeuler.org/ar/community/member/

https://ar.openeuler.org/ar/community/organization/

https://ar.openeuler.org/ar/community/mailing-list/

https://ar.openeuler.org/ar/showcase/

https://ar.openeuler.org/ar/showcase/technical-white-paper/

https://ar.openeuler.org/ar/interaction/news-list/

https://ar.openeuler.org/ar/interaction/blog-list/

https://ar.openeuler.org/ar/monthly-bulletins/

https://ar.openeuler.org/ar/other/brand/

其他地址均跳转EN页面
