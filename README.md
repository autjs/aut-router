### aut-router

这是一个针对 aut.js 框架的路由系统，运行环境为 ESM



### using

```js
import AutRouter from 'aut-router'

let router = new AutRouter({
    view: routerContainer,
    routes: [
        { path: '/', class: RouteClass1 },
        { path: '/about', class: RouteClass2 }
    ]
})

router.path = '/'
```

> routerContainer 应该是一个已实例过后的节点对象
>
> RouteClass* 应该是一个未实例化节点对象

### 打包

```shell
npm run build
```

> 此命令将代码打包为 em module 模块代码