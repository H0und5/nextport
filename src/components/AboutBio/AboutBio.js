import styles from './AboutBio.module.css';

import BigDivider from '../Dividers/BigDivider';

const AboutBio = () => {

  return (
    <div className={styles.aboutBio}>
      <h1>
        Digital product designer
      </h1>

      <p>
        {"I'm"} a digital product designer, an ever-curious programmer, and sometimes a terrible investor. Currently open to opportunities.

        <br/><br/>

        In a usual week, I work with design systems, building high fidelity UIs and providing assets in <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://www.figma.com'>Figma</a>, creating interactive prototypes for usability tests with <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://www.protopie.io'>Protopie</a>, and writing documentation with <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://storybook.js.org'>Storybook.js</a>.

        <br/><br/>

        In addition to having a working knowledge of HTML/CSS and a decent understanding of JavaScript, {"I've"} worked and built projects with various libraries/frameworks such as <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://tailwindcss.com/'>Tailwind CSS</a>, <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://vuejs.org/'>Vue.js</a>, <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://reactjs.org/'>React.js</a> and <a className={styles.highlights} target="_blank" rel="noreferrer" href='https://nextjs.org/'>Next.js</a>. {"I've"} also been known to get a div to center from time to time.

        <br/><br/>

        This site was built with Next.js and venti white chocolate mochas by star 1 dollars.

        <br/><br/>

        If {"there's"} something you want to tell me, whether {"it's"} a rant about my issues with kerning, how my code should read better, or if you have a project in mind, feel free to <a className={styles.highlights} target="_blank" rel="noreferrer" href='mailto:om@omnagarkar.com'>email</a> me here. 
        
        <br/><br/>
        
        {"I'm"} going to update this site more and more as time goes on, maybe another portfolio iteration by the time you come back again. Nice of you to stop by to my little corner of the internet, I hope this finds you in good health and I wish you the best for the future. -Om

        <br/><br/>

      </p>

      <BigDivider />
    </div>
  )
}

export default AboutBio;
