import React from 'react'
import { firestore } from '../../utils/firebase';
import { collection, query, limit, getDocs } from "@firebase/firestore";
import Navbar from './Navbar';


function HomeSection() {
    // const [data, setData] = React.useState<any>([]);

    // const fetchQuery = query(collection(firestore, "articles"), limit(2));

    // const fetchPost = async () => {
    //     await getDocs(fetchQuery)
    //         .then((querySnapshot) => {
    //             const newData = querySnapshot.docs
    //                 .map((doc) => ({ ...doc.data(), id: doc.id }));
    //             setData(newData);
    //         })
    // }


    // React.useEffect(() => {
    //     fetchPost();
    // }, [])
    // console.log(data)

    return (
        <>
            <Navbar />
        </>
    )
}

export default HomeSection