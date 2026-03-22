// src/components/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
var Button = ({ className, ...props }) => /* @__PURE__ */ jsx("button", { className, ...props });

// src/components/Text/Text.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var Text = ({ as: Tag = "p", className, ...props }) => /* @__PURE__ */ jsx2(Tag, { className, ...props });

// src/components/Input/Input.tsx
import React from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var Label = ({ className, ...props }) => /* @__PURE__ */ jsx3("label", { className, ...props });
var Input = React.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx3("input", { ref, className, ...props })
);
Input.displayName = "Input";

// src/components/Badge/Badge.tsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Badge = (props) => /* @__PURE__ */ jsx4("span", { ...props });

// src/components/Dialog/Dialog.tsx
import React2 from "react";
import * as RadixDialog from "@radix-ui/react-dialog";
import { jsx as jsx5, jsxs } from "react/jsx-runtime";
var Dialog = RadixDialog.Root;
var DialogTrigger = RadixDialog.Trigger;
var DialogPortal = RadixDialog.Portal;
var DialogClose = RadixDialog.Close;
var DialogTitle = RadixDialog.Title;
var DialogDescription = RadixDialog.Description;
var DialogOverlay = React2.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx5(RadixDialog.Overlay, { ref, className, ...props }));
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = React2.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx5(DialogOverlay, {}),
  /* @__PURE__ */ jsx5(RadixDialog.Content, { ref, className, ...props, children })
] }));
DialogContent.displayName = "DialogContent";

// src/components/Link/Link.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Link = ({ className, ...props }) => /* @__PURE__ */ jsx6("a", { className, ...props });

// src/components/Textarea/Textarea.tsx
import React3 from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var Textarea = React3.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx7("textarea", { ref, className, ...props })
);
Textarea.displayName = "Textarea";

// src/components/Card/Card.tsx
import { jsx as jsx8 } from "react/jsx-runtime";
var Card = ({ className, ...props }) => /* @__PURE__ */ jsx8("div", { className, ...props });
var CardHeader = ({ className, ...props }) => /* @__PURE__ */ jsx8("div", { className, ...props });
var CardBody = ({ className, ...props }) => /* @__PURE__ */ jsx8("div", { className, ...props });
var CardFooter = ({ className, ...props }) => /* @__PURE__ */ jsx8("div", { className, ...props });

// src/components/Alert/Alert.tsx
import { jsx as jsx9 } from "react/jsx-runtime";
var Alert = (props) => /* @__PURE__ */ jsx9("div", { role: "alert", ...props });
var AlertTitle = ({ as: Tag = "h5", ...props }) => /* @__PURE__ */ jsx9(Tag, { ...props });
var AlertDescription = (props) => /* @__PURE__ */ jsx9("p", { ...props });

// src/components/Skeleton/Skeleton.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var Skeleton = ({ className, ...props }) => /* @__PURE__ */ jsx10("div", { "aria-hidden": "true", className, ...props });

// src/components/Spinner/Spinner.tsx
import { jsx as jsx11 } from "react/jsx-runtime";
var Spinner = ({ className, size = 24, ...props }) => /* @__PURE__ */ jsx11(
  "svg",
  {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-label": "Loading",
    role: "status",
    className,
    ...props,
    children: /* @__PURE__ */ jsx11("path", { d: "M21 12a9 9 0 1 1-6.219-8.56" })
  }
);

// src/components/Separator/Separator.tsx
import React4 from "react";
import * as RadixSeparator from "@radix-ui/react-separator";
import { jsx as jsx12 } from "react/jsx-runtime";
var Separator = React4.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx12(RadixSeparator.Root, { ref, className, ...props }));
Separator.displayName = "Separator";

// src/components/Checkbox/Checkbox.tsx
import React5 from "react";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { jsx as jsx13 } from "react/jsx-runtime";
var Checkbox = React5.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx13(RadixCheckbox.Root, { ref, className, ...props, children: /* @__PURE__ */ jsx13(RadixCheckbox.Indicator, { children: /* @__PURE__ */ jsx13("svg", { width: "10", height: "8", viewBox: "0 0 10 8", fill: "none", children: /* @__PURE__ */ jsx13("path", { d: "M1 4L3.5 6.5L9 1", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) }) }));
Checkbox.displayName = "Checkbox";

// src/components/RadioGroup/RadioGroup.tsx
import React6 from "react";
import * as RadixRadioGroup from "@radix-ui/react-radio-group";
import { jsx as jsx14 } from "react/jsx-runtime";
var RadioGroup = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14(RadixRadioGroup.Root, { ref, className, ...props })
);
RadioGroup.displayName = "RadioGroup";
var RadioGroupItem = React6.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx14(RadixRadioGroup.Item, { ref, className, ...props, children: /* @__PURE__ */ jsx14(RadixRadioGroup.Indicator, {}) })
);
RadioGroupItem.displayName = "RadioGroupItem";

