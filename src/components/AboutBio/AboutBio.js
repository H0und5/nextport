import Link from 'next/link';
import styles from './AboutBio.module.css';

const AboutBio = () => {

  return (
    <div className={styles.aboutBio}>
      <h1>
        Digital product designer
      </h1>

      <p>
        {"I'm"} a digital product designer based in Dallas, TX. Currently open to new opportunities.

        <br/><br/>

        In a usual week, I work with design systems, building low and high fidelity UIs in <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://www.figma.com'>Figma</a>, creating interactive prototypes for usability tests with <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://www.protopie.io'>Protopie</a>, and providing assets and writing documentation for developer handoff with <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://storybook.js.org'>Storybookjs</a>.

        <br/><br/>

        In addition to having a working knowledge of HTML/CSS and a basic understanding of JavaScript, {"I've"} worked with various libraries and frameworks like TailwindCSS, Vue, and React. {"I've"} also been known to get a div to center from time to time.

        <br/><br/>

        This site was built with Next.js and white chocolate mochas.
      </p>
    </div>
  )
}

export default AboutBio;
