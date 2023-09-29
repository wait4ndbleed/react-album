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
            setTimeout(() => {
                setIsLoading(false);
            }, 100);
        }
        loadPhotos();
    }, [id]);

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
            <>
                {isLoading && <Loading />}
                <div className='show'>
                    {isLoading ? '' :
                    <>
                        <button
                            onClick={handleBackButton}
                            className='my-2 bg-transparent'
                        >
                            Voltar
                        </button>
                        <div className='w-full flex justify-center'>
                            <div className='grid grid-cols-2 base:grid-cols-3 md:grid-cols-5 gap-4 m-2 w-fit'>
                                {photos.map((item, index) => (
                                    <Link to={`/photo/${item.id}`}>
                                        <div key={index} className='border border-white/30 hover:bg-black/50 rounded-md w-full p-2'>
                                            <img src={item.thumbnailUrl} alt="" />
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </>
                    }
                </div>
            </>
    )
}