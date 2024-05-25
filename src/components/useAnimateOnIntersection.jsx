// components/useAnimateOnIntersection.js
import { useEffect } from 'react';

const useAnimateOnIntersection = (selectors, threshold = 0.5) => {
  useEffect(() => {
    // Define the callback function for the Intersection Observer
    const animateElements = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const elem = entry.target;
          const words = elem.textContent.split(' ');
          elem.innerHTML = '';

          words.forEach((el, index) => {
            words[index] = `<p><i>${words[index]}</i></p>`;
          });

          elem.innerHTML = words.join(' ');

          const children = elem.querySelectorAll('p > i');
          children.forEach((node, index) => {
            node.style.animationDelay = `${index * 0.3}s`;
          });

          // Unobserve the target element to stop observing once it's animated
          observer.unobserve(elem);
        }
      });
    };

    // Create a new Intersection Observer
    const observer = new IntersectionObserver(animateElements, { threshold });

    // Select and observe elements
    selectors.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach(elem => {
        observer.observe(elem);
      });
    });

    // Cleanup observer on unmount
    return () => {
      observer.disconnect();
    };
  }, [selectors, threshold]);
};

export default useAnimateOnIntersection;
