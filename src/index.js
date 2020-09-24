import RouteUrl from "./RouteUrl";

class Router 
{
    constructor(params) 
    {
        if (!params.view || !params.routes) {
            console.error(`aut router: 参数错误`)
            return
        }
        this.name = 'router'
        this.view = params.view
        this.routes = this.$arrayToObject(params.routes)
        this.url = new RouteUrl()
        this.url.on(this.onUrlChange.bind(this))
        this.$lastRoute = null
    }

    set path($path)
    {
        let route = this.routes[$path]
        if(route)
        {
            this.url.path = $path
        }
    }

    onUrlChange(hash)
    {
        let $path = hash.slice(1)
        let route = this.routes[$path]
        if(route)
        {
            if(!route.$node)
            {
                route.$node = new route.class()
            }

            if(this.$lastRoute)
            {
                this.view.remove(this.$lastRoute.$node)
            }

            this.view.add(route.$node)

            this.$lastRoute = route
        }
    }

    $arrayToObject(array)
    {
        let obj = {}
        array.forEach(route => {
            obj[route.path] = route
        });
        return obj
    }
}

export default Router