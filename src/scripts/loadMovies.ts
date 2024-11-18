import { ManageResults } from './api/manageResults';
import { fillTable } from './ui/fillTable';

// ResultsManager 인스턴스 생성
const searchInput: HTMLInputElement | null = document.querySelector('.searchInput');
export const resultsManager = new ManageResults(searchInput);

// 데이터 로드 공통 함수
export const loadResults = async (): Promise<void> => {
  await resultsManager.fetchResults();
  fillTable(resultsManager.getResults());
  console.log('Total Results Count:', resultsManager.getResultsCount());
};

// 화면 너비에 따라 더보기 버튼 표시 결정
export const checkLoadMode = (loadMoreButton: HTMLButtonElement | null): void => {
  const screenWidth = window.innerWidth;

  if (screenWidth > 1024) {
    // 데스크톱 화면: 더보기 버튼 O
    if (loadMoreButton) loadMoreButton.style.display = 'block';
  } else {
    // 모바일 화면: 더보기 버튼 X, 스크롤 로딩
    if (loadMoreButton) loadMoreButton.style.display = 'none';
    import('./ui/eventHandlers').then(({ attachScrollHandler }) => {
      attachScrollHandler(async () => {
        console.log('Loading more results on scroll...');
        await loadResults();
      });
    });
  }
};