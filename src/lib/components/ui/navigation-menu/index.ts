import NavigationMenu from "./NavigationMenu.svelte";
import NavigationMenuContent from "./NavigationMenuContent.svelte";
import NavigationMenuIndicator from "./NavigationMenuIndicator.svelte";
import NavigationMenuList from "./NavigationMenuList.svelte";
import NavigationMenuTrigger, { navigationMenuTriggerStyle } from "./NavigationMenuTrigger.svelte";
import NavigationMenuViewport from "./NavigationMenuViewport.svelte";

import { NavigationMenu as NavigationMenuPrimitive } from "bits-ui";
const NavigationMenuItem = NavigationMenuPrimitive.Item;
const NavigationMenuLink = NavigationMenuPrimitive.Link;

export {
  NavigationMenuContent as Content,
  NavigationMenuIndicator as Indicator,
  NavigationMenuItem as Item,
  NavigationMenuLink as Link,
  NavigationMenuList as List,
  navigationMenuTriggerStyle,
  NavigationMenu as Root,
  NavigationMenuTrigger as Trigger,
  NavigationMenuViewport as Viewport,
};
