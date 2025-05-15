import 'keen-slider/keen-slider.min.css';

/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';

import { css } from '@emotion/react';
import { useKeenSlider } from 'keen-slider/react';

type CustomTabProps = {
  className?: string;
  category?: string;
  setCategory: any;
};

const tabItemStyle = (active: boolean) => css`
  width: auto !important;
  margin-right: 12px;
  padding: 8px 16px;
  border-radius: 9999px;
  font-size: 14px;
  background-color: ${active ? 'rgba(255,255,255,0.2)' : 'transparent'};
  border: 1px solid #7e91dc;
  color: #fff;
  white-space: nowrap;
  user-select: none;
  flex: 0 0 auto;
  transition: all 0.3s;
  cursor: pointer;
`;

export const CustomTab = ({ className, category, setCategory }: CustomTabProps) => {
  const tabs = ['차트', 'Whook', '이벤트', '뉴스', '스토어', '충전소'];
  const [activeTab, setActiveTab] = useState(category);
  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    slides: {
      perView: 'auto',
      spacing: 4,
    },
    mode: 'free-snap',
  });
  useEffect(() => {
    setCategory(activeTab);
  }, [activeTab]);

  console.log(activeTab, 'activeTab');
  return (
    <div
      ref={sliderRef}
      className={`keen-slider ${className ?? ''}`}
      // @ts-ignore
      css={css`
        overflow: hidden;
        padding: 0 16px 8px;
      `}
    >
      {tabs.map((tab) => (
        // @ts-ignore
        <div
          key={tab}
          className="keen-slider__slide"
          // @ts-ignore
          css={tabItemStyle(activeTab === tab)}
          onClick={() => {
            setActiveTab(tab);
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};
