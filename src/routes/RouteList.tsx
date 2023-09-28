import { useRoutes} from "react-router-dom"
import { Home } from "../pages/Home"
import { Album } from "../pages/Album"
import { PhotoItem } from "../pages/PhotoItem"
import { NotFound } from "../pages/NotFound"

export const RouteList = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/album/:id', element: <Album /> },
        { path: '/photo/:id', element: <PhotoItem /> },
        { path: '*', element: <NotFound />}
    ])
}