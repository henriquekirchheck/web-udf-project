<script lang="ts">
  import { cn } from "$lib/utils";
  import { NavigationMenu, type NavigationMenuContentProps } from "bits-ui";
  let { class: clazz, ...props }: NavigationMenuContentProps = $props();
</script>

<NavigationMenu.Content
  {...props}
  class={cn(
    "data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 top-0 left-0 w-full md:absolute md:w-auto",
    clazz
  )}
/>
