<script module lang="ts">
  import { cva } from "class-variance-authority";
  export const navigationMenuTriggerStyle = cva(
    "group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:text-accent-foreground data-[state=open]:bg-accent/50 data-[state=open]:hover:bg-accent data-[state=open]:focus:bg-accent"
  );
</script>

<script lang="ts">
  import { cn } from "$lib/utils";
  import ChevronDown from "@lucide/svelte/icons/chevron-down";
  import { NavigationMenu, type NavigationMenuTriggerProps } from "bits-ui";
  let { class: clazz, children, ...props }: NavigationMenuTriggerProps = $props();
</script>

<NavigationMenu.Trigger class={cn(navigationMenuTriggerStyle(), "group", clazz)} {...props}>
  {#if children}
    {@render children()}
  {/if}
  <ChevronDown
    className="relative top-[1px] ml-1 h-3 w-3 transition duration-200 group-data-[state=open]:rotate-180"
    aria-hidden="true"
  />
</NavigationMenu.Trigger>
