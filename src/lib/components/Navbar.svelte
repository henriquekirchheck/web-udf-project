<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import * as Sheet from "$lib/components/ui/sheet";
  import { cn } from "$lib/utils";
  import Menu from "@lucide/svelte/icons/menu";
  import ModeToggle from "./ModeToggle.svelte";

  type RouteProps = {
    href: string;
    label: string;
  };

  const routeList = [
    { href: "#features1", label: "Features I" },
    { href: "#features2", label: "Features II" },
    { href: "#features3", label: "Features III" },
    { href: "#features4", label: "Features IV" },
  ] satisfies RouteProps[];

  let open = $state(false);
</script>

<header
  class="dark:bg-background sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700"
>
  <NavigationMenu.Root class="mx-auto">
    <NavigationMenu.List class="container flex h-14 justify-between px-4 w-screen">
      <NavigationMenu.Item class="flex font-bold">
        <a href="/" rel="noreferrer noopener" class="ml-2 flex text-xl font-bold"> Cucas do Sul </a>
      </NavigationMenu.Item>

      <!-- mobile -->
      <span class="flex md:hidden">
        <ModeToggle />
        <Sheet.Root {open} onOpenChange={(val) => (open = val)}>
          <Sheet.Trigger class="px-2">
            <Menu class="flex h-5 w-5 md:hidden" onclick={() => (open = true)}>
              <span class="sr-only">Menu</span>
            </Menu>
          </Sheet.Trigger>
          <Sheet.Content side="right">
            <Sheet.Header>
              <Sheet.Title class="text-xl font-bold">Cucas do Sul</Sheet.Title>
            </Sheet.Header>
            <nav class="mt-4 flex flex-col items-center justify-center gap-2">
              {#each routeList as { href, label } (label)}
                <a
                  {href}
                  onclick={() => (open = false)}
                  rel="noreferrer noopener"
                  class={buttonVariants({ variant: "ghost" })}
                >
                  {label}
                </a>
              {/each}
            </nav>
          </Sheet.Content>
        </Sheet.Root>
      </span>

      <!-- desktop -->
      <nav class="hidden gap-2 md:flex">
        {#each routeList as { href, label } (label)}
          <a
            {href}
            onclick={() => (open = false)}
            rel="noreferrer noopener"
            class={cn(buttonVariants({ variant: "ghost" }), "text-lg")}
          >
            {label}
          </a>
        {/each}
      </nav>

      <div class="hidden gap-2 md:flex">
        <ModeToggle />
      </div>
    </NavigationMenu.List>
  </NavigationMenu.Root>
</header>
