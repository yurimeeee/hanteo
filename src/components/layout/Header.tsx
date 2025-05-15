import React from 'react';

function Header() {
  return (
    <div className="px-5 py-5 flex justify-between">
      <h1>
        <a href="/">
          <img src="/assets/hanteo_logo.png" alt="Hanteo 로고" width={140} height="auto" />
        </a>
      </h1>
      <img src="/assets/icons/user.svg" alt="프로필" width={28} className="cursor-pointer" />
    </div>
  );
}

export default Header;
