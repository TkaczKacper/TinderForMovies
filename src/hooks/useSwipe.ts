import { useState } from "react";
import { SwpieCallback } from "./useSwipeTypes";

export const useSwipe = (
   onSwipeLeft?: SwpieCallback,
   onSwipeRight?: SwpieCallback,
   minSwipe: number = 50
) => {
   const [touchStart, setTouchStart] = useState<number | null>(null);
   const [touchEnd, setTouchEnd] = useState<number | null>(null);
   const [swipeDirection, setSwipeDirection] = useState<
      "left" | "right" | null
   >(null);

   const onStart = (pos: number) => {
      setTouchEnd(null);
      setTouchStart(pos);
   };

   const onMove = (pos: number) => setTouchEnd(pos);

   const onEnd = () => {
      if (touchStart === null || touchEnd === null) return;

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
   const onMouseDown = (e: React.MouseEvent) => onStart(e.clientX);
   const onMouseMove = (e: React.MouseEvent) => onMove(e.clientX);
   const onMouseUp = () => onEnd();

   // mobile version swipe event handlers
   const onTouchStart = (e: React.TouchEvent) =>
      onStart(e.targetTouches[0].clientX);
   const onTouchMove = (e: React.TouchEvent) =>
      onMove(e.targetTouches[0].clientX);
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
