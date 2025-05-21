<script lang="ts">
  import { cn } from "$lib/utils";
  import { NavigationMenu, type NavigationMenuListProps } from "bits-ui";
  let { class: clazz, ...props }: NavigationMenuListProps = $props();
</script>

<NavigationMenu.List
  {...props}
  class={cn("group flex flex-1 list-none items-center justify-center space-x-1", clazz)}
/>
