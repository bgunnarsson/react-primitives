'use strict'
Object.defineProperty(exports, '__esModule', { value: true })
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}
function _optionalChain(ops) {
  let lastAccessLHS = undefined
  let value = ops[0]
  let i = 1
  while (i < ops.length) {
    const op = ops[i]
    const fn = ops[i + 1]
    i += 2
    if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {
      return undefined
    }
    if (op === 'access' || op === 'optionalAccess') {
      lastAccessLHS = value
      value = fn(value)
    } else if (op === 'call' || op === 'optionalCall') {
      value = fn((...args) => value.call(lastAccessLHS, ...args))
      lastAccessLHS = undefined
    }
  }
  return value
} // src/components/Carousel/Carousel.tsx
var _react = require('react')
var _react2 = _interopRequireDefault(_react)
var _emblacarouselreact = require('embla-carousel-react')
var _emblacarouselreact2 = _interopRequireDefault(_emblacarouselreact)
var _jsxruntime = require('react/jsx-runtime')
var CarouselContext = _react2.default.createContext(null)
function useCarousel() {
  const context = _react2.default.useContext(CarouselContext)
  if (!context) throw new Error('useCarousel must be used within a Carousel')
  return context
}
var Carousel = _react2.default.forwardRef(({ opts, className, children, ...props }, ref) => {
  const [carouselRef, api] = _emblacarouselreact2.default.call(void 0, opts)
  const [canScrollPrev, setCanScrollPrev] = _react2.default.useState(false)
  const [canScrollNext, setCanScrollNext] = _react2.default.useState(false)
  const onSelect = _react2.default.useCallback((api2) => {
    if (!api2) return
    setCanScrollPrev(api2.canScrollPrev())
    setCanScrollNext(api2.canScrollNext())
  }, [])
  _react2.default.useEffect(() => {
    if (!api) return
    onSelect(api)
    api.on('reInit', onSelect)
    api.on('select', onSelect)
    return () => {
      api.off('reInit', onSelect)
      api.off('select', onSelect)
    }
  }, [api, onSelect])
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, CarouselContext.Provider, {
    value: {
      carouselRef,
      api,
      scrollPrev: () => _optionalChain([api, 'optionalAccess', (_) => _.scrollPrev, 'call', (_2) => _2()]),
      scrollNext: () => _optionalChain([api, 'optionalAccess', (_3) => _3.scrollNext, 'call', (_4) => _4()]),
      canScrollPrev,
      canScrollNext,
    },
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', { ref, className, ...props, children }),
  })
})
Carousel.displayName = 'Carousel'
var CarouselContent = _react2.default.forwardRef(({ className, ...props }, ref) => {
  const { carouselRef } = useCarousel()
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', {
    ref: carouselRef,
    style: { overflow: 'hidden' },
    children: /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', { ref, className, ...props }),
  })
})
CarouselContent.displayName = 'CarouselContent'
var CarouselItem = _react2.default.forwardRef(({ className, ...props }, ref) =>
  /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'div', {
    ref,
    role: 'group',
    'aria-roledescription': 'slide',
    className,
    ...props,
  })
)
CarouselItem.displayName = 'CarouselItem'
var CarouselPrevious = _react2.default.forwardRef(({ className, onClick, ...props }, ref) => {
  const { scrollPrev, canScrollPrev } = useCarousel()
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'button', {
    ref,
    className,
    disabled: !canScrollPrev,
    'aria-label': 'Previous slide',
    onClick: (e) => {
      scrollPrev()
      _optionalChain([onClick, 'optionalCall', (_5) => _5(e)])
    },
    ...props,
  })
})
CarouselPrevious.displayName = 'CarouselPrevious'
var CarouselNext = _react2.default.forwardRef(({ className, onClick, ...props }, ref) => {
  const { scrollNext, canScrollNext } = useCarousel()
  return /* @__PURE__ */ _jsxruntime.jsx.call(void 0, 'button', {
    ref,
    className,
    disabled: !canScrollNext,
    'aria-label': 'Next slide',
    onClick: (e) => {
      scrollNext()
      _optionalChain([onClick, 'optionalCall', (_6) => _6(e)])
    },
    ...props,
  })
})
CarouselNext.displayName = 'CarouselNext'

exports.useCarousel = useCarousel
exports.Carousel = Carousel
exports.CarouselContent = CarouselContent
exports.CarouselItem = CarouselItem
exports.CarouselPrevious = CarouselPrevious
exports.CarouselNext = CarouselNext
