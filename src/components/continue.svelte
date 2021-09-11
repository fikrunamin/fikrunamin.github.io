<script>
    import {createEventDispatcher} from 'svelte'

    let dispatch = createEventDispatcher()

    export let link = "#"

    function goto(){
        dispatch('goto', link)
    }

</script>
<div class="w-full">
    <a href={link} class="flex items-center" on:click|preventDefault={goto}>
        <span class="hover:underline">Continue</span><span class="animate-bounce ml-3">&darr;</span>
    </a>
</div>