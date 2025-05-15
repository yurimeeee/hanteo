// // src/components/CustomSlide.tsx

// // Slick CSS Imports
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import React from 'react';
// import Slider from 'react-slick';

// type SlideItem = {
//   src: string;
//   title: string;
//   due: string;
//   link: string;
// };
// type CustomSlideProps = {
//   data: SlideItem[];
// };

// const sliderStyle = {
//   position: 'relative',
//   width: '100%',
//   height: '100%',
// };

// const slideStyle = {
//   height: '280px',
//   backgroundColor: 'white',
//   borderRadius: '8px',
// };

// const indicatorStyle = {
//   position: 'absolute',
//   bottom: '20px',
//   left: '50%',
//   transform: 'translateX(-50%)',
//   display: 'flex',
//   justifyContent: 'center',
//   alignItems: 'center',
//   zIndex: 10,
// };

// const slideTextStyle = {
//   position: 'absolute',
// };

// export const CustomSlide = ({ data }: CustomSlideProps) => {
//   const settings = {
//     infinite: true,
//     speed: 2000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     dots: true,
//     centerMode: true,
//     centerPadding: '5%',
//     focusOnSelect: true,
//     adaptiveHeight: true,
//     arrows: false,
//   };

//   return (
//     <div style={sliderStyle}>
//       <Slider {...settings}>
//         {/* {data?.map((item: SlideItem, i: number) => (
//           <div
//             style={slideStyle}
//             key={i}
//             onClick={() => {
//               window.open(item?.link);
//             }}
//             className="relative"
//           >
//             <img src={item?.src} className="cursor-pointer" />
//             <div style={{ ...slideStyle, position: 'absolute', background: '#ba3232', width: '100%', height: '40px', zIndex: 10, bottom: 0 }}>
//               <h1>Slide 1</h1>
//               <p>Content of Slide 1</p>
//             </div>
//           </div>
//         ))} */}
//         {data?.map((item: SlideItem, i: number) => (
//           <div
//             style={{
//               ...slideStyle,
//               marginRight: i === data.length - 1 ? 0 : '16px', // 마지막 슬라이드는 margin 제거
//             }}
//             key={i}
//             onClick={() => {
//               window.open(item?.link);
//             }}
//             className="relative"
//           >
//             <img src={item?.src} className="cursor-pointer" />
//             <div
//               style={{
//                 position: 'relative',
//                 background: '#ffffff',
//                 width: '100%',
//                 height: '64px',
//                 zIndex: 10,
//                 bottom: 0,
//                 color: '#202224',
//               }}
//             >
//               <p>Slide 1</p>
//               <p>Content of Slide 1</p>
//             </div>
//           </div>
//         ))}

//         {/* <div style={slideStyle}>
//           <div style={{ ...slideStyle, backgroundColor: 'black', color: 'white' }}>
//             <h1>Slide 1</h1>
//             <p>Content of Slide 1</p>
//           </div>
//         </div>
//         <div style={slideStyle}>
//           <div style={{ ...slideStyle, backgroundColor: 'white', color: 'black' }}>
//             <h1>Slide 2</h1>
//             <p>Content of Slide 2</p>
//           </div>
//         </div>
//         <div style={slideStyle}>
//           <div style={{ ...slideStyle, backgroundColor: 'black', color: 'white' }}>
//             <h1>Slide 3</h1>
//             <p>Content of Slide 3</p>
//           </div>
//         </div> */}
//         {/* Add more slides as needed */}
//       </Slider>
//       <div style={indicatorStyle}>
//         {/* Customize the indicator if needed */}
//         <span>●</span>
//       </div>
//     </div>
//   );
// };

/** @jsxImportSource @emotion/react */
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
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

// 스타일 정의
const sliderWrapperStyle = css`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 8px;
  /* .slick-slide {
    margin: 0 10px;
  } */
`;

const slideContainerStyle = (isLast: boolean) => css`
  height: 280px;
  /* background-color: white; */
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

const indicatorStyle = css`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
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
    pauseOnDotsHover: true, // 👈 dot 위에 마우스 올렸을 때 autoplay 멈춤
    pauseOnFocus: true, // 👈 dot 클릭 시 autoplay 멈춤
    pauseOnHover: true, // 👈 슬라이드 hover 시 autoplay 멈춤
    customPaging: (i: number) => (
      <div
        css={css`
          width: 14px;
          height: 6px;
          /* border-radius: 50%; */
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
                {/* <p className="text-start">{item.title}</p> */}
                <p className="text-start text-[#202224]">{item.title && item.title.length > 25 ? item.title.slice(0, 25) + '...' : item.title}</p>
                <p className="text-start text-slate-500 text-xs">{item.due}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      {/* <div css={indicatorStyle}>
        <span>●</span>
      </div> */}
    </div>
  );
};
