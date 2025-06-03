<script lang="ts">
  import { buttonVariants } from "$lib/components/ui/button";
  import * as NavigationMenu from "$lib/components/ui/navigation-menu";
  import * as Sheet from "$lib/components/ui/sheet";
  import { cn } from "$lib/utils";
  import Menu from "@lucide/svelte/icons/menu";
  import Dessert from "@lucide/svelte/icons/dessert";
  import ModeToggle from "./ModeToggle.svelte";
  import { base } from '$app/paths';

  type RouteProps = {
    href: string;
    label: string;
  };

  const routeList = [
    { href: "#ofertas", label: "Ofertas" },
    { href: "#sobre", label: "Sobre" },
    { href: "#encomendas", label: "Encomendas" },
    { href: "#localizacao", label: "Localização" },
  ] satisfies RouteProps[];

  const colors = ["#e64553", "#df8e1d", "#40a02b", "#04a5e5", "#dd7878"] as const;
  const pickRandom = <T extends readonly any[]>(arg: T): T[number] => {
    return arg[Math.floor(Math.random() * arg.length)]
  }

  let open = $state(false);
</script>

<header
  class="dark:bg-background sticky top-0 z-40 w-full border-b-[1px] bg-white dark:border-b-slate-700"
>
  <NavigationMenu.Root class="mx-auto">
    <NavigationMenu.List class="container flex h-14 w-screen justify-between px-4">
      <NavigationMenu.Item class="flex font-bold">
        <a href={base} rel="noreferrer noopener" class="flex text-xl font-bold items-center gap-2">
          <Dessert color={pickRandom(colors)}/> <span>Cucas do Sul</span>
        </a>
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
                  href={`${base}/${href}`}
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
            href={`${base}/${href}`}
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
