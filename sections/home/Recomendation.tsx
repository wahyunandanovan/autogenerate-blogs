import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Cover from "../../components/Cover";
import Image from "next/image";
import Chip from "../../components/Chip";
import { AiOutlineRight, AiOutlineLeft, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
//UTILITY
import useFetch from "../../hooks/useFetch";
import { getColor } from "../../utils";
import { palette } from "../../utils/palette";
import { blurDataURL } from "../../utils/data";
//STYLE
import styles from "../../styles/sections/home/recommendation.module.scss";

const loadingData = [
    {
        title: 'Loading..',
        body: 'Loading..',
        category: 'Loading..',
        images: ['1', '2']
    },
    {
        title: 'Loading..',
        body: 'Loading..',
        category: 'Loading..',
        images: ['1', '2']
    },
]

function Recommendation() {
    const query = useFetch({ limitItem: 4 })

    const articles = query || loadingData

    const mapArticles = query.slice(1, 4)

    return (
        <SectionContainer>
            <div className={styles.row}>
                <div>
                    <h4>
                        <span>Recomend</span> For You
                    </h4>
                </div>
                <div className={styles.btn_wrapp}>
                    <button>
                        <AiOutlineLeft size={20} />
                    </button>
                    <button>
                        <AiOutlineRight size={20} />
                    </button>
                </div>

            </div>
            <div className={styles.content}>
                <div className={styles.left_column}>
                    <Cover
                        image={articles[0]?.images[0]}
                        category='ECONOMIC'
                        avatar={'/images/wahyu.jpg'}
                        chipcolor={getColor('ECONOMIC')}
                        title={articles[0]?.title}
                        authorname="Wahyu Nanda"
                        time="2 days ago" like={200} view={200} />
                </div>
                <div className={styles.rigth_column}>
                    {mapArticles?.map((item: any, idx: number) => {
                        const img = item?.images[0]
                        return (
                            <div key={idx} className={styles.wrapper_map}>
                                <div className={styles.img_wrapp} >
                                    <Image src={img} alt={`img-alt${img}`} width={100} height={100} placeholder='blur' blurDataURL={blurDataURL} />
                                    <div>
                                        <Chip title="MUSIC" backgroundColor={getColor('MUSIC')} />
                                    </div>
                                </div>
                                <div className={styles.detail}>
                                    <h5>{item.title}</h5>
                                    <p>Matthew ~ December 25, 2022</p>
                                    <div className={styles.like_wrapper}>
                                        <div>
                                            <AiOutlineHeart size={20} color={palette.grey} style={{ cursor: 'pointer' }} />
                                            <p>100</p>
                                        </div>
                                        <div>
                                            <AiOutlineEye size={20} color={palette.grey} style={{ cursor: 'pointer' }} />
                                            <p>100</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </SectionContainer>
    );
}

export default Recommendation;
