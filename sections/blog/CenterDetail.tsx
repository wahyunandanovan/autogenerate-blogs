import React from "react";
import PopularPost from "../../components/PopularPost";
import styles from "../../styles/sections/blog/center-detail.module.scss";

interface PropsInterface {
  title: string;
}

function CenterDetail({ title }: PropsInterface) {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <h4>{title}</h4>
        <br />
        <div className={styles.detail}>
          <p>
            Id cursus metus aliquam eleifend mi in nulla posuere. Ipsum faucibus vitae aliquet nec ullamcorper sit. Amet
            purus gravida quis blandit turpis cursus in hac. Posuere urna nec tincidunt praesent semper feugiat nibh.
            Sollicitudin ac orci phasellus egestas tellus. Quis blandit turpis cursus in hac. In hendrerit gravida
            rutrum quisque. Pellentesque habitant morbi tristique senectus et. Eget gravida cum sociis natoque. Pharetra
            diam sit amet nisl suscipit adipiscing bibendum. Proin libero nunc consequat interdum varius sit amet
            mattis. Porttitor massa id neque aliquam. In fermentum posuere urna nec. Rhoncus aenean vel elit scelerisque
            mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare suspendisse sed nisi. Consequat id porta
            nibh venenatis cras sed.
            <br />
            <br />
            Eu nisl nunc mi ipsum faucibus vitae. Id cursus metus aliquam eleifend mi in nulla posuere. Ipsum faucibus
            vitae aliquet nec ullamcorper sit. Amet purus gravida quis blandit turpis cursus in hac. Posuere urna nec
            tincidunt praesent semper feugiat nibh. Sollicitudin ac orci phasellus egestas tellus. Quis blandit turpis
            cursus in hac. In hendrerit gravida rutrum quisque. Pellentesque habitant morbi tristique senectus et. Eget
            gravida cum sociis natoque. Pharetra diam sit amet nisl suscipit adipiscing bibendum. Proin libero nunc
            consequat interdum varius sit amet mattis. Porttitor massa id neque aliquam. In fermentum posuere urna nec.
            Rhoncus aenean vel elit scelerisque mauris pellentesque. Nullam ac tortor vitae purus faucibus ornare
            suspendisse sed nisi. Consequat id porta nibh venenatis cras sed. Eu nisl nunc mi ipsum faucibus vitae.
          </p>
        </div>
      </div>
      <div className={styles.right}>
        <PopularPost />
      </div>
    </div>
  );
}

export default CenterDetail;
