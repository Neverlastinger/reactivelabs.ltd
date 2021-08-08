import HTMLHead from 'components/HTMLHead';
import Browser from 'components/svg/Browser';
import Mobile from 'components/svg/Mobile';
import TopBar from 'components/TopBar';
import Gem from 'components/svg/Gem';
import ContactUs from 'components/ContactUs';
import styles from './index.module.scss';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <HTMLHead title="Reactive Labs Ltd" />

      <TopBar />

      <div className={styles.content}>
        <h1 className={styles.title}>
          <span>Committed to</span>
          <span>exceptional quality.</span>
        </h1>

        <div className={styles.services}>
          <ul>
            <li>
              <div className={styles.icon}>
                <Browser />
              </div>

              <h2>Web Development</h2>

              <div className={styles.description}>
                Creating interactive single page web applications using latest trends and robust technologies.
              </div>
            </li>

            <li>
              <div className={styles.icon}>
                <Gem />
              </div>

              <h2>UX Design</h2>

              <div className={styles.description}>
                Designing the best user interfaces and experience based on your product requirements.
              </div>
            </li>

            <li>
              <div className={styles.icon}>
                <Mobile />
              </div>

              <h2>Mobile Apps</h2>

              <div className={styles.description}>
                Creating and publishing native Android and iOS app or responsive web applications.
              </div>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.aboutSection}>
        <div className={styles.image}>
          <img src="screen.jpg" alt="" />
        </div>

        <div className={styles.mobileOverlay} />

        <div className={styles.aboutContent}>
          <h2>About</h2>

          <div className={styles.description}>
            Founded by a software developer with 12 years of experience, <strong>Reactive Labs Ltd</strong> is a legal entity registered in Bulgaria and operating worldwide.
            It provides IT services, IT consulting, software development, and web design.
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <ContactUs label="Say Hello" />
      </div>
    </div>
  );
}
