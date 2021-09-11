<script>
    export let title
</script>

<div class="grid grid-cols-1 gap-y-8 w-full">
    <div class="flex flex-col w-full">
        <a href="https://devicon.dev/" class="hover:underline"><small>* Icons provided by <span class="underline">Devicon.dev</span></small></a>
        <small>** Just exploration (no real project yet)</small>
        <h1 class="text-lg font-semibold mt-3">{title}</h1>
    </div>
    <div class="grid grid-cols-4 gap-y-8 w-full h-full">
        <slot></slot>
    </div>
</div>

<style>
    div {
        flex: 0 0 100%;
    }
</style>