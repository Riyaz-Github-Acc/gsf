import { useEffect } from "react";

function useLockBodyScroll (isOpen: boolean) {
  useEffect(() => {
    // Check if window object is defined (i.e., if code is running on the client-side)
    if (typeof window !== 'undefined' && isOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [isOpen]);
};

export default useLockBodyScroll