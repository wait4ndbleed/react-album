import { useEffect, useState } from "react"
import { api } from "../utils/api"
import { Album } from "../types/Album";
import { Link } from "react-router-dom";
import { Loading } from "../utils/Loading";
import { useInView } from "react-intersection-observer";

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

    let x = 1;

    return (
        <div>
            {isLoading ? <Loading /> : 
            <>
               <button className="bg-transparent text-2xl" onClick={handleShow}>{show ? 'Exibir mais' : 'Exibir menos'}</button><br />
                <div className={`${show && 'h-[384px] overflow-y-hidden'} overflow-x-hidden`}>
                    {albums.map((item, index) => (
                            <Link to={`/album/${index + 1}`} className="max-w-fit">
                                <div key={index} className={`slide${x === 1 ? x=2 : x=1} my-3 p-3 border border-white/30 rounded-lg hover:bg-black/50 hover:text-white overflow-x-visible ${index}`}>
                                    {item.title}
                                </div>
                            </Link>
                    ))}
                </div>
            </>
            }
            
        </div>
    )
}