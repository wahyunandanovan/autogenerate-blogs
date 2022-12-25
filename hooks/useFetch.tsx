import React from 'react'
//CONFIG
import { DocumentData, getDocs, Query } from "@firebase/firestore";


function useFetch(queries: Query<DocumentData>) {
    const [data, setData] = React.useState<any>([]);
    const [isLoading, setIsLoading] = React.useState<boolean>(true)
    const [isError, setIsError] = React.useState<boolean>(false)

    const fetchQuery = queries

    const fetchPost = async () => {
        await getDocs(fetchQuery)
            .then((querySnapshot) => {
                const newData = querySnapshot.docs
                    .map((doc: any) => ({ ...doc.data(), id: doc.id }));
                setData(newData);
                setIsLoading(false)
            }).catch((err) => setIsError(true))
    }

    React.useEffect(() => {
        fetchPost();
    }, [])

    return { data, isLoading, isError }
}

export default useFetch