// src/components/Switch/Switch.tsx
import React7 from "react";
import * as RadixSwitch from "@radix-ui/react-switch";
import { jsx as jsx15 } from "react/jsx-runtime";
var Switch = React7.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx15(RadixSwitch.Root, { ref, className, ...props, children: /* @__PURE__ */ jsx15(RadixSwitch.Thumb, {}) })
);
Switch.displayName = "Switch";

// src/components/Select/Select.tsx
import React8 from "react";
import * as RadixSelect from "@radix-ui/react-select";
import { jsx as jsx16, jsxs as jsxs2 } from "react/jsx-runtime";
var Select = RadixSelect.Root;
var SelectGroup = RadixSelect.Group;
var SelectValue = RadixSelect.Value;
var SelectTrigger = React8.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs2(RadixSelect.Trigger, { ref, className, ...props, children: [
    children,
    /* @__PURE__ */ jsx16(RadixSelect.Icon, {})
  ] })
);
SelectTrigger.displayName = "SelectTrigger";
var SelectContent = React8.forwardRef(
  ({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx16(RadixSelect.Portal, { children: /* @__PURE__ */ jsx16(RadixSelect.Content, { ref, position, className, ...props, children: /* @__PURE__ */ jsx16(RadixSelect.Viewport, { children }) }) })
);
SelectContent.displayName = "SelectContent";
var SelectItem = React8.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs2(RadixSelect.Item, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx16(RadixSelect.ItemText, { children }),
    /* @__PURE__ */ jsx16(RadixSelect.ItemIndicator, {})
  ] })
);
SelectItem.displayName = "SelectItem";
var SelectLabel = React8.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16(RadixSelect.Label, { ref, className, ...props })
);
SelectLabel.displayName = "SelectLabel";
var SelectSeparator = React8.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx16(RadixSelect.Separator, { ref, className, ...props })
);
SelectSeparator.displayName = "SelectSeparator";

// src/components/Tabs/Tabs.tsx
import React9 from "react";
import * as RadixTabs from "@radix-ui/react-tabs";
import { jsx as jsx17 } from "react/jsx-runtime";
var Tabs = RadixTabs.Root;
var TabsList = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17(RadixTabs.List, { ref, className, ...props })
);
TabsList.displayName = "TabsList";
var TabsTrigger = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17(RadixTabs.Trigger, { ref, className, ...props })
);
TabsTrigger.displayName = "TabsTrigger";
var TabsContent = React9.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx17(RadixTabs.Content, { ref, className, ...props })
);
TabsContent.displayName = "TabsContent";

// src/components/Accordion/Accordion.tsx
import React10 from "react";
import * as RadixAccordion from "@radix-ui/react-accordion";
import { jsx as jsx18 } from "react/jsx-runtime";
var Accordion = RadixAccordion.Root;
var AccordionItem = React10.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx18(RadixAccordion.Item, { ref, ...props })
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = React10.forwardRef(
  ({ children, ...props }, ref) => /* @__PURE__ */ jsx18(RadixAccordion.Header, { children: /* @__PURE__ */ jsx18(RadixAccordion.Trigger, { ref, ...props, children }) })
);
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = React10.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx18(RadixAccordion.Content, { ref, ...props })
);
AccordionContent.displayName = "AccordionContent";

// src/components/Tooltip/Tooltip.tsx
import React11 from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import { jsx as jsx19 } from "react/jsx-runtime";
var TooltipProvider = RadixTooltip.Provider;
var Tooltip = RadixTooltip.Root;
var TooltipTrigger = RadixTooltip.Trigger;
var TooltipContent = React11.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx19(RadixTooltip.Portal, { children: /* @__PURE__ */ jsx19(RadixTooltip.Content, { ref, sideOffset, className, ...props }) })
);
TooltipContent.displayName = "TooltipContent";

