<script>
    export let thing = 'Svelte in Meteor'
    $: showMe = window.location.href.endsWith('/svelte')
</script>

{showMe}
{#if showMe}
    Hi from {thing}!
{/if}