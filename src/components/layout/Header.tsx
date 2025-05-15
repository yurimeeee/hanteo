import { useEffect, useState } from 'react';

import { css } from '@emotion/react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const mainEl = document.querySelector('main');

    const handleScroll = () => {
      if (!mainEl) return;
      setIsScrolled(mainEl.scrollTop > 0);
    };

    if (mainEl) {
      mainEl.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (mainEl) {
        mainEl.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div className={`flex justify-between transition-all duration-300 bg-transparent ${isScrolled ? 'px-5 py-4 shadow-md' : 'px-5 py-5'}`}>
      <h1>
        <a href="/">
          <img src="/assets/hanteo_logo.png" alt="Hanteo 로고" width={isScrolled ? 120 : 140} height="auto" style={{ transition: '0.3s' }} />
        </a>
      </h1>
      <img src="/assets/icons/user.svg" alt="프로필" width={28} className="cursor-pointer" />
    </div>
  );
}
export default Header;