// src/components/Popover/Popover.tsx
import React12 from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import { jsx as jsx20 } from "react/jsx-runtime";
var Popover = RadixPopover.Root;
var PopoverTrigger = RadixPopover.Trigger;
var PopoverClose = RadixPopover.Close;
var PopoverContent = React12.forwardRef(
  ({ className, align = "center", sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx20(RadixPopover.Portal, { children: /* @__PURE__ */ jsx20(RadixPopover.Content, { ref, align, sideOffset, className, ...props }) })
);
PopoverContent.displayName = "PopoverContent";

// src/components/DropdownMenu/DropdownMenu.tsx
import React13 from "react";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import { jsx as jsx21, jsxs as jsxs3 } from "react/jsx-runtime";
var DropdownMenu = RadixDropdownMenu.Root;
var DropdownMenuTrigger = RadixDropdownMenu.Trigger;
var DropdownMenuGroup = RadixDropdownMenu.Group;
var DropdownMenuSub = RadixDropdownMenu.Sub;
var DropdownMenuRadioGroup = RadixDropdownMenu.RadioGroup;
var DropdownMenuContent = React13.forwardRef(
  ({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx21(RadixDropdownMenu.Portal, { children: /* @__PURE__ */ jsx21(RadixDropdownMenu.Content, { ref, sideOffset, className, ...props }) })
);
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = React13.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21(RadixDropdownMenu.Item, { ref, className, ...props })
);
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = React13.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs3(RadixDropdownMenu.CheckboxItem, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx21(RadixDropdownMenu.ItemIndicator, {}),
    children
  ] })
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem = React13.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs3(RadixDropdownMenu.RadioItem, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx21(RadixDropdownMenu.ItemIndicator, {}),
    children
  ] })
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var DropdownMenuLabel = React13.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21(RadixDropdownMenu.Label, { ref, className, ...props })
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator = React13.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21(RadixDropdownMenu.Separator, { ref, className, ...props })
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuSubTrigger = React13.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsx21(RadixDropdownMenu.SubTrigger, { ref, className, ...props, children })
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent = React13.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx21(RadixDropdownMenu.SubContent, { ref, className, ...props })
);
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";

// src/components/Avatar/Avatar.tsx
import React14 from "react";
import * as RadixAvatar from "@radix-ui/react-avatar";
import { jsx as jsx22 } from "react/jsx-runtime";
var Avatar = React14.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx22(RadixAvatar.Root, { ref, ...props })
);
Avatar.displayName = "Avatar";
var AvatarImage = React14.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx22(RadixAvatar.Image, { ref, ...props })
);
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = React14.forwardRef(
  (props, ref) => /* @__PURE__ */ jsx22(RadixAvatar.Fallback, { ref, ...props })
);
AvatarFallback.displayName = "AvatarFallback";

// src/components/Progress/Progress.tsx
import React15 from "react";
import * as RadixProgress from "@radix-ui/react-progress";
import { jsx as jsx23 } from "react/jsx-runtime";
var Progress = React15.forwardRef(
  ({ className, value, ...props }, ref) => /* @__PURE__ */ jsx23(RadixProgress.Root, { ref, value, className, ...props, children: /* @__PURE__ */ jsx23(RadixProgress.Indicator, { style: { transform: `translateX(-${100 - (value ?? 0)}%)` } }) })
);
Progress.displayName = "Progress";

// src/components/ScrollArea/ScrollArea.tsx
import React16 from "react";
import * as RadixScrollArea from "@radix-ui/react-scroll-area";
import { jsx as jsx24, jsxs as jsxs4 } from "react/jsx-runtime";
var ScrollArea = React16.forwardRef(
  ({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs4(RadixScrollArea.Root, { ref, className, ...props, children: [
    /* @__PURE__ */ jsx24(RadixScrollArea.Viewport, { children }),
    /* @__PURE__ */ jsx24(RadixScrollArea.Scrollbar, { orientation: "vertical", children: /* @__PURE__ */ jsx24(RadixScrollArea.Thumb, {}) }),
    /* @__PURE__ */ jsx24(RadixScrollArea.Scrollbar, { orientation: "horizontal", children: /* @__PURE__ */ jsx24(RadixScrollArea.Thumb, {}) }),
    /* @__PURE__ */ jsx24(RadixScrollArea.Corner, {})
  ] })
);
ScrollArea.displayName = "ScrollArea";

// src/components/AspectRatio/AspectRatio.tsx
import * as RadixAspectRatio from "@radix-ui/react-aspect-ratio";
var AspectRatio = RadixAspectRatio.Root;

// src/components/Collapsible/Collapsible.tsx
import React17 from "react";
import * as RadixCollapsible from "@radix-ui/react-collapsible";
import { jsx as jsx25 } from "react/jsx-runtime";
var Collapsible = RadixCollapsible.Root;
var CollapsibleTrigger = RadixCollapsible.Trigger;
var CollapsibleContent = React17.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx25(RadixCollapsible.Content, { ref, className, ...props })
);
CollapsibleContent.displayName = "CollapsibleContent";

// src/components/Toggle/Toggle.tsx
import React18 from "react";
import * as RadixToggle from "@radix-ui/react-toggle";
import { jsx as jsx26 } from "react/jsx-runtime";
var Toggle = React18.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx26(RadixToggle.Root, { ref, className, ...props })
);
Toggle.displayName = "Toggle";

