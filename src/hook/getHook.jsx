import axios from "axios";
import { useEffect, useState } from "react";
import { backendUrl } from "../Url/backendUrl";

export function useGetData(el) {
    const [data, setData] = useState(null);
    useEffect(() => {
        async function getCategory() {
            try {
                const response = await axios.get(`${backendUrl}/${el}`);
                setData(response.data);
            }catch(eer) {
                console.log('Xatolik yuz berdi', eer);
            }
        }
        getCategory()
    }, [el])
    return data
}