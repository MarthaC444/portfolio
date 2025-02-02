import React, { useState, useEffect } from "react";

const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="sticky-bottom d-flex justify-content-end">
      {showTopBtn && (
        <i
          className="bi bi-caret-up-square-fill pe-4 pb-3 text-muted"
          style={{ fontSize: 40, opacity: 1 }}
          onClick={goToTop}
          role="button"
          aria-label="Go to top"
        ></i>
      )}
    </nav>
  );
};

export default ScrollToTop;
