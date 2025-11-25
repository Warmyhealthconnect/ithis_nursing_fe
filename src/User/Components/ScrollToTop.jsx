import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure scroll happens AFTER router paints
    const timeout = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "instant"
      });
    }, 0);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
