export type ContentItem = {
  title: string;
  description: string;
  link: string;
  src?: string
};

const mockData: Record<string, ContentItem[]> = {
  차트: [
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
    },
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
    }
    , {
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
    }
    , {
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
    }
    , {
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
    }
  ],
  Whook: Array.from({ length: 50 }, (_,) => ({
    title: `후즈팬, 국경 초월 '덕친' 모았다! 글로벌 팬덤 서비스`,
    description: `이것은 뉴스 기사의 설명입니다.`,
    src: '/assets/contents/whook/whook_1.jpg',
    link: `https://www.dailysportshankook.co.kr/news/articleView.html?idxno=256525`,
  })),
  이벤트: Array.from({ length: 50 }, (_,) => ({
    title: `스타벅스, 여름 e-프리퀀시 이벤트로 상품 제공`,
    description: `스타벅스가 오는 5월 22일 부터 7월 20일까지 약 두달간...`,
    src: 'https://img.hankyung.com/photo/202505/01.40491526.1.jpg',
    link: `https://www.psnews.co.kr/news/articleView.html?idxno=2095529`,
  })),
  뉴스: Array.from({ length: 50 }, (_,) => ({
    title: `지드래곤, 오늘 ‘엠카’ 뜬다...컴백 무대 최초 공개`,
    description: `가수 지드래곤이 Mnet ‘엠카운트다운’에 출연한다.`,
    src: '/assets/contents/news/news.jpg',
    link: `https://www.mk.co.kr/news/musics/11251849`,
  })),
  스토어: Array.from({ length: 50 }, (_,) => ({
    title: `브랜드는 어디까지 확장할 수 있을까? 젠틀몬스터의 세계관 전략`,
    description: `젠틀몬스터는 2011년 서울에서 시작된 아이웨어 브랜드로, 단순한 제품 판매의 한계를 뛰어넘어 감각적`,
    src: 'https://cdn.iconsumer.or.kr/news/photo/202505/27763_37317_4013.png',
    link: `http://www.iconsumer.or.kr/news/articleView.html?idxno=27763`,
  })),
};

export async function getMockItems(category: string, page: number): Promise<ContentItem[]> {
  const pageSize = 10;
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  await new Promise((r) => setTimeout(r, 500));
  return mockData[category]?.slice(start, end) || [];
}


