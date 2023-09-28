import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Photo } from '../types/Photo';
import { api } from '../utils/api';
import { Loading } from '../utils/Loading';

export const Album = () => {
    const params = useParams();
    let id = 0;
    if (params.id) {
        id = parseInt(params.id);
    }

    const [ photos, setPhotos ] = useState<Photo[]>([]);
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const loadPhotos = async () => {
            setIsLoading(true);
            const json = await api.getAlbum(id);
            setPhotos(json);
            setIsLoading(false);
        }
        loadPhotos();
    }, [id]);

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <div className='h-full'>
            {isLoading ? <Loading /> :
            <>
                <button
                    onClick={handleBackButton}
                    className='m-2'
                >
                    Voltar
                </button>
                <div className='grid grid-cols-5 gap-4 m-2 w-fit'>
                    {photos.map((item, index) => (
                        <Link to={`/photo/${item.id}`}>
                            <div key={index} className='border-2 border-slate-900 p-3'>
                                <img src={item.thumbnailUrl} alt="" />
                            </div>
                        </Link>
                    ))}
                </div>
            </>
            }
        </div>
    )
}