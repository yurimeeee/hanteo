/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';

import SkeletonItem from './Skeleton';
import { css } from '@emotion/react';
import { getMockItems } from '../../api/mockApi';

type Item = {
  id: string;
  title: string;
  description: string;
  link: string;
  src: string;
};

const listContainer = css`
  padding: 16px;
`;

const itemStyle = css`
  padding: 12px;
  margin-bottom: 12px;
  background: #0000008a;
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  gap: 12px;
  text-align: start;
  cursor: pointer;
  transition: all.3s;
  :hover {
    background: #00000041;
  }
`;

export const ContentsList = (category: any) => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadItems = async (page: number) => {
    setLoading(true);
    const newItems = await getMockItems(category.category, page);
    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev: any) => [...prev, ...newItems]);
    }
    setLoading(false);
  };

  // IntersectionObserver 등록
  useEffect(() => {
    if (!hasMore) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
    return () => observer.disconnect();
  }, [loading, hasMore]);

  useEffect(() => {
    // 카테고리가 바뀌면 초기화
    setItems([]);
    setPage(1);
    setHasMore(true);
  }, [category]);

  useEffect(() => {
    // page가 바뀔 때 해당 페이지 데이터를 불러옴
    loadItems(page);
  }, [page]);

  return (
    <>
      <h2
        css={css`
          font-size: 18px;
          font-weight: 700;
          text-align: start;
          margin: 12px 10px 6px;
        `}
      >
        🔥 실시간 인기 큐레이션
      </h2>
      <div css={listContainer}>
        {items.map((item) => (
          <div key={item.id} css={itemStyle} onClick={() => window.open(item?.link)}>
            <img src={item?.src} alt="" className="max-w-[80px] object-cover rounded-sm" />
            <div>
              <h3 className="font-semibold min-h-[48px]">{item.title && item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</h3>
              <p className="text-slate-300 text-s">{item.description && item.description.length > 20 ? item.description.slice(0, 20) + '...' : item.description}</p>
            </div>
          </div>
        ))}
        <div ref={loaderRef}>{loading && Array.from({ length: 4 }).map((_, i) => <SkeletonItem key={i} />)}</div>
      </div>
    </>
  );
};
