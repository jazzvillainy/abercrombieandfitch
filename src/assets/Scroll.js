function smoothScrollToBottom() {
  const targetScroll = document.documentElement.scrollHeight/3;
  const startScroll = window.scrollY;
  const distance = targetScroll - startScroll;
  const duration = 1000; // Adjust the duration as needed (in milliseconds)
  const startTime = Date.now();

 function scrollAnimation() {
    const elapsedTime = Date.now() - startTime;
    const progress = Math.min(elapsedTime / duration, 1);
    const scrollPosition = startScroll + distance * progress;
    window.scrollTo(0, scrollPosition);
    if (progress < 1) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  scrollAnimation();
}

export default smoothScrollToBottom