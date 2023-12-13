document.addEventListener('DOMContentLoaded', function () {
  const sections = document.querySelectorAll('.section');

  function setActiveSection(index) {
      sections.forEach((section, i) => {
          section.classList.toggle('active', i === index);
      });
  }

  function handleScroll() {
      const scrollPosition = window.scrollY;
      const index = Math.floor(scrollPosition / window.innerHeight);

      setActiveSection(index);
  }

  // Set initial active section
  handleScroll();

  // Listen for scroll events
  window.addEventListener('scroll', handleScroll);

  // Optional: Add keyboard navigation
  document.addEventListener('keydown', function (event) {
      if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
          event.preventDefault(); // Prevent default scrolling behavior
          const currentIndex = Array.from(sections).findIndex(section => section.classList.contains('active'));
          const nextIndex = (event.key === 'ArrowDown') ? currentIndex + 1 : currentIndex - 1;
          const targetIndex = Math.max(0, Math.min(nextIndex, sections.length - 1));

          sections[targetIndex].scrollIntoView({ behavior: 'smooth' });
      }
  });
});

  