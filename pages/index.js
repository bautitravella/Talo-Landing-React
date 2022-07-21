import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import SpeakerCard from '../components/speaker-card'
import NumbersCard from '../components/numbers-card'
import EventCard from '../components/event-card'
import Slide from '../components/slide'
import Footer from '../components/footer'

const Home = (props) => {
  return (
    <>
      <div className="home-container">
        <Head>
          <title>Talo Payments</title>
          <meta
            name="description"
            content="Ethereum Cripto Payments Crypto API Pagos Taloco"
          />
          <meta property="og:title" content="Talo Payments" />
          <meta
            property="og:description"
            content="Ethereum Cripto Payments Crypto API Pagos Taloco"
          />
          <meta
            property="og:image"
            content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/20bd6bf8-38ca-4fa3-9bcf-fedcea388b81/88f87db1-0861-40db-975c-c2a8ab826cd5?org_if_sml=1"
          />
        </Head>
        <Navigation
          image_src1="/playground_assets/logosnew-21.svg"
          rootClassName="navigation-root-class-name"
        ></Navigation>
        <main className="home-main">
          <div className="home-hero section-container">
            <div className="home-max-width max-content-container">
              <div className="home-content-container">
                <span className="home-text">
                  <span>¿Tenes un negocio?</span>
                </span>
                <span className="home-text02">
                  Acepta pagos en criptomonedas.
                </span>
                <img
                  alt="image"
                  src="/playground_assets/asset%201.svg"
                  className="home-image"
                />
                <div className="home-btns-container">
                  <input
                    type="text"
                    placeholder="Tu correo electronico"
                    className="home-textinput input"
                  />
                  <div className="home-container1">
                    <button
                      type="button"
                      className="home-primary button-primary button-lg button"
                    >
                      <span className="home-text03">
                        <span>suscribite</span>
                        <span className="home-text05"></span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-blue-background"></div>
          </div>
          <div className="home-speakers section-container">
            <div className="home-max-width1 max-content-container">
              <div className="home-heading-container">
                <span className="home-text06">
                  16 speakers from 7 countries and 3 continents
                </span>
                <h1 className="home-text07 heading2">
                  <span>meet our speakers</span>
                  <span className="home-text09"></span>
                </h1>
              </div>
              <div className="home-speakers-container">
                <SpeakerCard></SpeakerCard>
                <SpeakerCard
                  role="digital marketing associate @ WPP"
                  lastName="Simpson"
                  firstName="Mellisa"
                  image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="VP OF Marketing @ BUZZFEED"
                  lastName="tevlenko"
                  firstName="alina"
                  image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="HEAD OF DIGITAL @ HUBSPOT"
                  lastName="iprovich"
                  firstName="gregor"
                  image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="marketing officer @ salesforce"
                  lastName="daris"
                  firstName="damian"
                  image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="social media manager @ vodafone"
                  lastName="warren"
                  firstName="matt"
                  image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="creative director @ BBDO"
                  lastName="moore"
                  firstName="kathie"
                  image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
                <SpeakerCard
                  role="CMO @ youtube Europe"
                  lastName="chan"
                  firstName="erick"
                  image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                ></SpeakerCard>
              </div>
            </div>
          </div>
          <div className="home-numbers-banner section-container">
            <div className="home-container2 max-content-container">
              <div className="home-heading-container1">
                <span className="home-text10">
                  Our 12-year conference history in sharing digital marketing
                  insights
                </span>
                <h1 className="home-text11 heading2">
                  <span>market1 SUMMIT IN NUMBERS</span>
                </h1>
              </div>
              <div className="home-numbers-container">
                <NumbersCard></NumbersCard>
                <NumbersCard
                  text="years"
                  number="12"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                ></NumbersCard>
                <NumbersCard
                  text="total events"
                  number="64"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                ></NumbersCard>
                <NumbersCard
                  text="companies"
                  number="15,070"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                ></NumbersCard>
                <NumbersCard
                  text="cities"
                  number="14"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                ></NumbersCard>
                <NumbersCard
                  text="speakers"
                  number="1,071"
                  image_src="https://play.teleporthq.io/static/svg/placeholders/no-image.svg"
                ></NumbersCard>
              </div>
            </div>
          </div>
          <div className="home-location">
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1564347288827-3e4293543e07?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxiZXJsaW58ZW58MHx8fHwxNjQzNzEzNjQ5&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image1"
            />
            <div className="home-content-container1 section-container">
              <div className="home-container3">
                <span className="home-text13">berlin, germany</span>
                <span className="home-text14">7-8 MARCH 2023</span>
                <div className="home-container4">
                  <span className="home-text15">
                    <span>— mob-x</span>
                  </span>
                  <span className="home-text17">
                    <span>conference</span>
                  </span>
                  <span className="home-text19">
                    <span>center</span>
                  </span>
                </div>
                <div className="home-container5">
                  <span className="home-text21">beautiful, vibrant berlin</span>
                  <span className="home-text22">
                    <span>
                      Amet minim mollit non deserunt ullamco est sit aliqua
                      dolor do amet sint. Velit officia consequat duis enim
                      velit mollit. Exercitation veniam consequat sunt nostrud
                      amet.
                    </span>
                    <br></br>
                    <span></span>
                    <br></br>
                    <span>
                      Lorem Ipsum, Velit officia consequat duis enim velit
                      mollit. Exercitation veniam consequat sunt nostrud amet.
                    </span>
                  </span>
                  <div className="home-btns-container1">
                    <button className="button-secondary button button-md">
                      register
                    </button>
                    <button className="home-learn-more button button-outline button-md-border">
                      learn more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="home-agenda section-container">
            <div className="home-max-width2 max-content-container">
              <div className="home-heading-container2">
                <h1 className="home-text26 heading2">
                  <span>key events agenda</span>
                </h1>
                <span className="home-text28">
                  more announcements are coming soon
                </span>
              </div>
              <div className="home-events-container">
                <div className="home-column">
                  <div className="home-column-header">
                    <span className="home-text29">
                      <span>tuesday - 7.03</span>
                    </span>
                    <div className="home-line"></div>
                  </div>
                  <EventCard></EventCard>
                  <EventCard
                    title="tik tok or what?"
                    image_src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="sales + marketing duo"
                    image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHBlb3BsZXxlbnwwfHx8fDE2NDM3MDU1MTE&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="best practices for more\ndata-driven results"
                    image_src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI5fHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                </div>
                <div className="home-column1">
                  <div className="home-column-header1">
                    <span className="home-text31">
                      <span>wednesday - 8.03</span>
                    </span>
                    <div className="home-line1"></div>
                  </div>
                  <EventCard
                    title="digital marketing strategies"
                    image_src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxwZW9wbGV8ZW58MHx8fHwxNjQzNzA1NTEx&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="a new era of social media"
                    image_src="https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0N3x8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="growing a remote team"
                    image_src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2OHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY5MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                  <EventCard
                    title="beyond the metaverse"
                    image_src="https://images.unsplash.com/photo-1558222218-b7b54eede3f3?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwNHx8cGVvcGxlfGVufDB8fHx8MTY0MzcwODY4MQ&amp;ixlib=rb-1.2.1&amp;h=300"
                  ></EventCard>
                </div>
              </div>
            </div>
          </div>
          <div className="home-workshops">
            <div className="home-content-container2">
              <div className="home-container6">
                <h1 className="home-text33 heading2">
                  <span>
                    register for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span className="home-text36">super insightful</span>
                  <span>
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>
                    workshops for
                    <span
                      dangerouslySetInnerHTML={{
                        __html: ' ',
                      }}
                    />
                  </span>
                  <br></br>
                  <span>your team</span>
                </h1>
                <span className="home-text42">
                  get early discounts and group discounts
                </span>
                <span className="home-text43">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </span>
                <button className="button button-md button-outline">
                  learn more
                </button>
              </div>
            </div>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxidXNpbmVzc3xlbnwwfHx8fDE2NDM3MzQ3MjI&amp;ixlib=rb-1.2.1&amp;w=1500"
              className="home-image2"
            />
          </div>
          <div className="home-previous-events section-container">
            <div className="home-max-width3 max-content-container">
              <div className="home-heading-container3">
                <h1 className="home-text44 heading2">
                  <span>previous events</span>
                </h1>
                <span className="home-text46">
                  Take a tour of our previous conferences
                </span>
              </div>
            </div>
            <div data-type="slider" className="home-slider">
              <Slide rootClassName="slide-root-class-name4"></Slide>
              <Slide
                heading="Slide #2"
                rootClassName="slide-root-class-name1"
              ></Slide>
              <Slide
                heading="Slide #3"
                rootClassName="slide-root-class-name"
              ></Slide>
              <Slide
                heading="Slide #4"
                rootClassName="slide-root-class-name3"
              ></Slide>
              <Slide
                heading="Slide #5"
                rootClassName="slide-root-class-name2"
              ></Slide>
            </div>
            <div className="home-slider-controls">
              <div data-action="previousSlide" className="home-go-left">
                <svg viewBox="0 0 1024 1024" className="home-icon2">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <div data-action="nextSlide" className="home-go-right">
                <svg viewBox="0 0 1024 1024" className="home-icon4">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
            </div>
          </div>
        </main>
        <Footer rootClassName="footer-root-class-name"></Footer>
      </div>
      <style jsx>
        {`
          .home-container {
            width: 100%;
            display: flex;
            overflow: hidden;
            position: relative;
            min-height: 100vh;
            overflow-x: hidden;
            align-items: center;
            flex-direction: column;
            background-color: #f8f8f8;
          }
          .home-main {
            width: 100%;
            height: 1008px;
            display: flex;
            overflow: hidden;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-hero {
            height: 100%;
            overflow: hidden;
            position: relative;
            padding-top: 128px;
          }
          .home-max-width {
            width: 100%;
            z-index: 1;
            max-width: 100%;
            align-self: center;
            align-items: stretch;
            justify-content: flex-start;
          }
          .home-content-container {
            flex: 1;
            width: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            min-width: auto;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: center;
          }
          .home-text {
            font-size: 24px;
            font-style: normal;
            font-family: Barlow;
            font-weight: 400;
            margin-bottom: var(--dl-space-space-halfunit);
            text-transform: none;
          }
          .home-text02 {
            color: #000000;
            font-size: 56px;
            max-width: 500px;
            font-style: normal;
            margin-top: var(--dl-space-space-unit);
            font-family: Barlow;
            font-weight: 700;
            line-height: 1;
            margin-bottom: 60px;
            text-transform: none;
          }
          .home-image {
            top: 230px;
            left: 0px;
            width: 220px;
            bottom: 0px;
            height: 158px;
            margin: auto;
            position: absolute;
            align-self: flex-start;
            object-fit: cover;
          }
          .home-btns-container {
            flex: 0 0 auto;
            display: flex;
            position: relative;
            align-items: flex-start;
          }
          .home-textinput {
            width: var(--dl-size-size-xxlarge);
            height: 100%;
            border-width: 0px;
            border-radius: 0px;
          }
          .home-container1 {
            flex: 0 0 auto;
            width: auto;
            display: flex;
            align-self: center;
            align-items: flex-start;
          }
          .home-primary {
            flex: Auto;
            width: auto;
            height: auto;
            display: flex;
            position: relative;
            align-self: center;
            margin-right: 0px;
            flex-direction: row;
            background-color: #252626;
          }
          .home-text03 {
            align-self: center;
            margin-left: var(--dl-space-space-halfunit);
            margin-right: var(--dl-space-space-halfunit);
          }
          .home-text05 {
            background-color: #252626;
          }
          .home-icon {
            fill: #ffffff;
            color: white;
            width: 24px;
            height: 24px;
            align-self: center;
          }
          .home-blue-background {
            top: 0px;
            flex: Auto;
            right: 0px;
            width: 47%;
            height: 100%;
            position: absolute;
            min-height: 100%;
            background-size: cover;
            background-image: url('/playground_assets/wallpaper.svg');
            background-repeat: no-repeat;
          }
          .home-speakers {
            display: none;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
          }
          .home-max-width1 {
            flex-direction: column;
          }
          .home-heading-container {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text06 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text07 {
            text-align: center;
          }
          .home-text09 {
            text-align: center;
          }
          .home-speakers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          .home-numbers-banner {
            display: none;
            padding-top: var(--dl-space-space-fiveunits);
            flex-direction: column;
            background-size: cover;
            background-image: url('https://play.teleporthq.io/static/svg/placeholders/no-image.svg');
          }
          .home-container2 {
            flex-direction: column;
          }
          .home-heading-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text10 {
            color: var(--dl-color-scheme-white);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-text11 {
            color: var(--dl-color-scheme-white);
            text-align: center;
          }
          .home-numbers-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
          }
          .home-location {
            width: 100%;
            display: none;
            align-items: stretch;
            flex-direction: row;
          }
          .home-image1 {
            width: 55%;
            max-height: 950px;
            object-fit: cover;
          }
          .home-content-container1 {
            flex: 1;
            display: flex;
            align-items: stretch;
            padding-top: 100px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: row;
            background-color: var(--dl-color-scheme-black);
          }
          .home-container3 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .home-text13 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -100px;
            padding-top: 4px;
            padding-left: 18px;
            margin-bottom: 6px;
            padding-right: 11px;
            padding-bottom: 6px;
            background-color: var(--dl-color-scheme-lightblue);
          }
          .home-text14 {
            color: var(--dl-color-scheme-white);
            font-size: 56px;
            font-style: normal;
            font-weight: 300;
            line-height: 1.1;
          }
          .home-container4 {
            display: flex;
            align-items: flex-end;
            margin-bottom: var(--dl-space-space-twounits);
            flex-direction: column;
          }
          .home-text15 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-text17 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: -36px;
          }
          .home-text19 {
            color: var(--dl-color-scheme-pink);
            font-size: 56px;
            font-style: normal;
            font-weight: 600;
            line-height: 1.1;
            margin-left: var(--dl-space-space-fiveunits);
          }
          .home-container5 {
            flex: 1;
            width: 100%;
            display: flex;
            max-width: 350px;
            align-items: flex-start;
            margin-left: 124px;
            flex-direction: column;
          }
          .home-text21 {
            color: var(--dl-color-scheme-white);
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text22 {
            color: var(--dl-color-scheme-white);
            margin-bottom: var(--dl-space-space-twounits);
            text-transform: none;
          }
          .home-btns-container1 {
            flex: 0 0 auto;
            display: flex;
            align-items: flex-start;
          }
          .home-learn-more {
            color: var(--dl-color-scheme-white);
            transition: 0.3s;
            border-color: var(--dl-color-scheme-white);
          }
          .home-learn-more:hover {
            border-color: var(--dl-color-scheme-pink);
          }
          .home-agenda {
            display: none;
            flex-direction: column;
            padding-bottom: 100px;
          }
          .home-max-width2 {
            flex-direction: column;
          }
          .home-heading-container2 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text26 {
            text-align: center;
          }
          .home-text28 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-events-container {
            width: 100%;
            display: grid;
            grid-row-gap: var(--dl-space-space-fourunits);
            grid-column-gap: 30px;
            grid-template-columns: 1fr 1fr;
          }
          .home-column {
            width: 100%;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 1fr;
          }
          .home-column-header {
            width: 100%;
            display: flex;
            align-items: center;
          }
          .home-text29 {
            color: var(--dl-color-scheme-darkgray);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.1;
            margin-right: 21px;
          }
          .home-line {
            flex: 1;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(144, 149, 167, 0.2);
          }
          .home-column1 {
            width: 100%;
            display: grid;
            grid-gap: 30px;
            grid-template-columns: 1fr;
          }
          .home-column-header1 {
            width: 100%;
            display: flex;
            align-items: center;
          }
          .home-text31 {
            color: var(--dl-color-scheme-darkgray);
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: 1.1;
            margin-right: 21px;
          }
          .home-line1 {
            flex: 1;
            height: 1px;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            background-color: rgba(144, 149, 167, 0.2);
          }
          .home-workshops {
            flex: 1;
            width: 100%;
            display: none;
            flex-direction: row;
          }
          .home-content-container2 {
            flex: 1;
            display: flex;
            align-items: flex-end;
            flex-direction: column;
            justify-content: center;
            background-color: rgba(144, 149, 167, 0.08);
          }
          .home-container6 {
            flex: 0 0 auto;
            display: flex;
            max-width: 366px;
            align-items: flex-start;
            margin-right: 107px;
            flex-direction: column;
          }
          .home-text33 {
            margin-bottom: 42px;
          }
          .home-text36 {
            color: var(--dl-color-scheme-pink);
          }
          .home-text42 {
            font-size: 18px;
            font-style: normal;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .home-text43 {
            margin-bottom: var(--dl-space-space-threeunits);
            text-transform: none;
          }
          .home-image2 {
            width: 55%;
            min-height: 880px;
            object-fit: cover;
            object-position: bottom;
          }
          .home-previous-events {
            display: none;
            position: relative;
            flex-direction: column;
            padding-bottom: 150px;
          }
          .home-max-width3 {
            flex-direction: column;
          }
          .home-heading-container3 {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-fourunits);
            flex-direction: column;
          }
          .home-text44 {
            text-align: center;
          }
          .home-text46 {
            color: var(--dl-color-scheme-darkgray);
            font-style: normal;
            text-align: center;
            font-weight: 500;
          }
          .home-slider {
            flex: 0 0 auto;
            width: 100%;
            height: 420px;
            display: flex;
            position: relative;
            transition: 0.5s;
            align-items: stretch;
            flex-direction: row;
            justify-content: center;
          }
          .home-slider-controls {
            top: calc(50% + 24px);
            width: calc(60% + 48px);
            height: 48px;
            display: flex;
            position: absolute;
            align-self: center;
            justify-content: space-between;
          }
          .home-go-left {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-go-left:hover {
            border-color: var(--dl-color-scheme-lightblue);
            background-color: var(--dl-color-scheme-white80);
          }
          .home-icon2 {
            width: 24px;
            height: 24px;
            transform: rotate(180deg);
          }
          .home-go-right {
            flex: 0 0 auto;
            width: 48px;
            cursor: pointer;
            height: 48px;
            display: flex;
            z-index: 1;
            transition: 0.3s;
            align-items: center;
            border-color: rgba(144, 149, 167, 0.24);
            border-width: 1px;
            border-radius: var(--dl-radius-radius-round);
            flex-direction: column;
            justify-content: center;
            background-color: var(--dl-color-scheme-white);
          }
          .home-go-right:hover {
            border-color: var(--dl-color-scheme-lightblue);
            background-color: var(--dl-color-scheme-white80);
          }
          .home-icon4 {
            width: 24px;
            height: 24px;
          }
          @media (max-width: 1200px) {
            .home-blue-background {
              background-size: cover;
            }
          }
          @media (max-width: 1140px) {
            .home-max-width {
              flex-direction: column;
            }
            .home-content-container {
              max-width: 100%;
              margin-bottom: 42px;
              padding-right: var(--dl-space-space-fiveunits);
            }
            .home-btns-container {
              width: 100%;
            }
            .home-textinput {
              width: 50%;
            }
            .home-blue-background {
              top: auto;
              right: 0px;
              width: 100%;
              bottom: 0px;
              height: 100%;
              position: static;
              min-height: 100%;
              background-size: cover;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr 1fr;
            }
            .home-location {
              flex-direction: column;
            }
            .home-image1 {
              width: 100%;
            }
            .home-content-container1 {
              padding-top: 0px;
              padding-left: var(--dl-space-space-threeunits);
            }
            .home-container3 {
              margin-top: -100px;
              align-items: center;
            }
            .home-container5 {
              max-width: 100%;
              margin-left: 0px;
            }
            .home-events-container {
              grid-template-columns: 1fr;
            }
            .home-container6 {
              margin-right: var(--dl-space-space-unit);
            }
            .home-image2 {
              width: 50%;
              object-position: left;
            }
            .home-slider-controls {
              width: calc(75% + 48px);
            }
          }
          @media (max-width: 767px) {
            .home-blue-background {
              left: 0px;
              right: 0px;
              width: 100%;
              height: var(--dl-size-size-large);
              margin: auto;
            }
            .home-speakers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-numbers-container {
              grid-template-columns: 1fr 1fr;
            }
            .home-image1 {
              max-height: 100%;
            }
            .home-content-container1 {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text13 {
              margin-left: -24px;
            }
            .home-btns-container1 {
              width: 100%;
              align-items: stretch;
              flex-direction: column;
            }
            .home-workshops {
              flex-direction: column-reverse;
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container6 {
              max-width: 100%;
              padding-top: var(--dl-space-space-twounits);
              margin-right: 0px;
              padding-left: var(--dl-space-space-oneandhalfunits);
              padding-right: var(--dl-space-space-oneandhalfunits);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-image2 {
              width: 100%;
            }
            .home-previous-events {
              padding-bottom: var(--dl-space-space-sixunits);
            }
            .home-slider-controls {
              width: calc(80% + 48px);
            }
          }
          @media (max-width: 479px) {
            .home-content-container {
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
            }
            .home-text {
              font-size: 19px;
            }
            .home-text02 {
              width: 100%;
              font-size: 30px;
              max-width: 100%;
            }
            .home-btns-container {
              width: 100%;
              height: auto;
              align-self: flex-start;
            }
            .home-textinput {
              width: 50%;
            }
            .home-primary {
              width: 20%;
              height: var(--dl-size-size-small);
            }
            .home-blue-background {
              width: 100%;
              height: 100%;
            }
            .home-speakers-container {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
