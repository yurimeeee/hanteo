/** @jsxImportSource @emotion/react */
import React, { useEffect, useRef, useState } from 'react';

import { css } from '@emotion/react';
import { getMockItems } from '../../api/mockApi';

type Item = {
  id: string;
  title: string;
  description: string;
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

const loadingStyle = css`
  text-align: center;
  margin: 16px 0;
`;

export const ContentsList = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);

  const loadItems = async (page: number) => {
    setLoading(true);
    const newItems = await getMockItems('chart', page);
    if (newItems.length === 0) {
      setHasMore(false);
    } else {
      setItems((prev) => [...prev, ...newItems]);
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
    loadItems(page);
  }, [page]);
  // // 더미 데이터 로딩 함수 (실제 Firebase나 API 대체 가능)
  // const loadItems = async (page: number) => {
  //   setLoading(true);
  //   const newItems = Array.from({ length: 10 }, (_, i) => ({
  //     id: `item-${page}-${i}`,
  //     title: `Item ${page}-${i}`,
  //     description: `This is the description for item ${page}-${i}`,
  //   }));
  //   await new Promise((res) => setTimeout(res, 1000)); // simulate delay
  //   setItems((prev) => [...prev, ...newItems]);
  //   setLoading(false);
  // };

  // // 무한 스크롤 IntersectionObserver
  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting && !loading) {
  //         setPage((prev) => prev + 1);
  //       }
  //     },
  //     { threshold: 1 }
  //   );

  //   if (loaderRef.current) observer.observe(loaderRef.current);
  //   return () => observer.disconnect();
  // }, [loading]);

  // useEffect(() => {
  //   loadItems(page);
  // }, [page]);

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
          <div key={item.id} css={itemStyle} onClick={() => window.open(item.link)}>
            <img src={item?.src} alt="" className="max-w-[80px] object-cover rounded-sm" />
            <div>
              <h3 className="font-semibold min-h-[48px]">{item.title && item.title.length > 30 ? item.title.slice(0, 30) + '...' : item.title}</h3>
              <p className="text-slate-300 text-s">{item.description && item.description.length > 20 ? item.description.slice(0, 20) + '...' : item.description}</p>
            </div>
          </div>
        ))}
        <div ref={loaderRef} css={loadingStyle}>
          {loading ? '로딩 중...' : '스크롤하여 더 보기'}
        </div>
      </div>
    </>
  );
};
