<script lang="ts">
  import { cn } from "$lib/utils";
  import { NavigationMenu } from "bits-ui";
  import NavigationMenuViewport from "./NavigationMenuViewport.svelte";

  let { class: clazz, children, ...props }: NavigationMenu.RootProps = $props();
</script>

<NavigationMenu.Root
  {...props}
  class={cn("relative z-10 flex max-w-max flex-1 items-center justify-center", clazz)}
>
  {#if children}
    {@render children()}
  {/if}
  <NavigationMenuViewport />
</NavigationMenu.Root>
