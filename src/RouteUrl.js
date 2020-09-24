class RouteUrl 
{
    constructor()
    {
        if(typeof window !== undefined)
        {
            window.addEventListener('popstate', this.domUrlChange.bind(this))
        }

        this.handlers = []
        this.routeurlchangehandlerid = 0
    }

    set path(path)
    {
        window.location.href = `#${path}`
    }

    domUrlChange()
    {
        let hash = document.location.hash
        this.handlers.forEach(
            handler => 
            {
                handler(hash)
            }
        )
    }

    on(handler)
    {
        if(handler)
        {
            handler.$routeurlchangehandlerid = this.routeurlchangehandlerid++
            this.handlers.push(handler)
        }
    }

    off(handler)
    {
        this.handlers.find(
            (item,index) => 
            {
                if(item.$routeurlchangehandlerid === handler.$routeurlchangehandlerid)
                {
                    this.handlers.splice(index, 1)
                    return true
                }
                return false
            }
        )
    }
}

export default RouteUrl