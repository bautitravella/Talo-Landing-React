import React from 'react'

import PropTypes from 'prop-types'

const NavigationLinks = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <span className="navigation-links-text navigation-Link">
          {props.link1}
        </span>
        <span className="navigation-links-text1 navigation-Link">
          {props.link2}
        </span>
        <span className="navigation-links-text2 navigation-Link">
          {props.link3}
        </span>
      </nav>
      <style jsx>
        {`
          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-text {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
          }
          .navigation-links-text:hover {
            color: var(--dl-color-scheme-pink);
          }
          .navigation-links-text1 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .navigation-links-text1:hover {
            color: var(--dl-color-scheme-pink);
          }
          .navigation-links-text2 {
            color: var(--dl-color-scheme-white);
            cursor: pointer;
            transition: 0.3s;
            margin-left: 41px;
          }
          .navigation-links-text2:hover {
            color: var(--dl-color-scheme-pink);
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }
            .navigation-links-text {
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text1 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
            .navigation-links-text2 {
              margin-left: 0;
              margin-bottom: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

NavigationLinks.defaultProps = {
  rootClassName: '',
  link2: 'Speakers',
  link3: 'Agenda',
  link1: 'About',
}

NavigationLinks.propTypes = {
  rootClassName: PropTypes.string,
  link2: PropTypes.string,
  link3: PropTypes.string,
  link1: PropTypes.string,
}

export default NavigationLinks
