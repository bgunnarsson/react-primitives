// src/components/Carousel/Carousel.tsx
import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import { jsx } from "react/jsx-runtime";
var CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a Carousel");
  return context;
}
var Carousel = React.forwardRef(
  ({ opts, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(opts);
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);
    const onSelect = React.useCallback((api2) => {
      if (!api2) return;
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    React.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx(
      CarouselContext.Provider,
      {
        value: {
          carouselRef,
          api,
          scrollPrev: () => api?.scrollPrev(),
          scrollNext: () => api?.scrollNext(),
          canScrollPrev,
          canScrollNext
        },
        children: /* @__PURE__ */ jsx("div", { ref, className, ...props, children })
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef } = useCarousel();
    return /* @__PURE__ */ jsx("div", { ref: carouselRef, style: { overflow: "hidden" }, children: /* @__PURE__ */ jsx("div", { ref, className, ...props }) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx("div", { ref, role: "group", "aria-roledescription": "slide", className, ...props })
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className,
        disabled: !canScrollPrev,
        "aria-label": "Previous slide",
        onClick: (e) => {
          scrollPrev();
          onClick?.(e);
        },
        ...props
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = React.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        className,
        disabled: !canScrollNext,
        "aria-label": "Next slide",
        onClick: (e) => {
          scrollNext();
          onClick?.(e);
        },
        ...props
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";

export {
  useCarousel,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext
};
//# sourceMappingURL=chunk-M2YKZFZT.js.map