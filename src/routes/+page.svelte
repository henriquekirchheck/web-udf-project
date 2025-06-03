<script lang="ts">
  import About from "$lib/components/About.svelte";
  import LandingCarrousel from "$lib/components/LandingCarrousel.svelte";
  import Navbar from "$lib/components/Navbar.svelte";
  import Ordering from "$lib/components/Ordering.svelte";
  import * as Card from "$lib/components/ui/card";
</script>

<Navbar />
<LandingCarrousel />
<About />
<Ordering />
<div class="flex items-center justify-center">
  <Card.Root id="localizacao" class="max-w-xl w-full">
    <Card.Content>
      <Card.Header>Onde nós encontrar</Card.Header>
      <iframe
        title="Localização"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15356.771278090991!2d-47.88687002653067!3d-15.793783696140032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3ae239e259a5%3A0xb625a2ee5bc38172!2sCentral!5e0!3m2!1spt-BR!2sbr!4v1748990668782!5m2!1spt-BR!2sbr"
        width="100%"
        height="500"
        style="border:0;"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </Card.Content>
  </Card.Root>
</div>
