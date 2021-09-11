<script>
    export let period, title, description, image, source, link
</script>
<div>
    <h3 class="text-sm">{period}</h3>
    <p class="text-lg font-semibold mb-1">{title}</p>
    <small>
        {description}
        {#if source}
            &middot; &#128073; <a class="hover:underline" href={source}>Source code</a>
        {/if}
        {#if link}
            &middot; &#128073; <a class="hover:underline" href={link}>Link to project</a>
        {/if}
    </small>
    <img class="mt-4 w-96" src={`../${image}`} alt={title}>
</div>

<style>
    div {
        flex: 0 0 100%;
    }
</style>