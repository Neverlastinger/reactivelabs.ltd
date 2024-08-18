/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/no-unescaped-entities */
import HTMLHead from "components/HTMLHead";
import TopBar from "components/TopBar";
import ViaToptal from "components/ViaToptal/ViaToptal";
import ToggableSection from "components/ToggableSection";
import styles from "./index.module.scss";

export default function Resume() {
  return (
    <div className={styles.wrapper}>
      <HTMLHead title="Experience | Radoslav Popov" />
      <TopBar hideExperienceLink />

      <div className={styles.content}>
        <h1 className={styles.title}>Radoslav Popov</h1>
        <div className={styles.subtitle}>
          B2B | JavaScript | React | Front-End Architecture
        </div>

        <ToggableSection
          head={
            <>
              <h2>
                B2B Contractor,{" "}
                <span className={styles.date}>2021 - Ongoing</span>
              </h2>

              <div className={styles.description}>
                <p>
                  Collaborating with international clients to set up front-end
                  architecture using React. Responsible for establishing and
                  maintaining best practices, creating reusable components
                  across multiple applications, and developing UI libraries that
                  reflect corporate identity. Expertise in pixel-perfect,
                  responsive implementation. Conduct technical interviews for
                  front-end developers and mentor less experienced team members.
                  Experienced as a founding engineer in tech start-ups.
                </p>
                <p>References available from CEOs and founders upon request.</p>
              </div>
            </>
          }
          body={
            <>
              <li>
                <div className={styles.itemHeader}>
                  Senior JavaScript Developer, Founding Engineer at{" "}
                  <a
                    href="https://www.askwisdom.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    WisdomAI
                  </a>{" "}
                  <ViaToptal />
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Started the front-end application and GraphQL server from
                      scratch, establishing the initial architecture and
                      receiving positive feedback from stakeholders.
                    </li>
                    <li>
                      Enabled the client to secure their first paying customers
                      within six months of establishing the initial application
                      architecture.
                    </li>
                    <li>
                      Successfully transferred platform knowledge and
                      maintenance responsibilities to newly hired full-time
                      employees at the end of the 14-month contract.
                    </li>
                  </ul>

                  <div className={styles.sublistDetails}>
                    <strong>Background</strong>: Hired by WisdomAI before any
                    front-end codebase existed, I quickly established the
                    infrastructure using Next.js and a GraphQL server. I was the
                    first to create a PR after the CTO and gradually built the
                    chat interface for their AI business intelligence software —
                    a ChatGPT-like UI capable of responding to user queries with
                    charts and tables, in addition to simple text.
                  </div>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  Senior JavaScript Developer, Founding Engineer (Norwegian
                  Crypto Start-Up)
                  <ViaToptal />
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Built the front-end application from scratch and connected
                      it to a headless CMS via a GraphQL API (Contentful).
                    </li>
                    <li>
                      Enabled the research team to publish articles visible on a
                      custom-built research platform.
                    </li>
                    <li>
                      Developed a reusable React library with Storybook,
                      collaborating closely with the UX expert to ensure a
                      unified design across all applications.
                    </li>
                  </ul>

                  <div className={styles.sublistDetails}>
                    <strong>Background</strong>: As part of a tech team
                    initiative to modernize research publication, I was hired to
                    create a user-friendly, custom-built web platform utilizing
                    a headless CMS. The CTO appreciated my proposed solution,
                    based on Next.js, Firebase for authentication, and
                    Contentful.
                  </div>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  Senior JavaScript Developer (US-Based AI Start-Up)
                  <ViaToptal />
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Started the front-end application from scratch based on
                      Figma wireframes, quickly building and releasing the
                      proof-of-concept.
                    </li>
                  </ul>

                  <div className={styles.sublistDetails}>
                    <strong>Background</strong>: The company developed APIs
                    built on top of ChatGPT (and other LLMs) to enhance research
                    and text/data analysis with unprecedented accuracy and
                    speed. I was hired to establish their UI from scratch,
                    connecting it to existing REST APIs and leveraging Material
                    UI components while collaborating with the UX expert.
                  </div>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  Senior React Front-End Engineer (Remote Vehicle Management
                  Project, US-Based Enterprise)
                  <ViaToptal />
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Built the front-end application from scratch, utilizing
                      Material UI components, and successfully connected it to
                      rest APIs.
                    </li>
                  </ul>

                  <div className={styles.sublistDetails}>
                    <strong>Background</strong>: A major enterprise client in
                    the scooter rental business needed a new internal UI to
                    manage their vehicles remotely. Lacking UX and front-end
                    expertise, they sought a quick, modern, and stable solution.
                    I developed a React-based UI powered by Material UI
                    components and deployed it in AWS, delivering the solution
                    promptly.
                  </div>
                </div>
              </li>
            </>
          }
        />

        <ToggableSection
          head={
            <h2>
              Full-Time Software Engineer,
              <span className={styles.date}>2007 - 2021</span>
            </h2>
          }
          body={
            <>
              <li>
                <div className={styles.itemHeader}>
                  Senior JavaScript Developer at{" "}
                  <a
                    href="https://uk.fourth.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Fourth
                  </a>
                  <span className={styles.date}>Dec 2018 - Feb 2021</span>
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Led the setup of the front-end architecture and initiated
                      a comprehensive rewrite of one of the organization's
                      flagship web/native products—an employee engagement social
                      network. Leveraged a tech stack including React, React
                      Native, Redux, Redux-saga, Webpack, and Jest to deliver a
                      modern, scalable, and high-performing solution.
                    </li>
                    <li>
                      Played a pivotal role in shaping the corporate strategy to
                      migrate legacy products to cutting-edge technologies such
                      as React and React Native. Led the establishment of best
                      practices and robust architectural frameworks to ensure
                      seamless transition.
                    </li>
                    <li>
                      Mentored and coached fellow front-end developers in React
                      and software engineering best practices, driving
                      professional growth (references upon request).
                    </li>
                  </ul>

                  <div className={styles.sublistDetails}>
                    <strong>Background</strong>: The company had previously
                    faced challenges due to suboptimal engineering decisions,
                    resulting in hard-to-maintain legacy products. I was brought
                    on as the first Senior Engineer with deep React expertise to
                    initiate a transition to modern, robust solutions. By the
                    end of my tenure, team velocity had increased by 2 to 3
                    times.
                  </div>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  JavaScript Developer at{" "}
                  <a
                    href="https://www.urbanise.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Urbanise.com
                  </a>
                  <span className={styles.date}>Jun 2016 - Jan 2018</span>
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Initiated the establishment of a robust vanilla JavaScript
                      architecture and successfully led the development of a
                      custom web application tailored for drawing office layouts
                      incorporating IoT devices.
                    </li>
                    <li>
                      Served as an integral member of a cross-functional team
                      dedicated to the development of a React application for
                      property management in an Agile environment.
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  JavaScript Developer at{" "}
                  <a
                    href="https://www.milestonesys.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Milestone Systems
                  </a>
                  <span className={styles.date}>Apr 2012 - Jun 2016</span>
                </div>

                <div className={styles.itemContent}>
                  <ul className={styles.sublist}>
                    <li>
                      Being the inaugural team member of the newly formed web
                      development team, pioneered the development of the web
                      client for a sophisticated video surveillance software,
                      enabling seamless rendering of live and playback video
                      directly in the browser.
                    </li>
                    <li>
                      Leveraged cutting-edge browser technologies for that era,
                      such as Canvas, WebSockets, History API, File API, and
                      CSS3 animations and transitions to drive the success of
                      the web client, delivering a highly interactive and
                      immersive user experience.
                    </li>
                    <li>
                      Played an important role in the hiring process, assuming
                      responsibility for leading and conducting over 40
                      technical interviews specifically focused on
                      JavaScript-related roles. Demonstrated expertise in
                      evaluating and selecting top talent, ensuring the
                      acquisition of skilled professionals who aligned with
                      organizational requirements and goals.
                    </li>
                  </ul>

                  <div className={styles.sublistDetails}>
                    <strong>Background</strong>: The year was 2012 and SPA
                    frameworks were not yet popular. The company had a bold
                    ambition to build a live and playback video surveillance
                    software in the browser—a feat that was uncertain at the
                    time. Leveraging emerging HTML5 APIs and the new browser
                    capabilities, I managed to set-up and later extend a custom
                    JavaScript MVC framework, leading to the release of the
                    Milestone Web Client. This product became a signature
                    offering in the company's portfolio.
                  </div>
                </div>
              </li>

              <li style={{ paddingBottom: "16px" }}>
                <div className={styles.itemHeader}>
                  Java Developer at{" "}
                  <a href="https://dxc.com/" target="_blank" rel="noreferrer">
                    CSC (now DXC Technology)
                  </a>
                  <span className={styles.date}>Jul 2009 - Apr 2012</span>
                </div>
              </li>

              <li style={{ paddingBottom: "16px" }}>
                <div className={styles.itemHeader}>
                  [Part-time] Java Intern at{" "}
                  <a
                    href="https://www.sap.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    SAP Labs Bulgaria
                  </a>
                  <span className={styles.date}>Aug 2008 - Feb 2009</span>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  [Part-time] Front-end developer / PHP developer at{" "}
                  <a
                    href="https://www.stanga.net/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Stanga
                  </a>
                  <span className={styles.date}>Mar 2007 - Mar 2008</span>
                </div>
              </li>
            </>
          }
        />

        <ToggableSection
          head={<h2>Education</h2>}
          body={
            <>
              <li style={{ paddingBottom: "16px" }}>
                <div className={styles.itemHeader}>
                  Master's Degree in General Psychology in English, Sofia
                  University St. Kliment Ohridski
                  <span className={styles.date}>2015 - 2017</span>
                </div>
              </li>

              <li>
                <div className={styles.itemHeader}>
                  Bachelor's Degree in Informatics, Sofia University St. Kliment
                  Ohridski
                  <span className={styles.date}>2006 - 2010</span>
                </div>
              </li>
            </>
          }
        />
      </div>
    </div>
  );
}
