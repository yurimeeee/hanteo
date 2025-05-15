import { ContentsList } from '../../components/feature/ContentsList';
import { CustomSlide } from '../../components/feature/CustomSlide';
import { CustomTab } from '../../components/feature/CustomTab';
import { useState } from 'react';

const Home = () => {
  const [category, setCategory] = useState('차트');
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
  console.log('category', category);
  return (
    <div>
      <CustomTab className="mb-3" category={category} setCategory={setCategory} />
      <CustomSlide data={slideData} />
      <ContentsList category={category} />
    </div>
  );
};

export default Home;
