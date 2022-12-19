import React from "react";
import SectionContainer from "../../components/SectionContainer";
import Cover from "../../components/Cover";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
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
        <Cover />
      </div>
    </SectionContainer>
  );
}

export default Trending;
