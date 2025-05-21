<script lang="ts">
  import { cn } from "$lib/utils";
  import { NavigationMenu, type NavigationMenuIndicatorProps } from "bits-ui";
  let { class: clazz, ...props }: NavigationMenuIndicatorProps = $props();
</script>

<NavigationMenu.Indicator
  {...props}
  class={cn(
    "data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
    clazz
  )}
>
  <div class="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md"></div>
</NavigationMenu.Indicator>
