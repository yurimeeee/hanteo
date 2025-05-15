import { ContentsList } from '../../components/feature/ContentsList';
import { CustomSlide } from '../../components/feature/CustomSlide';
import { CustomTab } from '../../components/feature/CustomTab';
import React from 'react';

const Home = () => {
  const slideData = [
    {
      src: '/assets/tws.jpg',
      title: '"HOT DEBUT" TWS (투어스) - 첫 만남은 계획대로 되지 않아 #엠카운트다운 EP.826 | Mnet 240125 방송',
      due: '2025-02-05',
      link: 'https://www.youtube.com/watch?v=2H7Sm3u6zXw',
    },
    {
      src: '/assets/riize.jpg',
      title: '[K-Choreo 8K] 라이즈 직캠 "Love 119" (RIIZE Choreography) @240105',
      due: '2024-01-05',
      link: 'https://www.youtube.com/watch?v=gBHQJxI2NJo',
    },
    {
      src: '/assets/jennie.jpg',
      title: '(4K) 제니(JENNIE) "like JENNIE" | NPOP LIMITED EDITION - SIDE A',
      due: '2025-03-24',
      link: 'https://www.youtube.com/watch?v=lBimDKKNDDs',
    },
  ];
  return (
    <div>
      {/* <CustomTab tabs={['전체', '스킨케어', '클렌징', '메이크업', '헤어', '바디', '남성', '건강식품', '소품']} onTabChange={(i) => console.log('선택된 탭:', i)} /> */}
      <CustomTab className="mb-3" />
      <CustomSlide data={slideData} />
      <ContentsList />
    </div>
  );
};

export default Home;
