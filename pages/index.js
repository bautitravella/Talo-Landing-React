import React from 'react'
import Head from 'next/head'

import Navigation from '../components/navigation'
import TestimonialCard1 from '../components/testimonial-card1'

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
        <div className="home-hero section-container hero-container">
          <div className="home-max-width max-width">
            <div className="home-content-container">
              <span className="home-text">
                <span>¿Tenes un negocio?</span>
              </span>
              <span className="home-text02">
                Acepta pagos en criptomonedas.
              </span>
              <div className="home-container1">
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
                  <div className="home-container2">
                    <a
                      href="https://talo.com.ar/newsletter"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="home-primary button-primary button-lg button"
                    >
                      <span className="home-text03">
                        <span>suscribite</span>
                        <span className="home-text05"></span>
                      </span>
                      <svg viewBox="0 0 1024 1024" className="home-icon">
                        <path d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <img
              alt="image"
              src="/playground_assets/wallpaper.svg"
              className="home-image1"
            />
            <div className="home-blue-background"></div>
          </div>
        </div>
        <div className="home-section section-container">
          <div className="home-max-width1 max-width">
            <div className="home-testimonial">
              <div className="home-team">
                <h1 className="home-text06">
                  <span>Quienes somos</span>
                  <br></br>
                </h1>
                <span className="home-text09">
                  <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    non volutpat turpis. Mauris luctus rutrum mi ut rhoncus.
                    Integer in dignissim tortor.
                  </span>
                </span>
                <div className="home-container3">
                  <TestimonialCard1
                    name="Camila Borinsky"
                    role="CTO"
                    picture_src="https://images.unsplash.com/photo-1557053910-d9eadeed1c58?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fHdvbWFuJTIwcG9ydHJhaXR8ZW58MHx8fHwxNjI2NDUxOTgy&amp;ixlib=rb-1.2.1&amp;h=1200"
                    rootClassName="rootClassName2"
                  ></TestimonialCard1>
                  <TestimonialCard1
                    name="Bautista Travella"
                    role="CMO"
                    quote="Estudiante de diseño industrial en la universidad de palermo, con experiencia como diseñador de ui/ux"
                    rootClassName="rootClassName"
                  ></TestimonialCard1>
                  <TestimonialCard1
                    name="AGUSTIN Tormakh"
                    role="CEO"
                    picture_src="/playground_assets/agus_profile.png"
                    rootClassName="rootClassName1"
                  ></TestimonialCard1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home-section1 section-container">
          <div className="home-max-width2 max-width">
            <div className="home-f-a-q">
              <div className="home-questions">
                <span className="home-text11">FAQ</span>
                <h1 className="home-text12">Preguntas frecuentes</h1>
                <div data-role="Accordion" className="home-question question">
                  <div data-type="accordion-header" className="home-trigger">
                    <span>¿Qué es Talo?</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div
                    data-type="accordion-content"
                    className="question-content"
                  >
                    <span className="home-text14">Text</span>
                  </div>
                </div>
                <div className="home-question1 question">
                  <div data-type="accordion-header" className="home-trigger1">
                    <span>¿Cómo integrar Talo a mi comercio?</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon04">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div className="question-content">
                    <span className="home-text16">Text</span>
                  </div>
                </div>
                <div className="home-question2 question">
                  <div data-type="accordion-header" className="home-trigger2">
                    <span>¿Qué información necesito para cobrar en Talo?</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon06">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div className="question-content">
                    <span className="home-text18">Text</span>
                  </div>
                </div>
                <div className="home-question3 question">
                  <div data-type="accordion-header" className="home-trigger3">
                    <span>¿Que monedas digitales se pueden recibir?</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon08">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div className="question-content">
                    <span className="home-text20">Text</span>
                  </div>
                </div>
                <div className="home-question4 question">
                  <div data-type="accordion-header" className="home-trigger4">
                    <span>¿Como sacar mis fondos de Talo?</span>
                    <svg viewBox="0 0 1024 1024" className="home-icon10">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div className="question-content">
                    <span className="home-text22">Text</span>
                  </div>
                </div>
                <div className="home-question5 question">
                  <div data-type="accordion-header" className="home-trigger5">
                    <span>
                      ¿Necesito estar bancarizado para tener una cuenta en talo
                      ?
                    </span>
                    <svg viewBox="0 0 1024 1024" className="home-icon12">
                      <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                    </svg>
                  </div>
                  <div className="question-content">
                    <span className="home-text24">Text</span>
                  </div>
                </div>
              </div>
              <img
                alt="image"
                src="/playground_assets/asset%2021.svg"
                className="home-image2"
              />
            </div>
          </div>
        </div>
        <footer className="home-footer">
          <img
            alt="logo"
            src="/playground_assets/logosnew-21.svg"
            className="home-image3"
          />
          <span className="home-text25">© 2021 talo, derechos reservados.</span>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon14">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon16">
              <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
            </svg>
          </div>
        </footer>
        <div className="home-container4"></div>
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
          .home-hero {
            padding-top: var(--dl-space-space-sixunits);
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-max-width {
            width: 100%;
            height: 808px;
            z-index: 1;
            position: relative;
            max-width: 100%;
            align-self: center;
            align-items: stretch;
            justify-content: flex-start;
          }
          .home-content-container {
            flex: 1;
            width: 45%;
            height: auto;
            display: flex;
            position: relative;
            max-width: 100%;
            min-width: auto;
            align-items: flex-start;
            padding-top: var(--dl-space-space-fourunits);
            padding-left: var(--dl-space-space-fiveunits);
            flex-direction: column;
            justify-content: flex-start;
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
          .home-container1 {
            flex: 0 0 auto;
            width: 100%;
            display: flex;
            margin-top: var(--dl-space-space-threeunits);
            align-items: flex-start;
          }
          .home-image {
            top: 255px;
            left: 9px;
            width: 220px;
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
            align-items: stretch;
          }
          .home-textinput {
            width: 290px;
            height: 62px;
            border-width: 0px;
            border-radius: 0px;
          }
          .home-container2 {
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
            text-decoration: none;
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
          .home-image1 {
            top: top;
            flex: auto;
            left: lef;
            right: 0px;
            width: 47%;
            bottom: 0px;
            height: 100%;
            position: absolute;
            min-height: 100%;
            object-fit: cover;
          }
          .home-blue-background {
            top: top;
            flex: Auto;
            right: 0px;
            width: 47%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            bottom: 0px;
            height: 100%;
            display: none;
            position: absolute;
            min-height: 100%;
            background-size: cover;
            background-image: url('/playground_assets/wallpaper.svg');
            background-repeat: no-repeat;
          }
          .home-section {
            width: 100%;
            height: auto;
            display: flex;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-max-width1 {
            width: 90%;
            height: auto;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-testimonial {
            width: 100%;
            display: flex;
            align-self: center;
            justify-content: space-between;
          }
          .home-team {
            width: 100%;
            display: flex;
            max-width: 100%;
            align-items: flex-start;
            padding-top: var(--dl-space-space-threeunits);
            padding-left: 0px;
            padding-right: var(--dl-space-space-threeunits);
            flex-direction: column;
            padding-bottom: var(--dl-space-space-threeunits);
            justify-content: center;
          }
          .home-text06 {
            color: #000000;
          }
          .home-text09 {
            color: #000000;
            font-size: 0.75rem;
            max-width: 600px;
            margin-top: var(--dl-space-space-unit);
            text-align: left;
            margin-bottom: var(--dl-space-space-fourunits);
          }
          .home-container3 {
            width: 100%;
            display: grid;
            grid-gap: var(--dl-space-space-twounits);
            grid-template-columns: 1fr 1fr 1fr;
          }
          .home-section1 {
            width: 100%;
            height: auto;
            display: flex;
            padding-top: 0px;
            flex-direction: column;
            padding-bottom: var(--dl-space-space-sixunits);
          }
          .home-max-width2 {
            width: 90%;
            height: auto;
            max-width: 100%;
            align-items: center;
            flex-direction: column;
            justify-content: center;
          }
          .home-f-a-q {
            flex: 0 0 auto;
            width: 100%;
            height: auto;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-sixunits);
            justify-content: space-between;
          }
          .home-questions {
            flex: 0 0 auto;
            width: 50%;
            height: auto;
            display: flex;
            align-items: flex-start;
            flex-direction: column;
            justify-content: flex-start;
          }
          .home-text11 {
            margin-bottom: var(--dl-space-space-unit);
          }
          .home-text12 {
            margin-bottom: var(--dl-space-space-twounits);
          }
          .home-question {
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            border-color: rgba(44, 39, 33, 0);
            border-radius: 7px;
          }
          .home-trigger {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-icon02 {
            width: 24px;
            height: 24px;
          }
          .home-text14 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-question1 {
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            border-color: rgba(44, 39, 33, 0);
            border-radius: 7px;
          }
          .home-trigger1 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-icon04 {
            width: 24px;
            height: 24px;
          }
          .home-text16 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-question2 {
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            border-color: rgba(44, 39, 33, 0);
            border-radius: 7px;
          }
          .home-trigger2 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-icon06 {
            width: 24px;
            height: 24px;
          }
          .home-text18 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-question3 {
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            border-color: rgba(44, 39, 33, 0);
            border-radius: 7px;
          }
          .home-trigger3 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-icon08 {
            width: 24px;
            height: 24px;
          }
          .home-text20 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-question4 {
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            border-color: rgba(44, 39, 33, 0);
            border-radius: 7px;
          }
          .home-trigger4 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-icon10 {
            width: 24px;
            height: 24px;
          }
          .home-text22 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-question5 {
            box-shadow: 2px 2px 10px 0px #d4d4d4;
            border-color: rgba(44, 39, 33, 0);
            border-radius: 7px;
          }
          .home-trigger5 {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .home-icon12 {
            width: 24px;
            height: 24px;
          }
          .home-text24 {
            align-self: flex-start;
            margin-top: var(--dl-space-space-halfunit);
          }
          .home-image2 {
            width: 50%;
            object-fit: cover;
            margin-right: -400px;
          }
          .home-footer {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-unit);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-unit);
            justify-content: space-between;
          }
          .home-image3 {
            width: 147px;
            height: 79px;
            object-fit: cover;
          }
          .home-icon-group {
            display: flex;
            align-items: center;
            flex-direction: row;
            justify-content: space-between;
          }
          .home-icon14 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
            margin-right: var(--dl-space-space-twounits);
          }
          .home-icon16 {
            width: 24px;
            height: 24px;
          }
          .home-container4 {
            flex: 0 0 auto;
            width: 100%;
            border: 2px dashed rgba(120, 120, 120, 0.4);
            height: 100px;
            display: none;
            align-items: flex-start;
          }
          @media (max-width: 1200px) {
            .home-blue-background {
              background-size: cover;
            }
            .home-trigger {
              flex-direction: row;
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
            .home-max-width1 {
              flex-direction: column;
            }
            .home-max-width2 {
              flex-direction: column;
            }
            .home-questions {
              width: 80%;
            }
          }
          @media (max-width: 991px) {
            .home-text06 {
              text-align: center;
            }
            .home-text09 {
              text-align: center;
            }
            .home-container3 {
              grid-template-columns: 1fr;
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
            .home-team {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-footer {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .home-text25 {
              text-align: center;
              margin-left: var(--dl-space-space-unit);
              margin-right: var(--dl-space-space-unit);
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
            .home-team {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .home-container3 {
              display: list-item;
            }
            .home-questions {
              width: 100%;
            }
            .home-footer {
              padding: var(--dl-space-space-unit);
              flex-direction: column;
            }
            .home-image3 {
              margin-bottom: var(--dl-space-space-unit);
            }
            .home-text25 {
              margin-left: 0px;
              margin-right: 0px;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

export default Home