// src/components/Table/Table.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
var Table = ({ className, ...props }) => /* @__PURE__ */ jsx27("div", { style: { overflowX: "auto" }, children: /* @__PURE__ */ jsx27("table", { className, ...props }) });
var TableHeader = ({ className, ...props }) => /* @__PURE__ */ jsx27("thead", { className, ...props });
var TableBody = ({ className, ...props }) => /* @__PURE__ */ jsx27("tbody", { className, ...props });
var TableFooter = ({ className, ...props }) => /* @__PURE__ */ jsx27("tfoot", { className, ...props });
var TableRow = ({ className, ...props }) => /* @__PURE__ */ jsx27("tr", { className, ...props });
var TableHead = ({ className, ...props }) => /* @__PURE__ */ jsx27("th", { className, ...props });
var TableCell = ({ className, ...props }) => /* @__PURE__ */ jsx27("td", { className, ...props });
var TableCaption = ({ className, ...props }) => /* @__PURE__ */ jsx27("caption", { className, ...props });

// src/components/Nav/Nav.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var Nav = ({ className, ...props }) => /* @__PURE__ */ jsx28("nav", { className, ...props });
var NavList = ({ className, ...props }) => /* @__PURE__ */ jsx28("ul", { className, ...props });
var NavItem = ({ className, ...props }) => /* @__PURE__ */ jsx28("li", { className, ...props });

// src/components/Breadcrumb/Breadcrumb.tsx
import { jsx as jsx29 } from "react/jsx-runtime";
var Breadcrumb = (props) => /* @__PURE__ */ jsx29("nav", { "aria-label": "breadcrumb", ...props });
var BreadcrumbList = (props) => /* @__PURE__ */ jsx29("ol", { ...props });
var BreadcrumbItem = (props) => /* @__PURE__ */ jsx29("li", { ...props });
var BreadcrumbLink = (props) => /* @__PURE__ */ jsx29("a", { ...props });
var BreadcrumbPage = (props) => /* @__PURE__ */ jsx29("span", { "aria-current": "page", ...props });
var BreadcrumbSeparator = (props) => /* @__PURE__ */ jsx29("span", { "aria-hidden": "true", ...props });

// src/components/Sheet/Sheet.tsx
import React19 from "react";
import * as RadixDialog2 from "@radix-ui/react-dialog";
import { jsx as jsx30, jsxs as jsxs5 } from "react/jsx-runtime";
var Sheet = RadixDialog2.Root;
var SheetTrigger = RadixDialog2.Trigger;
var SheetPortal = RadixDialog2.Portal;
var SheetClose = RadixDialog2.Close;
var SheetTitle = RadixDialog2.Title;
var SheetDescription = RadixDialog2.Description;
var SheetOverlay = React19.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx30(RadixDialog2.Overlay, { ref, className, ...props }));
SheetOverlay.displayName = "SheetOverlay";
var SheetContent = React19.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs5(SheetPortal, { children: [
  /* @__PURE__ */ jsx30(SheetOverlay, {}),
  /* @__PURE__ */ jsx30(RadixDialog2.Content, { ref, "data-side": side, className, ...props, children })
] }));
SheetContent.displayName = "SheetContent";

