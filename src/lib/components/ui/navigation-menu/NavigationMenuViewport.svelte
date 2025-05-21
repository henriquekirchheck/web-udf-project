<script lang="ts">
  import { cn } from "$lib/utils";
  import { NavigationMenu, type NavigationMenuViewportProps } from "bits-ui";

  let { class: clazz, ...props }: NavigationMenuViewportProps = $props();
</script>

<div class={cn("absolute top-full left-0 flex justify-center")}>
  <NavigationMenu.Viewport
    {...props}
    class={cn(
      "origin-top-center bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow-lg md:w-[var(--radix-navigation-menu-viewport-width)]",
      clazz
    )}
  />
</div>
