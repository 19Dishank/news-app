import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  // Show button only after scrolling past 300px
  const toggleVisible = () => {
    setVisible(window.scrollY > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);
    return () => window.removeEventListener('scroll', toggleVisible);
  }, []);

  return (
    visible && (
      <StyledWrapper onClick={scrollToTop}>
        <button className="button">
          <svg className="svgIcon" viewBox="0 0 384 512">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" />
          </svg>
        </button>
      </StyledWrapper>
    )
  );
};

const StyledWrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 999;

  .button {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: rgb(20, 20, 20);
    border: none;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 0px 4px rgba(180, 160, 255, 0.253);
    cursor: pointer;
    transition: all 0.3s ease;
    overflow: hidden;
    position: relative;
  }

  .svgIcon {
    width: 12px;
    transition: transform 0.3s ease;
  }

  .svgIcon path {
    fill: white;
  }

  .button:hover {
    width: 140px;
    border-radius: 50px;
    background-color: red;
  }

  .button:hover .svgIcon {
    transform: translateY(-200%);
  }

  .button::before {
    position: absolute;
    bottom: -20px;
    content: "Back to Top";
    color: white;
    font-size: 0;
  }

  .button:hover::before {
    font-size: 13px;
    bottom: 50%;
    transform: translateY(50%);
    transition: all 0.3s ease;
  }
`;

export default ScrollToTop;
