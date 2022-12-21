import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Cover from "../../components/Cover";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import { getColor } from "../../utils";
//STYLE
import styles from "../../styles/sections/home/trending.module.scss";

function Trending() {

  return (
    <SectionContainer>
      <div className={styles.row}>
        <div>
          <h4>
            <span>Trending</span> Topics
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
            trending
            image="https://picsum.photos/id/1015/1000/600/"
            category='ECONOMIC'
            avatar={'./images/wahyu.jpg'}
            chipcolor={getColor('ECONOMIC')}
            title='Creative photography ideas from smart devices'
            authorname="Nahyu Nanda"
            time="2 days ago" like={200} view={200} />
        </div>
        <div className={styles.rigth_column}>
          <Cover
            trending
            image="https://picsum.photos/id/1018/1000/600/"
            category='ENTERTAINMENT'
            avatar={'./images/wahyu.jpg'}
            chipcolor={getColor('ENTERTAINMENT')}
            title='Creative photography ideas from smart devices'
            authorname="Nahyu Nanda"
            time="2 days ago" like={200} view={200} />
          <Cover
            trending
            image="https://picsum.photos/id/1019/1000/600/"
            category='SPORT'
            avatar={'./images/wahyu.jpg'}
            chipcolor={getColor('SPORT')}
            title='Creative photography ideas from smart devices'
            authorname="Nahyu Nanda"
            time="2 days ago" like={200} view={200} />
        </div>
      </div>
    </SectionContainer>
    // ./images/wahyu.jpg
  );
}

export default Trending;
