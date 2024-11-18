import './styles/style.css';
import { loadResults, checkLoadMode, resultsManager } from './scripts/loadMovies';

const searchInput: HTMLInputElement | null = document.querySelector('.searchInput');
const loadMoreButton: HTMLButtonElement | null = document.querySelector('.readMore');

// 초기 데이터 로드
document.addEventListener('DOMContentLoaded', async () => {
  await loadResults(); // 첫 번째 페이지 데이터 로드
  checkLoadMode(loadMoreButton); // 화면 너비에 따라 로드 방식 결정
});

// 검색어 입력 이벤트 리스너
searchInput?.addEventListener('click', async () => {
  resultsManager.resetResults(); // 검색 초기화
  await loadResults(); // 새 데이터 로드
});

// 더보기 버튼 클릭 이벤트
loadMoreButton?.addEventListener('click', async () => {
  console.log('Loading more results with button...');
  await loadResults(); // 다음 페이지 로드
});

// 윈도우 크기 변경 시 로드 방식 업데이트
window.addEventListener('resize', () => checkLoadMode(loadMoreButton));
