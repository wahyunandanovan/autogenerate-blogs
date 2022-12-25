import React from 'react'
//CONFIG
import { DocumentData, getDocs, Query } from "@firebase/firestore";


function useFetch(queries: Query<DocumentData>) {
    const [data, setData] = React.useState<any>([]);

    const fetchQuery = queries

    const fetchPost = async () => {
        await getDocs(fetchQuery)
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc: any) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
            })
    }

    React.useEffect(() => {
        fetchPost();
    }, [])

    return data
}

export default useFetch