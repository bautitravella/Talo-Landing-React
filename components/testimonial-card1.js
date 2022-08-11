import React from 'react'

import PropTypes from 'prop-types'

const TestimonialCard1 = (props) => {
  return (
    <>
      <div
        className={`testimonial-card1-testimonial-card ${props.rootClassName} `}
      >
        <div className="testimonial-card1-container">
          <svg
            viewBox="0 0 877.7142857142857 1024"
            className="testimonial-card1-icon"
          >
            <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
          </svg>
        </div>
        <div className="testimonial-card1-testimonial">
          <span className="testimonial-card1-text">{props.quote}</span>
          <span className="testimonial-card1-text1">{props.name}</span>
          <span className="testimonial-card1-text2">{props.role}</span>
          <img
            alt={props.picture_alt}
            src={props.picture_src}
            className="testimonial-card1-image"
          />
        </div>
      </div>
      <style jsx>
        {`
          .testimonial-card1-testimonial-card {
            display: flex;
            padding: var(--dl-space-space-twounits);
            max-width: var(--dl-size-size-maxwidth);
            background: #fff;
            box-shadow: 5px 5px 10px 0px rgba(18, 18, 18, 0.1);
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card1-container {
            flex: 0 0 auto;
            width: auto;
            height: auto;
            display: flex;
            align-items: flex-start;
            justify-content: center;
          }
          .testimonial-card1-icon {
            width: 24px;
            margin-bottom: var(--dl-space-space-twounits);
          }
          .testimonial-card1-testimonial {
            display: flex;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
          }
          .testimonial-card1-text {
            color: #595959;
            text-align: center;
            margin-bottom: var(--dl-space-space-threeunits);
          }
          .testimonial-card1-text1 {
            font-size: 1.5rem;
            font-weight: 300;
            margin-bottom: var(--dl-space-space-halfunit);
          }
          .testimonial-card1-text2 {
            color: #595959;
            font-weight: 600;
            margin-bottom: var(--dl-space-space-unit);
            text-transform: uppercase;
          }
          .testimonial-card1-image {
            width: var(--dl-size-size-medium);
            height: var(--dl-size-size-medium);
            object-fit: cover;
            border-radius: var(--dl-radius-radius-round);
          }

          @media (max-width: 1200px) {
            .testimonial-card1-testimonial-card {
              border-radius: 7px;
            }
            .testimonial-card1-icon {
              width: 33px;
              height: 33px;
            }
            .testimonial-card1-text1 {
              align-self: center;
              text-align: center;
            }
          }
          @media (max-width: 991px) {
            .testimonial-card1-text2 {
              align-self: center;
            }
          }
          @media (max-width: 767px) {
            .testimonial-card1-testimonial-card {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
          }
          @media (max-width: 479px) {
            .testimonial-card1-testimonial-card {
              padding-top: var(--dl-space-space-twounits);
              padding-left: var(--dl-space-space-unit);
              padding-right: var(--dl-space-space-unit);
              padding-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-card1-text {
              margin-bottom: var(--dl-space-space-twounits);
            }
            .testimonial-card1-text1 {
              margin-bottom: var(--dl-space-space-halfunit);
            }
            .testimonial-card1-text2 {
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

TestimonialCard1.defaultProps = {
  rootClassName: '',
  name: 'Jane Doe',
  quote:
    'Estudiante Ingenieria Informatica en el ITBA, con anos de experiencia como software developer.',
  picture_alt: 'profile',
  picture_src:
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&ixlib=rb-1.2.1&h=1200',
  role: 'SOFTWARE ENGINEER',
}

TestimonialCard1.propTypes = {
  rootClassName: PropTypes.string,
  name: PropTypes.string,
  quote: PropTypes.string,
  picture_alt: PropTypes.string,
  picture_src: PropTypes.string,
  role: PropTypes.string,
}

export default TestimonialCard1
