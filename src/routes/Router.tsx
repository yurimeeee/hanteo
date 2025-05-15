// import Home from '../pages/Home/Home';
// import React from 'react';
// // import About from '../pages/About';
// // import Home from '../pages/Home';
// import { createBrowserRouter } from 'react-router-dom';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   // {
//   //   path: '/about',
//   //   element: <About />,
//   // },
// ]);

// export default router;

// export default function Layout({ children: }) {
//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-200">
//       <div className="w-full max-w-[425px] h-[900px] bg-white shadow-lg flex flex-col">
//         {/* <Header>모바일 헤더</Header> */}
//         <main className="flex-1 p-4 overflow-y-auto">{children}</main>
//         {/* <Footer>모바일 푸터</Footer> */}
//       </div>
//     </div>
//   );
// }

import Home from '../pages/Home/Home';
import Layout from '../components/layout/Layout';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />, // Layout wraps around all pages
    children: [
      {
        index: true, // This represents the default path '/'
        element: <Home />,
      },
    ],
  },
]);

export default router;
