import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/";

export const api = {
    getAllAlbums: async () => {
        const response = await axios.get(`${url}albums`);
        return response.data;
    },
    getAlbum: async (id: number) => {
        const response = await axios.get(`${url}albums/${id}/photos`);
        return response.data;
    },
    getPhoto: async (id: number) => {
        const response = await axios.get(`${url}photos/${id}`);
        return response.data;
    }
};
