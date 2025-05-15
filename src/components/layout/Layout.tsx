import Header from './Header';
/** @jsxImportSource @emotion/react */
import { Outlet } from 'react-router-dom';
import { css } from '@emotion/react';

const bgGradient = css`
  background: #0a0f21;
  background: radial-gradient(circle, rgba(10, 15, 33, 1) 0%, rgba(40, 61, 153, 1) 89%, rgba(39, 58, 146, 1) 100%);
  color: white;
`;

export default function Layout() {
  return (
    // @ts-ignore
    <div className=" min-h-screen" css={bgGradient}>
      {/* <div className="w-full max-w-[425px] h-[900px] shadow-lg flex flex-col"> */}
      <div className="w-full max-w-[425px] h-[900px] shadow-lg flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
