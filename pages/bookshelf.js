// import Head from 'next/head'
import styles from "../styles/Home.module.css";

import BigDivider from "../src/components/Dividers/BigDivider";
import SmallDivider from "../src/components/Dividers/SmallDivider";
import CopyCard from "../src/components/Cards/CopyCard";

// components

export default function Bookshelf() {
  return (
    <div className={styles.container}>

      <SmallDivider />
      <SmallDivider />
      <SmallDivider />
      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard
          title={"Range"}
          description={
            "A book about why generalists triumph in a specialized world is a 2019 book by David Epstein."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.penguinrandomhouse.com/books/550188/range-by-david-epstein/"
          }
          targetBlank={"_blank"}
        />

        <CopyCard
          title={"Thinking in Systems"}
          description={
            "Offers insight for problem solving on scales of personal and global by Donella Meadows."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.chelseagreen.com/product/thinking-in-systems/"
          }
          targetBlank={"_blank"}
        />
      </div>

      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard
          title={"Sapiens"}
          description={
            "Details the whole of human history through the Cognitive, Agricultural, and Scientific Revolutions."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.harpercollins.com/products/sapiens-yuval-noah-harari"
          }
          targetBlank={"_blank"}
        />

        <CopyCard
          title={"User-Friendly"}
          description={
            "How a paradigm that machines should anticipate what we need, quietly rules our modern lives."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.mcdbooks.com/books/user-friendly/"
          }
          targetBlank={"_blank"}
        />
      </div>

      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard
          title={"Mismatch"}
          description={
            "A book about why generalists triumph in a specialized world is a 2019 book by David Epstein."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://katholmesdesign.com/the-book"
          }
          targetBlank={"_blank"}
        />

        <CopyCard
          title={"About Face"}
          description={
            "Offers insight for problem solving on scales of personal and global by Donella Meadows."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.wiley.com/en-us/About+Face%3A+The+Essentials+of+Interaction+Design%2C+4th+Edition-p-9781118766576"
          }
          targetBlank={"_blank"}
        />
      </div>

      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard
          title={"The Secret Life of Programs"}
          description={
            "A book about why generalists triumph in a specialized world is a 2019 book by David Epstein."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://nostarch.com/foundationsofcomp"
          }
          targetBlank={"_blank"}
        />

        <CopyCard
          title={"Breath"}
          description={
            "Offers insight for problem solving on scales of personal and global by Donella Meadows."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.mrjamesnestor.com/breath/"
          }
          targetBlank={"_blank"}
        />
      </div>

      <SmallDivider />

      <div className={styles.sectionRows}>
        <CopyCard
          title={"The Ten Day MBA"}
          description={
            "A book about why generalists triumph in a specialized world is a 2019 book by David Epstein."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://www.harpercollins.com/products/the-ten-day-mba-4th-ed-steven-a-silbiger?variant=32206243987490"
          }
          targetBlank={"_blank"}
        />

        <CopyCard
          title={"Designing Data Intensive Apps"}
          description={
            "Offers insight for problem solving on scales of personal and global by Donella Meadows."
          }
          link={"Buy from publisher ->"}
          linkSource={
            "https://dataintensive.net/buy.html"
          }
          targetBlank={"_blank"}
        />
      </div>

      <BigDivider />
    </div>
  );
}
