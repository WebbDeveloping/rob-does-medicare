import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Rob Larsen Medicare Agent in Salt Lake City, UT</title>
        <meta
          name="description"
          content="I am a licensed insurance agent and offer advice on Medicare supplemental policies. For more information call 801-966-9444 or visit my website at www.robdoesmedicare.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900%7CDomine:regular,500,600,700%7CDM+Sans:regular,500,700,700italic"
          media="all"
        ></link>
        {/* <script type="text/javascript">WebFont.load({  google: {    families: ["Inter:100,200,300,regular,500,600,700,800,900","Domine:regular,500,600,700","DM Sans:regular,500,700,700italic"]  }});</script> */}
        <link
          rel="stylesheet"
          href="https://uploads-ssl.webflow.com/5ffd76b1a1519877c62735a1/css/robdoesmedicare.webflow.1b5b4e8d1.css"
          media="all"
        ></link>
        <script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        ></script>
        <link rel="icon" href="/rob-favicon.png" />
      </Head>
      <main>
        <div className="sticky-navigation">
          <div
            data-collapse="medium"
            data-animation="default"
            data-duration="400"
            data-w-id="b0605df9-eed8-0ae0-40c6-4c68a678138f"
            data-easing="ease"
            data-easing2="ease"
            role="banner"
            className="navbar flex w-nav"
          >
            <div className="container-nav flex w-container">
              <div className="left-flex">
                <a
                  href="index.html"
                  aria-current="page"
                  className="logo w-nav-brand w--current"
                >
                  <h5 className="logo-heading">RobDoesMedicare.com</h5>
                </a>
                <div className="menu-flex reverse">
                  <div className="menu-button w-nav-button">
                    <div
                      data-w-id="b0605df9-eed8-0ae0-40c6-4c68a6781397"
                      className="hamburger-line"
                    ></div>
                    <div
                      data-w-id="b0605df9-eed8-0ae0-40c6-4c68a6781398"
                      className="hamburger-line"
                    ></div>
                  </div>
                  <nav role="navigation" className="nav-menu w-nav-menu">
                    <a
                      href="#About-me"
                      className="navigation-link w-inline-block"
                    >
                      <div className="nav-text">About</div>
                    </a>
                    <div
                      data-delay="0"
                      data-hover="true"
                      className="header-dropdown w-dropdown"
                    >
                      <div className="navigation-link flex w-dropdown-toggle">
                        <div>
                          <div className="nav-text">See Medicare Plans</div>
                        </div>
                        <img
                          src="https://uploads-ssl.webflow.com/5ffd76b1a1519877c62735a1/5ffd83f31950665b6b70bb2b_arrow.png"
                          width="7"
                          alt=""
                          className="arrow"
                        />
                      </div>
                      <nav className="menu-container w-dropdown-list">
                        <div className="mega-menu-column">
                          <a
                            href="https://integrity7.destinationrx.com/PC/2022/Profile/Search?utm_source=pc1&amp;utm_medium=email&amp;utm_campaign=bpml"
                            target="_blank"
                            className="dropdown-link w-dropdown-link"
                          >
                            Medicare Plans
                          </a>
                          <link
                            rel="prefetch"
                            href="https://integrity7.destinationrx.com/PC/2022/Profile/Search?utm_source=pc1&amp;utm_medium=email&amp;utm_campaign=bpml"
                          />
                          <a
                            href="https://downloads.gtlic.com/GTLink/Uploads/LAForms/Adv%20Plus%20UTAH%20Brochure%20Rv%201_20%2015B491.pdf"
                            target="_blank"
                            className="dropdown-link w-dropdown-link"
                          >
                            GTL
                          </a>
                          <a
                            href="https://spiritdental.com/get-a-quote?agent=001C000001luUpGIAU#/quote"
                            target="_blank"
                            className="dropdown-link w-dropdown-link"
                          >
                            Dental Plan
                          </a>
                        </div>
                        <div className="mega-menu-column">
                          <div
                            data-delay="0"
                            data-hover="true"
                            className="w-dropdown"
                          >
                            <div className="navigation-link flex plan w-dropdown-toggle">
                              <div>
                                <div className="nav-text">Forms</div>
                              </div>
                              <img
                                src="https://uploads-ssl.webflow.com/5ffd76b1a1519877c62735a1/5ffd83f31950665b6b70bb2b_arrow.png"
                                width="7"
                                alt=""
                                className="arrow"
                              />
                            </div>
                            <nav className="menu-container end-form w-dropdown-list">
                              <div className="mega-menu-column">
                                <a
                                  href="https://416d6346-6860-4b1b-817a-34a99e3e7996.filesusr.com/ugd/36cb69_d11e09380cd74cb6a014fb04a559f493.pdf"
                                  target="_blank"
                                  className="dropdown-link w-dropdown-link"
                                >
                                  Scope of Appointment
                                </a>
                                <a
                                  href="https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/Downloads/CMS40B-E.pdf"
                                  target="_blank"
                                  className="dropdown-link w-dropdown-link"
                                >
                                  CMS Form 40B
                                </a>
                              </div>
                              <div className="mega-menu-column">
                                <a
                                  href="https://www.cms.gov/medicare/cms-forms/cms-forms/downloads/sf5510english.pdf"
                                  target="_blank"
                                  className="dropdown-link w-dropdown-link"
                                >
                                  Medicare Easy Pay Application
                                </a>
                                <a
                                  href="https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/Downloads/CMS-L564E.pdf"
                                  target="_blank"
                                  className="dropdown-link w-dropdown-link"
                                >
                                  CMS Form L564
                                </a>
                              </div>
                            </nav>
                          </div>
                          <a
                            href="https://www.ahip.org/wp-content/uploads/Medigap2020-002.pdf"
                            target="_blank"
                            className="dropdown-link w-dropdown-link"
                          >
                            Supplement Plan A-N
                          </a>
                          <a
                            href="https://secure.ssa.gov/iClaim/rib"
                            target="_blank"
                            className="dropdown-link w-dropdown-link"
                          >
                            Sign Up for Medicare
                          </a>
                        </div>
                      </nav>
                    </div>
                    <a
                      href="#footer"
                      className="navigation-link w-inline-block"
                    >
                      <div className="nav-text">Contact</div>
                    </a>
                  </nav>
                </div>
              </div>
              <div className="right-flex">
                <a
                  href="https://integrity7.destinationrx.com/PC/2022/Profile/Search?utm_source=pc1&amp;utm_medium=email&amp;utm_campaign=bpml"
                  target="_blank"
                  className="button-primary-2 small w-button"
                >
                  See All Medicare Plans
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="page-wrapper">
          <div id="hero" className="section-2 home-hero smaller-padding">
            <div className="container-1360">
              <div className="home-hero-wrapper">
                <div className="split-content home-hero">
                  <div className="home-hero-main-content">
                    <div className="accent-line hero-line"></div>
                    <h1
                      data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdefa"
                      // style="opacity:0"
                      className="title camel-case"
                    >
                      I make medicare simple with an Easy Step by Step Process
                      <br />
                    </h1>
                    <p
                      data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdefd"
                      // style="opacity:0"
                      className="paragraph home-hero"
                    >
                      My name is Rob, as a personal agent, I will help you
                      understand the difference between all the various Medicare
                      plans.
                      <br />I work for many companies as an independent
                      contractor, so I can find you the best plan without bias
                      or conflict of interest. Call me with questions about
                      Medicare my service is free of charge to you!
                      <br />
                      <br />
                      You might be feeling a little overwhelmed about signing up
                      for Medicare. But don&#x27;t stress! I make it simple to
                      help you find out which plan&#x27;s best for you and
                      enroll in it with ease, all while saving time so that your
                      busy life doesn’t get interrupted by paperwork.
                      <br />
                    </p>
                    <ul role="list" className="section-list home-1">
                      <li className="list-medium">Determine eligibility.</li>
                      <li className="list-medium">Understand your options.</li>
                      <li className="list-medium">
                        Enroll in the perfect plan.
                      </li>
                      <li className="list-medium">Continued Client Support.</li>
                      <li className="list-medium">At No Cost to You.</li>
                    </ul>
                    <p
                      data-w-id="eeba3053-9b1b-80e3-7251-516035ddbdba"
                      // style="opacity:0"
                      className="paragraph home-hero"
                    >
                      Don&#x27;t think about the daunting task ahead of you. I
                      will help make it easy and manageable as we take your
                      questions step by step, so that in no time at all,
                      you&#x27;ll feel confident in your decision.
                      <br />
                    </p>
                    <div className="two-buttons">
                      <a
                        href="#useful-links"
                        className="button-primary w-inline-block"
                      >
                        <div className="button-hover"></div>
                        <div className="button-flex-2">
                          <div className="button-text primary-button">
                            See All Medicare Plans
                          </div>
                        </div>
                      </a>
                      <div className="spacer"></div>
                      <a
                        href="tel:(801)-692-0174"
                        className="text-link w-inline-block"
                      >
                        <div className="text-likn">Call: (801)-692-0174</div>
                      </a>
                      <a href="#" className="contact-link w-inline-block">
                        <div className="button-hover"></div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              src="images/rob.jpeg"
              loading="lazy"
              alt=""
              className="bg-hero-image"
            />
          </div>
          <div id="my-process" className="section-2 home-1 hide">
            <div className="container-1360">
              <div className="section-wrapper">
                <img
                  src="images/Untitled-design-29.png"
                  loading="lazy"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  data-w-id="cad3aa69-a386-443f-ba84-8a8556c9c232"
                  srcset="images/Untitled-design-29-p-500.png 500w, images/Untitled-design-29.png 700w"
                  sizes="100vw"
                  alt=""
                  className="image home-1"
                />
                <div
                  data-w-id="cad3aa69-a386-443f-ba84-8a8556c9c233"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="split-content home-step-1"
                >
                  <div>
                    <div className="step">Let&#x27;s start</div>
                    <div className="accent-line home-line"></div>
                  </div>
                  <h2 className="title home-1">
                    My Step By Step Process is Simple.
                    <strong>
                      <br />
                    </strong>
                  </h2>
                  <p className="paragraph home-1">
                    You might be feeling a little overwhelmed as Medicare
                    enrollment is just around the corner. But don&#x27;t stress!
                    I make it simple to help you find out which plan&#x27;s best
                    for you and enroll in it with ease, all while saving time so
                    that your busy life doesn’t get interrupted by paperwork.
                    <br />
                  </p>
                  <p className="paragraph home-1">
                    Don&#x27;t think about the daunting task ahead of you. I
                    will help make it easy and manageable as we take your
                    questions step by step, so that in no time at all,
                    you&#x27;ll feel confident in your decision.
                    <br />
                  </p>
                  <a
                    href="#contact"
                    className="button-primary-2 w-inline-block"
                  >
                    <div className="button-hover"></div>
                    <div className="button-flex-2">
                      <div className="button-text primary-button">
                        Call Me Now: (801)-692-0174
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="cad3aa69-a386-443f-ba84-8a8556c9c24f"
              style={{ width: "0px" }}
              className="bg home-1"
            ></div>
          </div>
          <div id="Services" className="section-2 md-padding">
            <div
              data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdf13"
              style={{
                WebkitTransform:
                  "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MozTransform:
                  "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                MsTransform:
                  "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                transform:
                  "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                // opacity: "0"
              }}
              className="medium-container process"
            >
              <h2 className="title">
                <strong>Supplement or Advantage?</strong>
                <br />
              </h2>
            </div>
            <div className="container-1360">
              <div className="process-wrapper">
                <div
                  id="w-node-_268923f8-8ae1-8580-7b74-dafb27ecdf1c-09b97209"
                  data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdf1c"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="process-wrap"
                >
                  <div className="process-content bg-100">
                    <img
                      src="images/shield.svg"
                      loading="lazy"
                      alt=""
                      className="image plan-icon"
                    />
                    <h3 className="title process-item">
                      Original Medicare <br />
                      plan
                      <strong>
                        <br />
                      </strong>
                    </h3>
                    <p className="paragraph process-item">
                      (Part A) (Part B)
                      <br />
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-c5f3c098-67cc-46d7-dcec-3fa0c2189c07-09b97209"
                  className="plus-wrapper"
                >
                  <div className="plus-sign">+</div>
                </div>
                <div
                  id="w-node-_268923f8-8ae1-8580-7b74-dafb27ecdf26-09b97209"
                  data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdf26"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="process-wrap"
                >
                  <div className="process-content">
                    <img
                      src="images/heart-icon.svg"
                      loading="lazy"
                      alt=""
                      className="image plan-icon"
                    />
                    <h3 className="title process-item">
                      Medicare Supplement
                      <br /> Plan
                    </h3>
                    <p className="paragraph process-item">
                      (Medigap)
                      <br />
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-_625fff14-fbd8-681c-9ef9-7cf3e0c217e9-09b97209"
                  className="plus-wrapper right"
                >
                  <div className="plus-sign">+</div>
                </div>
                <div
                  id="w-node-_268923f8-8ae1-8580-7b74-dafb27ecdf2e-09b97209"
                  data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdf2e"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="process-wrap end"
                >
                  <div className="process-content bg-100">
                    <img
                      src="images/Icons-4.png"
                      loading="lazy"
                      sizes="83.99305725097656px"
                      srcset="images/Icons-4-p-500.png 500w, images/Icons-4.png 600w"
                      alt=""
                      className="image plan-icon pill"
                    />
                    <div className="process-number hide">
                      3<span className="blue-dot">.</span>
                    </div>
                    <h3 className="title process-item">
                      Prescription Drug <br />
                      Plan
                    </h3>
                    <p className="paragraph process-item">
                      (Part D)
                      <br />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container-1360 hide">
              <div>
                <div className="center-align">
                  <div className="equal-sign">OR</div>
                </div>
              </div>
              <div className="process-wrapper">
                <div
                  id="w-node-_96549746-8927-1843-6230-51482cd33d4c-09b97209"
                  data-w-id="96549746-8927-1843-6230-51482cd33d4c"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="process-wrap medicare-ad-plan"
                >
                  <div className="process-content medicare-card">
                    <div className="_3-col-grid">
                      <div id="w-node-_3d405ea8-be52-1e96-213c-639968096897-09b97209">
                        <div className="accent-line margin-botttom-30"></div>
                        <h3 className="title process-item display-2">
                          Medicare Advantage
                          <br /> Plan (Part C).
                        </h3>
                        <p className="paragraph process-item fine-print">
                          Includes Prescription Drug Plan Part
                          <br />
                        </p>
                      </div>
                      <div id="w-node-_5fb57cd6-0589-ad87-f6ef-3a4dbbfcca23-09b97209">
                        <p className="paragraph process-item fine-print">
                          Most plans include*
                          <br />
                        </p>
                        <ul
                          role="list"
                          className="section-list medicare-advantage-plan"
                        >
                          <li className="list-medium">
                            <strong>Prescription Drug</strong>
                          </li>
                          <li className="list-medium">
                            <strong>Dental.</strong>
                          </li>
                          <li className="list-medium">
                            <strong>Vision</strong>
                          </li>
                          <li className="list-medium">
                            <strong>Hearing</strong>
                          </li>
                          <li className="list-medium">
                            <strong>Individual Gym Membership</strong>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <a
                    href="https://integrity7.destinationrx.com/PC/2021/Profile/Search"
                    className="button-primary-2 small margin-30px w-button"
                  >
                    See All Medicare Plans
                  </a>
                </div>
              </div>
            </div>
            <div className="container-1360">
              <div className="div-block">
                <div className="center-align">
                  <div className="equal-sign">OR</div>
                  <section className="container-1360 wf-section">
                    <div className="divider-2"></div>
                  </section>
                </div>
              </div>
              <div className="process-wrapper">
                <div
                  id="w-node-_32eb3f80-ffe2-24ed-bba7-346275231637-09b97209"
                  data-w-id="32eb3f80-ffe2-24ed-bba7-346275231637"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="process-wrap medicare-ad-plan"
                >
                  <div className="process-content medicare-card">
                    <h3 className="title process-item display-2 center-align">
                      Medicare Advantage Plan (Part C)
                    </h3>
                    <div className="_3-col-grid">
                      <div id="w-node-_32eb3f80-ffe2-24ed-bba7-346275231644-09b97209">
                        <p className="paragraph process-item center green-bold">
                          <strong>Most Plans Include*</strong>
                          <br />
                        </p>
                      </div>
                    </div>
                    <ul
                      role="list"
                      className="section-list medicare-advantage-plan-row"
                    >
                      <li className="list-medium">
                        <strong>Prescription Drug</strong>
                      </li>
                      <li className="list-medium">
                        <strong>Dental</strong>
                      </li>
                      <li className="list-medium">
                        <strong>Vision</strong>
                      </li>
                      <li className="list-medium">
                        <strong>Hearing</strong>
                      </li>
                      <li className="list-medium">
                        <strong>Fitness Membership</strong>
                      </li>
                    </ul>
                  </div>
                  <a
                    href="https://integrity7.destinationrx.com/PC/2022/Profile/Search?utm_source=pc1&amp;utm_medium=email&amp;utm_campaign=bpml"
                    target="_blank"
                    className="button-primary-2 small margin-30px w-button"
                  >
                    See All Medicare Plans
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="personal-agent" className="section-2 home-2">
            <div className="container-1360">
              <div className="section-wrapper white-bg">
                <div
                  data-w-id="8828b947-8af5-7d94-0386-e6ce89657a9e"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="split-content home-2"
                >
                  <div className="margin-bottom-10px">
                    <div className="step">Useful Links</div>
                    <div className="accent-line home-line"></div>
                  </div>
                  <p className="paragraph home-1">
                    With so many different Medicare plans on the market today,
                    it can seem daunting to find one that meets all your needs.
                    Fortunately for you though, I represent a diverse range of
                    companies who offer coverage at affordable rates and are
                    always looking out for their clients’ best interests.
                    <br />
                  </p>
                </div>
                <div
                  id="useful-links"
                  data-w-id="8828b947-8af5-7d94-0386-e6ce89657aa9"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="split-content service-buttons"
                >
                  <div className="_3-col-grid">
                    <a
                      href="https://downloads.gtlic.com/GTLink/Uploads/LAForms/Adv%20Plus%20UTAH%20Brochure%20Rv%201_20%2015B491.pdf"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>GTL</div>
                      </div>
                    </a>
                    <a
                      href="https://secure.ssa.gov/iClaim/rib"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>
                          <strong>Sign Up for Medicare</strong>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.ahip.org/wp-content/uploads/Medigap2020-002.pdf"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>
                          <strong>Supplement Plan A-N</strong>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://spiritdental.com/get-a-quote?agent=001C000001luUpGIAU#/quote"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>Dental Plan</div>
                      </div>
                    </a>
                    <div
                      data-hover="false"
                      data-delay="0"
                      id="w-node-_8828b947-8af5-7d94-0386-e6ce89657ac6-09b97209"
                      className="dropdown-3 w-dropdown"
                    >
                      <div className="button medicare-form-plan w-dropdown-toggle">
                        <div className="w-icon-dropdown-toggle"></div>
                        <div>Forms</div>
                      </div>
                      <nav className="dropdown-list-4 w-dropdown-list">
                        <a
                          href="https://416d6346-6860-4b1b-817a-34a99e3e7996.filesusr.com/ugd/36cb69_d11e09380cd74cb6a014fb04a559f493.pdf"
                          target="_blank"
                          className="dropdown-link-2 w-dropdown-link"
                        >
                          <strong>Scope of Appointment</strong>
                        </a>
                        <a
                          href="https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/Downloads/CMS40B-E.pdf"
                          target="_blank"
                          className="dropdown-link-2 w-dropdown-link"
                        >
                          <strong>CMS Form 40B</strong>
                        </a>
                        <a
                          href="https://www.cms.gov/medicare/cms-form"
                          target="_blank"
                          className="dropdown-link-2 w-dropdown-link"
                        >
                          <strong>Medicare Easy Pay Application</strong>
                        </a>
                        <a
                          href="https://www.cms.gov/Medicare/CMS-Forms/CMS-Forms/Downloads/CMS-L564E.pdf"
                          target="_blank"
                          className="dropdown-link-2 w-dropdown-link"
                        >
                          <strong>CMS Form L564</strong>
                        </a>
                      </nav>
                    </div>
                    <a
                      id="w-node-_8828b947-8af5-7d94-0386-e6ce89657ad8-09b97209"
                      href="https://integrity7.destinationrx.com/PC/2022/Profile/Search?utm_source=pc1&amp;utm_medium=email&amp;utm_campaign=bpml"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button medicare-plan-b-tn">
                        <div>Review Medicare Plans</div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="8828b947-8af5-7d94-0386-e6ce89657adc"
              style={{ width: "0px" }}
              className="bg home-2"
            ></div>
          </div>
          <div id="personal-agent" className="section-2 home-2 temp hide">
            <div className="container-1360">
              <div className="_50">
                <div className="step">Useful Links</div>
                <div className="accent-line home-line margin"></div>
              </div>
              <div className="section-wrapper white-bg">
                <div
                  data-w-id="d2cedf42-d391-7b31-8a85-a020752c9c57"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="split-content service-buttons"
                >
                  <div className="_3-col-grid">
                    <a
                      href="https://downloads.gtlic.com/GTLink/Uploads/LAForms/Adv%20Plus%20UTAH%20Brochure%20Rv%201_20%2015B491.pdf"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>GTL</div>
                      </div>
                    </a>
                    <a
                      id="w-node-d72bd5be-e25e-07e3-d415-e5f137adb034-09b97209"
                      href="#"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button green">
                        <div>Medicare Plans</div>
                      </div>
                    </a>
                    <a href="#" className="_w-100 w-inline-block">
                      <div className="button-2 grey topic-button">
                        <div>
                          <strong>Sign Up for Medicare</strong>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.ahip.org/wp-content/uploads/Medigap2020-002.pdf"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>
                          <strong>Supplement Plan A-N</strong>
                        </div>
                      </div>
                    </a>
                    <a
                      href="https://www.ahip.org/wp-content/uploads/Medigap2020-002.pdf"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    >
                      <div className="button-2 grey topic-button">
                        <div>
                          <strong>Dental Plans</strong>
                        </div>
                      </div>
                    </a>
                    <div
                      data-hover="false"
                      data-delay="0"
                      id="w-node-ad1a4838-5a93-9414-8f30-e93a82a6ac9a-09b97209"
                      className="dropdown-3 w-dropdown"
                    >
                      <div className="button medicare-form-plan w-dropdown-toggle">
                        <div className="w-icon-dropdown-toggle"></div>
                        <div>Forms</div>
                      </div>
                      <nav className="dropdown-list-4 w-dropdown-list">
                        <a href="#" className="w-dropdown-link">
                          <strong>Scope of Appointment</strong>
                        </a>
                        <a href="#" className="w-dropdown-link">
                          <strong>CMS Form 40B</strong>
                        </a>
                        <a href="#" className="w-dropdown-link">
                          <strong>Medicare Easy Pay Application</strong>
                        </a>
                        <a href="#" className="w-dropdown-link">
                          <strong>CMS Form L564</strong>
                        </a>
                      </nav>
                    </div>
                    <a
                      id="w-node-_2aebbf80-3c8e-fd23-5a35-1339aa59d8df-09b97209"
                      href="https://integrity7.destinationrx.com/PC/2021/Account/Login"
                      target="_blank"
                      className="_w-100 w-inline-block"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
            <div
              data-w-id="268923f8-8ae1-8580-7b74-dafb27ecdf70"
              style={{ width: "0px" }}
              className="bg home-2"
            ></div>
          </div>
          <div id="About-me" className="section-2 home-1">
            <div className="container-1360">
              <div className="section-wrapper">
                <img
                  src="images/rob.jpeg"
                  loading="lazy"
                  width="542"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  data-w-id="40817ce3-56c7-3d62-4eb0-a9c4d0209182"
                  alt=""
                  className="image home-1"
                />
                <div
                  data-w-id="40817ce3-56c7-3d62-4eb0-a9c4d0209183"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="split-content about-right"
                >
                  <div>
                    <div className="step">About Rob Larsen</div>
                    <div className="accent-line home-line"></div>
                  </div>
                  <h2 className="title home-1">
                    <strong>
                      My name is rob &amp; i make medicare simple.
                      <br />
                    </strong>
                  </h2>
                  <p className="paragraph home-1">
                    I&#x27;m a Medicare insurance agent and have been in the
                    insurance industry for over 27 years. I understands that not
                    all people are experts when it comes to Medicare, so I
                    strive to make things simple. I believe that by educating my
                    clients on their benefits they can make better decisions
                    about their healthcare needs.
                    <br />I try hard to listen and I care about what my clients
                    need and want from me, which is why I have been in business
                    for so long!
                    <br />
                  </p>
                  <a
                    href="#contact"
                    className="button-primary-2 w-inline-block"
                  >
                    <div className="button-hover"></div>
                    <div className="button-flex-2">
                      <div className="button-text primary-button">
                        Call Me Now: (801)-692-0174
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div
              data-w-id="40817ce3-56c7-3d62-4eb0-a9c4d020919f"
              style={{ width: "0px" }}
              className="bg home-1"
            ></div>
          </div>
          <div id="contact" className="section-2 footer-form hide">
            <div className="container-1360">
              <div className="section-wrapper">
                <div
                  data-w-id="268923f8-8ae1-8580-7b74-dafb27ece002"
                  style={{
                    WebkitTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MozTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    MsTransform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    transform:
                      "translate3d(0, 0, 0) scale3d(0.8, 0.8, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
                    // opacity: "0"
                  }}
                  className="split-content contact-text-block"
                >
                  <div className="accent-line footer-form"></div>
                  <h2 className="title review-title">
                    Learn About How I Make Medicare Simple For You.
                  </h2>
                  <p className="paragraph">
                    I help you know about Medical supplement insurance and part
                    D prescription drug plans.
                  </p>
                </div>
                <div className="split-content right-form">
                  <div className="contact-wrapper home-page">
                    <div className="contact-form-wrapper">
                      <div className="contact-page-form-block w-form">
                        <form
                          id="email-form-2"
                          name="email-form-2"
                          data-name="Email Form 2"
                          method="get"
                          className="contact-page-form"
                        >
                          <input
                            type="text"
                            className="input w-node-_268923f8-8ae1-8580-7b74-dafb27ece00d-09b97209 w-input"
                            maxlength="256"
                            name="Name-9"
                            data-name="Name 9"
                            placeholder="What&#x27;s your name?"
                            id="Name-9"
                          />
                          <input
                            type="email"
                            className="input w-node-_268923f8-8ae1-8580-7b74-dafb27ece00e-09b97209 w-input"
                            maxlength="256"
                            name="Email-6"
                            data-name="Email 6"
                            placeholder="What&#x27;s your email?"
                            id="Email-6"
                            required=""
                          />
                          <input
                            type="tel"
                            className="input w-node-_268923f8-8ae1-8580-7b74-dafb27ece00f-09b97209 w-input"
                            maxlength="256"
                            name="Address"
                            data-name="Address"
                            placeholder="What&#x27;s your phone number?"
                            id="Address"
                            required=""
                          />
                          <input
                            type="text"
                            className="input w-node-_268923f8-8ae1-8580-7b74-dafb27ece010-09b97209 w-input"
                            maxlength="256"
                            name="ZipCode"
                            data-name="ZipCode"
                            placeholder="What&#x27;s your zipcode?"
                            id="ZipCode"
                          />
                          <textarea
                            placeholder="Write Your Message..."
                            maxlength="5000"
                            id="field-9"
                            name="field-9"
                            data-name="field"
                            className="text-area w-node-_268923f8-8ae1-8580-7b74-dafb27ece011-09b97209 w-input"
                          ></textarea>
                          <input
                            type="submit"
                            value="Submit"
                            data-wait="Please wait..."
                            id="w-node-_268923f8-8ae1-8580-7b74-dafb27ece012-09b97209"
                            className="button-primary-2 w-button"
                          />
                        </form>
                        <div className="w-form-done">
                          <div>
                            Thank you! Your submission has been received!
                          </div>
                        </div>
                        <div className="w-form-fail">
                          <div>
                            Oops! Something went wrong while submitting the
                            form.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <footer id="footer" className="footer wf-section">
            <div className="container-1360">
              <div className="footer-top">
                <div className="contact-wrap">
                  <div
                    id="w-node-_11413d5d-d7ac-5cc7-5d6d-7dbfb1ffbcc6-b1ffbcc2"
                    className="col"
                  >
                    <div className="flex">
                      <img
                        src="images/3.png"
                        loading="lazy"
                        alt=""
                        className="logo-2 footer-logo"
                      />
                      <div className="contact-heading">My Location</div>
                    </div>
                    <div className="accent-line footer-accent"></div>
                    <a href="#" className="contact-number address">
                      <br />
                      Salt Lake City, Utah
                    </a>
                  </div>
                  <div className="col">
                    <div className="flex">
                      <img
                        src="images/2.png"
                        loading="lazy"
                        alt=""
                        className="logo-2 footer-logo email-icon"
                      />
                      <div className="contact-heading email-text">EMAIL Me</div>
                    </div>
                    <div className="accent-line footer-accent"></div>
                    <a
                      href="mailto:robdoesmedicare@gmail.com"
                      className="contact-number"
                    >
                      Robdoesmedicare@gmail.com
                    </a>
                  </div>
                  <div className="col">
                    <div className="flex">
                      <img
                        src="images/4.png"
                        loading="lazy"
                        alt=""
                        className="logo-2 footer-logo"
                      />
                      <div className="contact-heading">Call Me</div>
                    </div>
                    <div className="accent-line footer-accent"></div>
                    <a href="tel:(801)-692-0174" className="contact-number">
                      (801)-692-0174
                    </a>
                  </div>
                  <div
                    id="w-node-_11413d5d-d7ac-5cc7-5d6d-7dbfb1ffbce0-b1ffbcc2"
                    className="col right button-col"
                  >
                    <a
                      href="#"
                      className="button-primary-2 small w-inline-block"
                    >
                      <div className="button-hover"></div>
                      <div className="button-flex-2">
                        <div className="button-text primary-button">
                          Get in Touch
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div className="divider-2 footer-line"></div>
              <div className="footer-blocks">
                <div
                  id="w-node-_11413d5d-d7ac-5cc7-5d6d-7dbfb1ffbce8-b1ffbcc2"
                  className="links-block main"
                >
                  <a href="#" className="w-nav-brand">
                    <h5 className="footer-logo">RobDoesMedicare.com</h5>
                  </a>
                  <a href="#" className="footer-link-block w-inline-block"></a>
                  <div className="small-print">
                    Copyright © Rob Larsen Insurance |{" "}
                    <a href="https://webflow.com/" target="_blank"></a>
                  </div>
                  <a
                    href="https://www.joewebbdesigns.com/"
                    className="no-line w-inline-block"
                  >
                    <div className="text-block">
                      Designed by <span className="primary">Webb Designs</span>
                    </div>
                  </a>
                </div>
                <div
                  id="w-node-_11413d5d-d7ac-5cc7-5d6d-7dbfb1ffbcf1-b1ffbcc2"
                  className="links-block hide"
                >
                  <h3 className="title thin">Medicare Plans</h3>
                  <div className="divider-2 footer-links-block"></div>
                  <div className="footer-grid">
                    <a href="#" className="footer-link-2">
                      Plan 1
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 5
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 2
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 6
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 3
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 7
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 4
                    </a>
                  </div>
                </div>
                <div
                  id="w-node-_11413d5d-d7ac-5cc7-5d6d-7dbfb1ffbd04-b1ffbcc2"
                  className="links-block hide"
                >
                  <h3 className="title thin">MSA Plans</h3>
                  <div className="divider-2 footer-links-block"></div>
                  <div className="footer-grid">
                    <a href="#" className="footer-link-2">
                      Plan 8
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 12
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 9
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 13
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 10
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 14
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 11
                    </a>
                    <a href="#" className="footer-link-2">
                      Plan 15
                    </a>
                  </div>
                </div>
                <div
                  id="w-node-_11413d5d-d7ac-5cc7-5d6d-7dbfb1ffbd19-b1ffbcc2"
                  className="links-block hide"
                >
                  <h3 className="title thin">About Me</h3>
                  <div className="divider-2 footer-links-block"></div>
                  <a href="#" className="footer-link-2">
                    About Me
                  </a>
                  <a href="#" className="footer-link-2">
                    News &amp; Articles
                  </a>
                  <a href="#" className="footer-link-2">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
