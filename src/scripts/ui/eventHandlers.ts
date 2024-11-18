export const attachScrollHandler = (callback: () => void): void => {
  window.addEventListener('scroll', () => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      callback();
    }
  });
};
