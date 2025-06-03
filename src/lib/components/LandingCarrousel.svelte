<script lang="ts">
  import * as Card from "$lib/components/ui/card";
  import * as Carousel from "$lib/components/ui/carousel";
  import Autoplay from "embla-carousel-autoplay";

  const autoplay = Autoplay({
    delay: 2000,
  });
</script>

<Carousel.Root
  opts={{
    align: "center",
    loop: true,
  }}
  plugins={[autoplay]}
  onmouseenter={autoplay.stop}
  onmouseleave={autoplay.reset}
  id="ofertas"
>
  <Carousel.Content class="ml-0 h-96 w-full">
    {#each Array(5) as _, i (i)}
      <Carousel.Item class="pl-0">
        <div class="h-full w-full p-1">
          <Card.Root class="h-full w-full">
            <Card.Content class="flex h-full w-full items-center justify-center p-6">
              <span class="text-3xl font-semibold">{i + 1}</span>
            </Card.Content>
          </Card.Root>
        </div>
      </Carousel.Item>
    {/each}
  </Carousel.Content>
</Carousel.Root>