// src/components/AlertDialog/AlertDialog.tsx
import React20 from "react";
import * as RadixAlertDialog from "@radix-ui/react-alert-dialog";
import { jsx as jsx31, jsxs as jsxs6 } from "react/jsx-runtime";
var AlertDialog = RadixAlertDialog.Root;
var AlertDialogTrigger = RadixAlertDialog.Trigger;
var AlertDialogPortal = RadixAlertDialog.Portal;
var AlertDialogTitle = RadixAlertDialog.Title;
var AlertDialogDescription = RadixAlertDialog.Description;
var AlertDialogAction = RadixAlertDialog.Action;
var AlertDialogCancel = RadixAlertDialog.Cancel;
var AlertDialogOverlay = React20.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx31(RadixAlertDialog.Overlay, { ref, className, ...props }));
AlertDialogOverlay.displayName = "AlertDialogOverlay";
var AlertDialogContent = React20.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs6(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx31(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx31(RadixAlertDialog.Content, { ref, className, ...props, children })
] }));
AlertDialogContent.displayName = "AlertDialogContent";

// src/components/NavigationMenu/NavigationMenu.tsx
import React21 from "react";
import * as RadixNavigationMenu from "@radix-ui/react-navigation-menu";
import { jsx as jsx32, jsxs as jsxs7 } from "react/jsx-runtime";
var NavigationMenu = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs7(RadixNavigationMenu.Root, { ref, className, ...props, children: [
  children,
  /* @__PURE__ */ jsx32(NavigationMenuViewport, {})
] }));
NavigationMenu.displayName = "NavigationMenu";
var NavigationMenuList = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(RadixNavigationMenu.List, { ref, className, ...props }));
NavigationMenuList.displayName = "NavigationMenuList";
var NavigationMenuItem = RadixNavigationMenu.Item;
var NavigationMenuTrigger = React21.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx32(RadixNavigationMenu.Trigger, { ref, className, ...props, children }));
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
var NavigationMenuContent = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(RadixNavigationMenu.Content, { ref, className, ...props }));
NavigationMenuContent.displayName = "NavigationMenuContent";
var NavigationMenuLink = RadixNavigationMenu.Link;
var NavigationMenuViewport = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32("div", { children: /* @__PURE__ */ jsx32(RadixNavigationMenu.Viewport, { ref, className, ...props }) }));
NavigationMenuViewport.displayName = "NavigationMenuViewport";
var NavigationMenuIndicator = React21.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx32(RadixNavigationMenu.Indicator, { ref, className, ...props }));
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

// src/components/Toast/Toast.tsx
import { Toaster, toast } from "sonner";

