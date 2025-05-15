/** @jsxImportSource @emotion/react */
import { useEffect, useState } from 'react';

import { css } from '@emotion/react';

const bottomStyle = css`
  width: 52px;
  height: 52px;
  background: #ffffff2a;
  border: 1px solid #ffffffb7;
  display: flex;
  justify-content: center;
  align-content: center;
`;

export default function TopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mainEl = document.querySelector('main');

    if (!mainEl) return;

    const handleScroll = () => {
      setIsVisible(mainEl.scrollTop > 300);
    };

    mainEl.addEventListener('scroll', handleScroll);
    return () => {
      mainEl.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    const mainEl = document.querySelector('main');
    if (!mainEl) return;

    mainEl.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-14 left-1/2 transform translate-x-[132px] z-50 p-2 bg-white text-black rounded-full shadow-md transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      //@ts-ignore
      css={bottomStyle}
    >
      <img src="/assets/icons/arrow.svg" alt="" width={16} />
    </button>
  );
}
