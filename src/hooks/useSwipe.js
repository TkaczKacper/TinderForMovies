import { useState } from "react";

export const useSwipe = (onSwipeLeft, onSwipeRight, minSwipe = 50) => {
   const [touchStart, setTouchStart] = useState(null);
   const [touchEnd, setTouchEnd] = useState(null);
   const [swipeDirection, setSwipeDirection] = useState(null);

   const onStart = (pos) => {
      setTouchEnd(null);
      setTouchStart(pos);
   };

   const onMove = (pos) => setTouchEnd(pos);

   const onEnd = () => {
      if (!touchStart || !touchEnd) return;

      const distance = touchStart - touchEnd;
      const isLeftSwipe = distance > minSwipe;
      const isRightSwpie = distance < -minSwipe;

      if (isLeftSwipe || isRightSwpie) {
         setSwipeDirection(isLeftSwipe ? "left" : "right");
         console.log("swpie", isLeftSwipe ? "left" : "right");
         if (isLeftSwipe && onSwipeLeft) onSwipeLeft();
         if (isRightSwpie && onSwipeRight) onSwipeRight();
      }

      setTouchStart(null);
      setTouchEnd(null);
   };

   // desktop version swipe event handlers
   const onMouseDown = (e) => onStart(e.clientX);
   const onMouseMove = (e) => onMove(e.clientX);
   const onMouseUp = () => onEnd();

   // mobile version swipe event handlers
   const onTouchStart = (e) => onStart(e.targetTouches[0].clientX);
   const onTouchMove = (e) => onMove(e.targetTouches[0].clientX);
   const onTouchEnd = () => onEnd();

   return {
      onMouseDown,
      onMouseMove,
      onMouseUp,
      onTouchStart,
      onTouchMove,
      onTouchEnd,
      swipeDirection,
      touchStart,
   };
};
