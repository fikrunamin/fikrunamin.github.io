<script>
    export let title
    export let id
</script>
<div class="flex items-center text-right h-full" id={id}>
    <div>
        <div class="flex justify-end">
            <h3 class="font-bold text-6xl text-gray-900 z-10">{title}</h3>
        </div>
        <div class="flex justify-end mt-8">
            <div class="bg-gray-900 w-full z-0 h-1 absolute"></div>
        </div>
    </div>
</div>