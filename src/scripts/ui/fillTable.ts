import { IMAGE_URL } from '../../constants';

export const fillTable = (results:any[]): void => {
  const container = document.querySelector('.movieListContainer');
  if (!container) return;
  
  container.innerHTML = ''; // 기존 데이터 초기화
  results.forEach((result) => {
    const movieCard = document.createElement('div');
    movieCard.classList.add('movieCard');
    
    const posterImg:HTMLImageElement = document.createElement('img');
    posterImg.src = `${IMAGE_URL}${result.poster_path}`;
    posterImg.alt = `${result.title}`;
    
    const title:HTMLSpanElement = document.createElement('span');
    title.textContent = result.title;

    const star = `<img src="./assets/star.svg" alt="star" />`;
    const rate:HTMLParagraphElement = document.createElement('p');
    rate.innerHTML = `${result.vote_average.toFixed(1)}   ${star}`;

    movieCard.appendChild(posterImg);
    movieCard.appendChild(title);
    movieCard.appendChild(rate);

    container.appendChild(movieCard);
  });
};
