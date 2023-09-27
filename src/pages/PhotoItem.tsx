import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import { Photo } from "../types/Photo";
import { api } from "../utils/api";

export const PhotoItem = () => {
    const params = useParams();
    let id = 0;
    if (params.id) {
        id = parseInt(params.id);
    }

    const [ photo, setPhoto ] = useState<Photo>();
    const [ isLoading, setIsLoading ] = useState(false);

    useEffect(() => {
        const loadPhoto = async () => {
            setIsLoading(true);
            const json = await api.getPhoto(id);
            setPhoto(json);
            setIsLoading(false);
        }
        loadPhoto();
    }, [id]);

    const navigate = useNavigate();

    const handleBackButton = () => {
        navigate(-1);
    }

    return (
        <>
            {isLoading ? 'Carregando...' :
            <>
                <button
                    onClick={handleBackButton}
                    className="m-2 block"
                >
                    Voltar
                </button>
                {photo?.title}
                <img src={`${photo?.url}`} className="mt-3" alt="" />
            </>
            }
        </>
    )
}