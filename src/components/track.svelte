<script>
    import { onMount } from 'svelte';
    export let target, title = "projects"
    let current, total, autoplay, autoslide

    onMount(() => {
        current = 1
        autoplay = true
        target = document.querySelector(target)
        total = target.children.length
        // toggleAutoSlide()
    })
    
    function prev(){
        current = current > 1 ? current - 1 : total
        target.children[current - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        // target.parentNode.scrollTop = target.offsetTop
    }
    function next(){
        current = current < total ? current + 1 : 1
        target.children[current - 1].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' })
        // target.parentNode.scrollTop = target.offsetTop
    }
    function toggleAutoSlide(){
        if(!autoplay)
            clearInterval(autoslide)
        else{
            autoslide = setInterval(() => {
                next()
            }, 3000)
        }
    }
</script>
<div>
    <div class="flex">
        <!-- <div class="mr-5">
            <input type="checkbox" bind:checked={autoplay} on:change={toggleAutoSlide}>
            <label>Autoplay</label>
        </div> -->
        <button class="mr-3" on:click|preventDefault={prev}>&larr; Prev</button>
        <button class="mr-3" on:click|preventDefault={next}>Next &rarr;</button>
        <h1>
            {current} of {total} total {title}
        </h1>
    </div>
</div>