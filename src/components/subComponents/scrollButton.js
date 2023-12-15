import { useEffect, useState } from 'react';

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      setIsVisible(scrollY > screenHeight / 2 || scrollY + screenHeight >= documentHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTopOrBottom = () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollY > screenHeight / 2) {
      // If user is not at the top, scroll to the top
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else if (scrollY + screenHeight < documentHeight) {
      // If user is not at the bottom, scroll to the bottom
      window.scrollTo({
        top: documentHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div
      onClick={scrollToTopOrBottom}
      className={`fixed bottom-4 right-4 cursor-pointer ${
        isVisible ? 'visible' : 'invisible'
      }`}
    >
      {isVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-8 h-8"
        >
            
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
          />
        </svg>
      )}
    </div>
  );
};

export default ScrollButton;
