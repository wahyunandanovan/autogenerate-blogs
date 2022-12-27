import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Cover from "../../components/Cover";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
//UTILITY
import useFetch from "../../hooks/useFetch";
import moment from "moment";
import { getColor } from "../../utils";
import { collection, limit, orderBy, query } from "firebase/firestore";
import { firestore } from "../../utils/firebase";
//STYLE
import styles from "../../styles/sections/home/trending.module.scss";

function Trending() {
  const q = query(collection(firestore, "articles"), limit(3), orderBy("created_at", "desc"));

  const { data: trendingData, isLoading } = useFetch(q);

  const arr1 = trendingData[0];
  const arr2 = trendingData[1];
  const arr3 = trendingData[2];
  const time = (item: any) => moment(String(item?.created_at)).fromNow();

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
            href={`/blog/${arr1?.id}`}
            image={arr1?.images[0]}
            category={arr1?.category.name.toUpperCase()}
            avatar="/images/wahyu.jpg"
            chipcolor={getColor(arr1?.category.id)}
            title={arr1?.title}
            authorname="Nahyu Nanda"
            time={time(arr1)}
            like={200}
            view={200}
          />
        </div>
        <div className={styles.rigth_column}>
          <Cover
            trending
            href={`/blog/${arr2?.id}`}
            image={arr2?.images[0]}
            category={arr2?.category.name.toUpperCase()}
            avatar="/images/wahyu.jpg"
            chipcolor={getColor(arr2?.category.id)}
            title={arr2?.title}
            authorname="Wahyu Nanda"
            time={time(arr2)}
            like={200}
            view={200}
          />
          <Cover
            trending
            href={`/blog/${arr3?.id}`}
            image={arr3?.images[0]}
            category={arr3?.category.name.toUpperCase()}
            avatar="/images/wahyu.jpg"
            chipcolor={getColor(arr3?.category.id)}
            title={arr3?.title}
            authorname="Nahyu Nanda"
            time={time(arr3)}
            like={200}
            view={200}
          />
        </div>
      </div>
    </SectionContainer>
  );
}

export default Trending;
