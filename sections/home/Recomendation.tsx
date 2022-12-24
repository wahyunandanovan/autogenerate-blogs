import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Cover from "../../components/Cover";
import { AiOutlineRight, AiOutlineLeft, AiOutlineHeart, AiOutlineEye } from "react-icons/ai";
//UTILITY
import { getColor } from "../../utils";
import { palette } from "../../utils/palette";
//STYLE
import styles from "../../styles/sections/home/recommendation.module.scss";
import Chip from "../../components/Chip";

function Recommendation() {

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
                        image="https://picsum.photos/id/1019/1000/600/"
                        category='ECONOMIC'
                        avatar={'./images/wahyu.jpg'}
                        chipcolor={getColor('ECONOMIC')}
                        title='Creative photography ideas from smart devices'
                        authorname="Nahyu Nanda"
                        time="2 days ago" like={200} view={200} />
                </div>
                <div className={styles.rigth_column}>
                    {[1, 2, 3].map((item: number, idx: number) => {
                        return (
                            <div key={idx} className={styles.wrapper_map}>
                                <div className={styles.img_wrapp} >
                                    <img src='https://picsum.photos/id/1019/1000/600/' alt='img' loading='lazy' />
                                    <div>
                                        <Chip title="MUSIC" backgroundColor={getColor('MUSIC')} />
                                    </div>
                                </div>
                                <div className={styles.detail}>
                                    <h5>How to choose the right colors when creating a website?</h5>
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
        // ./images/wahyu.jpg
    );
}

export default Recommendation;
