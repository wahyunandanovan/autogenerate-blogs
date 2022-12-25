import React from 'react'
//CONFIG
import { firestore } from '../utils/firebase';
import { collection, query, limit, getDocs } from "@firebase/firestore";

interface PropsInterface {
    limitItem: number
}

function useFetch({ limitItem }: PropsInterface) {
    const [data, setData] = React.useState<any>([]);

    const fetchQuery = query(collection(firestore, "articles"), limit(limitItem));

    const fetchPost = async () => {
        await getDocs(fetchQuery)
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
            })
    }

    React.useEffect(() => {
        fetchPost();
    }, [])

    return data
}

export default useFetch