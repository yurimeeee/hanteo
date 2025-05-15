export type ContentItem = {
  title: string;
  description: string;
  link: string;
  src?: string
};

const mockData: Record<string, ContentItem[]> = {
  chart: [
    {
      title: '[Playlist] 진짜 여름 아니면 언제 들을래?',
      description: '첫곡부터 청량해서 여름에 틀어놓으면 기분 좋아지는 국내 노래모음 노동요 매장음악 플레이리스트',
      src: '/assets/contents/chart/chart_1.jpg',
      link: 'https://www.youtube.com/watch?v=ebPTIftheTw',
    },
    {
      title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 🌞오늘 하루를 기분 좋게 만들어 주는 팝송 | 매장음악 플레이리스트 ',
      description: '경쾌하고 즐거운 팝 음악 플레이리스트를 소개합니다.',
      src: '/assets/contents/chart/chart_2.jpg',
      link: 'https://www.youtube.com/watch?v=oURdRk-i66E',
    }, {
      title: '[Playlist] 진짜 여름 아니면 언제 들을래?',
      description: '첫곡부터 청량해서 여름에 틀어놓으면 기분 좋아지는 국내 노래모음 노동요 매장음악 플레이리스트',
      src: '/assets/contents/chart/chart_1.jpg',
      link: 'https://www.youtube.com/watch?v=ebPTIftheTw',
    },
    {
      title: '𝐏𝐥𝐚𝐲𝐥𝐢𝐬𝐭 🌞오늘 하루를 기분 좋게 만들어 주는 팝송 | 매장음악 플레이리스트 ',
      description: '경쾌하고 즐거운 팝 음악 플레이리스트를 소개합니다.',
      src: '/assets/contents/chart/chart_2.jpg',
      link: 'https://www.youtube.com/watch?v=oURdRk-i66E',
    },
  ],
  뉴스: Array.from({ length: 50 }, (_, i) => ({
    title: `뉴스 기사 ${i + 1}`,
    description: `이것은 뉴스 기사 ${i + 1}의 설명입니다.`,
    link: `https://news.example.com/article/${i + 1}`,
  })),
  테크: Array.from({ length: 50 }, (_, i) => ({
    title: `테크 소식 ${i + 1}`,
    description: `최신 테크 뉴스 ${i + 1}입니다.`,
    link: `https://tech.example.com/post/${i + 1}`,
  })),
  라이프: Array.from({ length: 50 }, (_, i) => ({
    title: `라이프스타일 팁 ${i + 1}`,
    description: `건강하고 행복한 삶을 위한 ${i + 1}번째 팁.`,
    link: `https://life.example.com/tip/${i + 1}`,
  })),
  엔터: Array.from({ length: 50 }, (_, i) => ({
    title: `연예 뉴스 ${i + 1}`,
    description: `화제의 연예 기사 ${i + 1}번입니다.`,
    link: `https://ent.example.com/news/${i + 1}`,
  })),
};

export async function getMockItems(category: string, page: number): Promise<ContentItem[]> {
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  await new Promise((r) => setTimeout(r, 500));
  return mockData[category]?.slice(start, end) || [];
}


// import { getMockItems } from "@/api/mockApi";

// // 내부에서
// const data = await getMockItems(category, page);
