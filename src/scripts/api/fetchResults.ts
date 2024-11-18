import { BASE_URL } from '../../constants';
import { options } from '../../constants/options';

export const fetchPopularResults = async (page: number): Promise<any[]> => {
  const response = await fetch(`${BASE_URL}movie/popular?language=ko-KR&page=${page}`, options);
  if (!response.ok) throw new Error('Failed to fetch popular movies');

  const results = (await response.json()).results;

  return results.map((movie: any) => ({
    vote_average: movie.vote_average,
    title: movie.title,
    poster_path: movie.poster_path
  }));
};

export const fetchSearchResults = async (page: number, query: string): Promise<any[]> => {
  const response = await fetch(`${BASE_URL}search/movie?query=${query}&language=ko-KR&page=${page}`, options);
  if (!response.ok) throw new Error('Failed to fetch search results');

  const results = (await response.json()).results;

  return results.map((movie: any) => ({
    vote_average: movie.vote_average,
    title: movie.title,
    poster_path: movie.poster_path
  }));
};
