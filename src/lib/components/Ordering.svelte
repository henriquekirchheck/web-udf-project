<script lang="ts">
    import Order from "./forms/Order.svelte";
    import * as Card from "./ui/card";
</script>

<div class="p-4  flex items-center justify-center">
    <Card.Root class="w-full max-w-xl">
        <Card.Header class="prose dark:prose-invert">
            <h3 class="text-center">Faça sua encomenda!</h3>
        </Card.Header>
        <Card.Content>
            <Order />
        </Card.Content>
    </Card.Root>
</div>