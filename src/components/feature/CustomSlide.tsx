/** @jsxImportSource @emotion/react */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
// @ts-ignore
import Slider from 'react-slick';
import { css } from '@emotion/react';

type SlideItem = {
  src: string;
  title: string;
  due: string;
  link: string;
};

type CustomSlideProps = {
  data: SlideItem[];
};

const sliderWrapperStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 8px;
`;

const slideContainerStyle = (isLast: boolean) => css`
  height: 280px;
  border-radius: 8px;
  margin-right: ${isLast ? '0' : '16px'};
  overflow: hidden;
  position: relative;
  cursor: pointer;
  padding: 0 10px;
`;

const bottomTextStyle = css`
  width: 100%;
  height: 64px;
  background: #ffffffec;
  color: #202224;
  padding: 6px 12px;
  z-index: 10;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CustomSlide = ({ data }: CustomSlideProps) => {
  const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    centerMode: true,
    centerPadding: '5%',
    focusOnSelect: true,
    adaptiveHeight: true,
    arrows: false,
    pauseOnDotsHover: true,
    pauseOnFocus: true,
    pauseOnHover: true,
    customPaging: (i: number) => (
      <div
        key={i}
        css={css`
          width: 14px;
          height: 6px;
          border-radius: 4px;
          background-color: #ccc;
          margin: 0;
          cursor: pointer;
        `}
      />
    ),
    appendDots: (dots: React.ReactNode) => (
      <div
        css={css`
          position: absolute;
          bottom: 12px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2px;
          z-index: 10;
        `}
      >
        {dots}
      </div>
    ),
  };

  return (
    <div css={sliderWrapperStyle}>
      <Slider {...settings}>
        {data?.map((item: SlideItem, i: number) => (
          <div key={i} css={slideContainerStyle(i === data.length - 1)} onClick={() => window.open(item.link)}>
            <div
              css={css`
                border-radius: 6px;
                overflow: hidden;
              `}
            >
              <img src={item.src} alt={item.title} className="w-full h-full object-cover" />
              <div css={bottomTextStyle}>
                <p className="text-start text-[#202224]">{item.title && item.title.length > 25 ? item.title.slice(0, 25) + '...' : item.title}</p>
                <p className="text-start text-slate-500 text-xs">{item.due}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
