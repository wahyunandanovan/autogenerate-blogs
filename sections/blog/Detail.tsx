import React from "react";
import Loading from "../../components/Loading";
import Footer from "../../layouts/PageLayout/Footer";
import BottomDetail from "./BottomDetail";
import CenterDetail from "./CenterDetail";
import TopDetail from "./TopDetail";



function Detail({ query }: any) {

    const { data, isLoading, isError } = query


    return (

        <div>
            {isLoading ? <Loading /> : (
                <React.Fragment>
                    <TopDetail
                        image={data[0]?.images[0]}
                        category="ekonomi"
                        chipcolor="1"
                        title={data[0]?.title}
                        short={`${data[0]?.body?.slice(0, 297)}...`}
                    />
                    <CenterDetail title={data[0]?.title} body={data[0]?.body} />
                    <BottomDetail />
                    <Footer />
                </React.Fragment>
            )}


        </div>
    );
}

export default Detail;
