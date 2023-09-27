import { useEffect, useState } from "react"
import { api } from "../utils/api"
import { Album } from "../types/Album";
import { Link } from "react-router-dom";

export const Home = () => {
    const [ albums, setAlbums ] = useState<Album[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        loadAlbums();
    }, []);

    const loadAlbums = async () => {
        setIsLoading(true);
        const json = await api.getAllAlbums();
        setAlbums(json);
        setIsLoading(false);
    }

    return (
        <div>
            {isLoading && 'Carregando...'}
            {albums.map((item, index) => (
                <Link to={`/album/${index + 1}`}>
                    <div key={index} className="border-2 border-slate-900 m-3 p-3">
                        {item.title}
                    </div>
                </Link>
            ))}
        </div>
    )
}