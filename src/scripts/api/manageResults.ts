import { fetchPopularResults, fetchSearchResults } from './fetchResults';

export class ManageResults {
  private operation: number = 0; // 검색 여부 (0: 인기, 1: 검색)
  private searchQuery: string = '';
  private currentPage: number = 0; // 현재 페이지 번호
  private resultsList: any[] = [];
  private totalResultsCount: number = 0; // 전체 결과 수

  constructor(private searchInput: HTMLInputElement | null) {}

  // 검색 상태를 확인하고 설정
  private isSearch(): void {
    if (this.searchInput) {
      if (this.searchInput.value.trim() !== '') {
        this.operation = 1;
        this.searchQuery = this.searchInput.value.trim();
      } else {
        this.operation = 0;
        this.searchQuery = '';
      }
    }
  }

  // 데이터를 가져오는 함수
  public async fetchResults(): Promise<void> {
    try {
      // 검색 여부 판단
      this.isSearch();

      // 다음 페이지 로드
      this.currentPage++;

      // 데이터를 API에서 가져오기
      const fetchedResults =
        this.operation === 1
          ? await fetchSearchResults(this.currentPage, this.searchQuery)
          : await fetchPopularResults(this.currentPage);

      // 결과를 리스트에 추가
      this.resultsList = [...this.resultsList, ...fetchedResults];

      // 전체 결과 수 증가
      this.totalResultsCount += fetchedResults.length;
    } catch (error) {
      console.error('Error fetching results:', error);
    }
  }

  // 현재 결과 리스트를 반환
  public getResults(): any[] {
    return this.resultsList;
  }

  // 전체 결과 개수 반환
  public getResultsCount(): number {
    return this.totalResultsCount;
  }

  // 검색 조건 초기화
  public resetResults(): void {
    this.currentPage = 0; // 페이지 초기화
    this.resultsList = []; // 결과 리스트 초기화
    this.totalResultsCount = 0; // 결과 수 초기화
  }
}
