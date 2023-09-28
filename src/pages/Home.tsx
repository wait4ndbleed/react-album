import { useEffect, useState } from "react"
import { api } from "../utils/api"
import { Album } from "../types/Album";
import { Link } from "react-router-dom";
import { Loading } from "../utils/Loading";

export const Home = () => {
    const [ albums, setAlbums ] = useState<Album[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);
    const [ show, setShow ] = useState<boolean>(true);

    useEffect(() => {
        loadAlbums(); 
    }, []);

    const loadAlbums = async () => {
        setIsLoading(true);
        const json = await api.getAllAlbums();
        setAlbums(json);
        setTimeout(() => {
            setIsLoading(false);
        }, 100);
    }

    const handleShow = () => {
        if (show) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    return (
        <div>
            <button className="bg-transparent text-2xl" onClick={handleShow}>{show ? 'Exibir mais' : 'Exibir menos'}</button><br />
            <div className={`${show && 'h-[384px] overflow-y-hidden'}`}>
                {isLoading && <Loading />}
                {albums.map((item, index) => (
                        <Link to={`/album/${index + 1}`} className="max-w-fit">
                            <div key={index} className="m-3 p-3 border border-white/30 rounded-lg hover:bg-black/50 hover:text-white">
                                {item.title}
                            </div>
                        </Link>
                ))}
            </div>
        </div>
    )
}