// src/components/Carousel/Carousel.tsx
import React22 from "react";
import useEmblaCarousel from "embla-carousel-react";
import { jsx as jsx33 } from "react/jsx-runtime";
var CarouselContext = React22.createContext(null);
function useCarousel() {
  const context = React22.useContext(CarouselContext);
  if (!context) throw new Error("useCarousel must be used within a Carousel");
  return context;
}
var Carousel = React22.forwardRef(
  ({ opts, className, children, ...props }, ref) => {
    const [carouselRef, api] = useEmblaCarousel(opts);
    const [canScrollPrev, setCanScrollPrev] = React22.useState(false);
    const [canScrollNext, setCanScrollNext] = React22.useState(false);
    const onSelect = React22.useCallback((api2) => {
      if (!api2) return;
      setCanScrollPrev(api2.canScrollPrev());
      setCanScrollNext(api2.canScrollNext());
    }, []);
    React22.useEffect(() => {
      if (!api) return;
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api.off("reInit", onSelect);
        api.off("select", onSelect);
      };
    }, [api, onSelect]);
    return /* @__PURE__ */ jsx33(
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
        children: /* @__PURE__ */ jsx33("div", { ref, className, ...props, children })
      }
    );
  }
);
Carousel.displayName = "Carousel";
var CarouselContent = React22.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef } = useCarousel();
    return /* @__PURE__ */ jsx33("div", { ref: carouselRef, style: { overflow: "hidden" }, children: /* @__PURE__ */ jsx33("div", { ref, className, ...props }) });
  }
);
CarouselContent.displayName = "CarouselContent";
var CarouselItem = React22.forwardRef(
  ({ className, ...props }, ref) => /* @__PURE__ */ jsx33("div", { ref, role: "group", "aria-roledescription": "slide", className, ...props })
);
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = React22.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsx33(
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
var CarouselNext = React22.forwardRef(
  ({ className, onClick, ...props }, ref) => {
    const { scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsx33(
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

// src/components/Drawer/Drawer.tsx
import { Drawer as VaulDrawer } from "vaul";
var Drawer = VaulDrawer.Root;
var DrawerTrigger = VaulDrawer.Trigger;
var DrawerPortal = VaulDrawer.Portal;
var DrawerOverlay = VaulDrawer.Overlay;
var DrawerContent = VaulDrawer.Content;
var DrawerHandle = VaulDrawer.Handle;
var DrawerClose = VaulDrawer.Close;
var DrawerTitle = VaulDrawer.Title;
var DrawerDescription = VaulDrawer.Description;

// src/components/Icon/Icon.tsx
import { jsx as jsx34 } from "react/jsx-runtime";
var Icon2 = ({
  name,
  mode = "sprite",
  spriteHref = "/icons.svg",
  size = 24,
  className,
  ...props
}) => {
  if (mode === "external") {
    return /* @__PURE__ */ jsx34(
      "img",
      {
        src: `/icons/${name}.svg`,
        "aria-hidden": "true",
        width: size,
        height: size,
        className
      }
    );
  }
  return /* @__PURE__ */ jsx34(
    "svg",
    {
      width: size,
      height: size,
      "aria-hidden": "true",
      className,
      ...props,
      children: /* @__PURE__ */ jsx34("use", { href: `${spriteHref}#${name}` })
    }
  );
};

// src/components/Picture/Picture.tsx
import { jsx as jsx35, jsxs as jsxs8 } from "react/jsx-runtime";
var Picture = ({
  src,
  alt,
  sources = [],
  loading = "lazy",
  width,
  height,
  imgClassName,
  className,
  ...props
}) => /* @__PURE__ */ jsxs8("picture", { className, ...props, children: [
  sources.map((source, i) => /* @__PURE__ */ jsx35("source", { ...source }, i)),
  /* @__PURE__ */ jsx35(
    "img",
    {
      src,
      alt,
      loading,
      width,
      height,
      className: imgClassName
    }
  )
] });

// src/components/ToggleGroup/ToggleGroup.tsx
import React23 from "react";
import * as RadixToggleGroup from "@radix-ui/react-toggle-group";
import { jsx as jsx36 } from "react/jsx-runtime";
var ToggleGroup = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(RadixToggleGroup.Root, { ref, className, ...props }));
ToggleGroup.displayName = "ToggleGroup";
var ToggleGroupItem = React23.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx36(RadixToggleGroup.Item, { ref, className, ...props }));
ToggleGroupItem.displayName = "ToggleGroupItem";

// src/components/Form/Form.tsx
import React24 from "react";
import { Slot } from "@radix-ui/react-slot";
import { jsx as jsx37 } from "react/jsx-runtime";
var FormFieldContext = React24.createContext({ id: "" });
var FormField = ({ id: idProp, error, children, className, ...props }) => {
  const generatedId = React24.useId();
  const id = idProp ?? generatedId;
  return /* @__PURE__ */ jsx37(FormFieldContext.Provider, { value: { id, error }, children: /* @__PURE__ */ jsx37("div", { className, ...props, children }) });
};
var FormLabel = React24.forwardRef(
  ({ className, ...props }, ref) => {
    const { id } = React24.useContext(FormFieldContext);
    return /* @__PURE__ */ jsx37("label", { ref, htmlFor: id, className, ...props });
  }
);
FormLabel.displayName = "FormLabel";
var FormControl = React24.forwardRef(
  ({ ...props }, ref) => {
    const { id, error } = React24.useContext(FormFieldContext);
    return /* @__PURE__ */ jsx37(
      Slot,
      {
        ref,
        id,
        "aria-invalid": error ? true : void 0,
        "aria-describedby": error ? `${id}-message` : void 0,
        ...props
      }
    );
  }
);
FormControl.displayName = "FormControl";
var FormMessage = React24.forwardRef(
  ({ className, children, ...props }, ref) => {
    const { id, error } = React24.useContext(FormFieldContext);
    const message = error ?? children;
    if (!message) return null;
    return /* @__PURE__ */ jsx37("p", { ref, id: `${id}-message`, role: "alert", className, ...props, children: message });
  }
);
FormMessage.displayName = "FormMessage";

// src/components/VideoPlayer/VideoPlayer.tsx
import React25 from "react";
import { jsx as jsx38 } from "react/jsx-runtime";
var VideoPlayer = React25.forwardRef(
  ({ src, poster, className, ...props }, ref) => /* @__PURE__ */ jsx38("video", { ref, src, poster, className, ...props })
);
VideoPlayer.displayName = "VideoPlayer";

// src/components/Richtext/Richtext.tsx
import { jsx as jsx39 } from "react/jsx-runtime";
var Richtext = ({ html, className, ...props }) => (
  // eslint-disable-next-line react/no-danger
  /* @__PURE__ */ jsx39("div", { dangerouslySetInnerHTML: { __html: html }, className, ...props })
);

// src/components/HoverCard/HoverCard.tsx
import React26 from "react";
import * as RadixHoverCard from "@radix-ui/react-hover-card";
import { jsx as jsx40 } from "react/jsx-runtime";
var HoverCard = RadixHoverCard.Root;
var HoverCardTrigger = RadixHoverCard.Trigger;
var HoverCardContent = React26.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx40(RadixHoverCard.Portal, { children: /* @__PURE__ */ jsx40(RadixHoverCard.Content, { ref, className, ...props }) }));
HoverCardContent.displayName = "HoverCardContent";

// src/components/ContextMenu/ContextMenu.tsx
import React27 from "react";
import * as RadixContextMenu from "@radix-ui/react-context-menu";
import { jsx as jsx41, jsxs as jsxs9 } from "react/jsx-runtime";
var ContextMenu = RadixContextMenu.Root;
var ContextMenuTrigger = RadixContextMenu.Trigger;
var ContextMenuGroup = RadixContextMenu.Group;
var ContextMenuSub = RadixContextMenu.Sub;
var ContextMenuRadioGroup = RadixContextMenu.RadioGroup;
var ContextMenuContent = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx41(RadixContextMenu.Portal, { children: /* @__PURE__ */ jsx41(RadixContextMenu.Content, { ref, className, ...props }) }));
ContextMenuContent.displayName = "ContextMenuContent";
var ContextMenuItem = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx41(RadixContextMenu.Item, { ref, className, ...props }));
ContextMenuItem.displayName = "ContextMenuItem";
var ContextMenuCheckboxItem = React27.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs9(RadixContextMenu.CheckboxItem, { ref, className, ...props, children: [
  /* @__PURE__ */ jsx41(RadixContextMenu.ItemIndicator, {}),
  children
] }));
ContextMenuCheckboxItem.displayName = "ContextMenuCheckboxItem";
var ContextMenuRadioItem = React27.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs9(RadixContextMenu.RadioItem, { ref, className, ...props, children: [
  /* @__PURE__ */ jsx41(RadixContextMenu.ItemIndicator, {}),
  children
] }));
ContextMenuRadioItem.displayName = "ContextMenuRadioItem";
var ContextMenuLabel = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx41(RadixContextMenu.Label, { ref, className, ...props }));
ContextMenuLabel.displayName = "ContextMenuLabel";
var ContextMenuSeparator = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx41(RadixContextMenu.Separator, { ref, className, ...props }));
ContextMenuSeparator.displayName = "ContextMenuSeparator";
var ContextMenuSubTrigger = React27.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsx41(RadixContextMenu.SubTrigger, { ref, className, ...props, children }));
ContextMenuSubTrigger.displayName = "ContextMenuSubTrigger";
var ContextMenuSubContent = React27.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx41(RadixContextMenu.Portal, { children: /* @__PURE__ */ jsx41(RadixContextMenu.SubContent, { ref, className, ...props }) }));
ContextMenuSubContent.displayName = "ContextMenuSubContent";

// src/components/Lightbox/Lightbox.tsx
import DefaultLightbox from "yet-another-react-lightbox";
import { jsx as jsx42 } from "react/jsx-runtime";
var Lightbox = (props) => /* @__PURE__ */ jsx42(DefaultLightbox, { ...props });
export {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Alert,
  AlertDescription,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogOverlay,
  AlertDialogPortal,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertTitle,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerHandle,
  DrawerOverlay,
  DrawerPortal,
  DrawerTitle,
  DrawerTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Icon2 as Icon,
  Input,
  Label,
  Lightbox,
  Link,
  Nav,
  NavItem,
  NavList,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  Picture,
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
  Progress,
  RadioGroup,
  RadioGroupItem,
  Richtext,
  ScrollArea,
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetOverlay,
  SheetPortal,
  SheetTitle,
  SheetTrigger,
  Skeleton,
  Spinner,
  Switch,
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Text,
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  VideoPlayer,
  toast,
  useCarousel
};
//# sourceMappingURL=index.js.map