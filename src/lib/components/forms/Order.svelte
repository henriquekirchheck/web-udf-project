<script lang="ts" module>
  import { z } from "zod";

  export const formSchema = z.object({
    name: z.string().nonempty(),
    email: z.string().email(),
    address: z.string().nonempty(),
    flavours: z.enum(["Chocolate", "Doce de Leite", "Banana", "Limão", "Uva"]).array(),
  });

  export type FormSchema = typeof formSchema;
</script>

<script lang="ts">
  import * as Dialog from "$lib/components/ui/dialog";
  import * as Form from "$lib/components/ui/form";
  import { Input } from "$lib/components/ui/input";
  import * as Select from "$lib/components/ui/select";
  import { superForm, defaults } from "sveltekit-superforms";
  import { zod, zodClient } from "sveltekit-superforms/adapters";
  import Button, { buttonVariants } from "../ui/button/button.svelte";

  const form = superForm(defaults(zod(formSchema)), {
    SPA: true,
    validators: zodClient(formSchema),
    onUpdate({ form }) {
      open = true;
    },
  });

  const { form: formData, enhance } = form;

  let open = $state(false);
</script>

<form method="POST" use:enhance id="encomendas">
  <Form.Field {form} name="name">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Nome</Form.Label>
        <Input {...props} bind:value={$formData.name} />
      {/snippet}
    </Form.Control>
    <Form.Description>Seu nome completo</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="email">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Email</Form.Label>
        <Input {...props} type="email" bind:value={$formData.email} />
      {/snippet}
    </Form.Control>
    <Form.Description>Email para contato</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="address">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Endereço</Form.Label>
        <Input {...props} bind:value={$formData.address} />
      {/snippet}
    </Form.Control>
    <Form.Description>Endereço para entrega</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Field {form} name="flavours">
    <Form.Control>
      {#snippet children({ props })}
        <Form.Label>Sabores</Form.Label>
        <Select.Root type="multiple" bind:value={$formData.flavours} name={props.name}>
          <Select.Trigger {...props} class="w-full">
            {$formData.flavours.length !== 0
              ? $formData.flavours.join(", ")
              : "Selecione um ou mais sabores"}
          </Select.Trigger>
          <Select.Content>
            <Select.Item value="Chocolate" label="Chocolate">Chocolate</Select.Item>
            <Select.Item value="Doce de Leite" label="Doce de Leite">Doce de Leite</Select.Item>
            <Select.Item value="Banana" label="Banana">Banana</Select.Item>
            <Select.Item value="Limão" label="Limão">Limão</Select.Item>
            <Select.Item value="Uva" label="Uva">Uva</Select.Item>
          </Select.Content>
        </Select.Root>
      {/snippet}
    </Form.Control>
    <Form.Description>Sabores incluidos na encomenda</Form.Description>
    <Form.FieldErrors />
  </Form.Field>
  <Form.Button class="w-full">Enviar</Form.Button>
</form>

<Dialog.Root bind:open>
  <Dialog.Content>
    <Dialog.Content>
      <Dialog.Header>Confirmar encomenda?</Dialog.Header>
      Você não pode cancelar sua encomenda depois de feita.
      <Dialog.Footer>
          <Button
            class={buttonVariants({ variant: "destructive" })}
            onclick={() => {
              open = false;
            }}>Cancelar</Button
          >
        <Button
          class={buttonVariants({ variant: "outline" })}
          onclick={() => {
            open = false;
          }}>Confirmar!</Button
        >
      </Dialog.Footer>
    </Dialog.Content>
  </Dialog.Content>
</Dialog.Root>
