// import Head from 'next/head'
import style from "../styles/Home.module.css";
import styles from "../styles/404.module.css";

import BigDivider from "../src/components/Dividers/BigDivider";
import SmallDivider from "../src/components/Dividers/SmallDivider";
import MobileLargeDivider from "../src/components/Dividers/MobileLargeDivider";
import LargeButton from '../src/components/Buttons/MobileButton'
import MobileButton from "../src/components/Buttons/MobileButton";

// components

export default function FourZeroFour() {
  return (
    <div className={style.container}>
      <SmallDivider />
      <SmallDivider />

      <MobileLargeDivider />

      <div className={styles.FourZeroFourContainer}>
        <h1>Four Uh Oh Four - Not Found</h1>
      </div>

      <div className={styles.CopyContainer}>
        <p>
          Something has definitely gone wrong, not really sure what, but it did.
          <br />
          <br />
          If it bothers you, feel free to{" "}
          <a className={styles.highlight} href="mailto:om@omnagarkar.com">
            email me here
          </a>{" "}
          to rant and/or explain what happened so I can fix it.
          <br />
          <br />
          Otherwise, you can go ahead and click the button below to navigate
          back to the home page or click my name at the top left.
        </p>
      </div>

      <MobileButton cta={"RETURN TO HOME"} srcTo={"/"}/>

      <BigDivider />
    </div>
  );
}
