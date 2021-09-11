<script>
    export let name, icon
</script>
<div class="flex flex-col items-center space-y-3">
    <i class={`${icon} text-5xl`}></i>
    <h3 class="text-sm">{name}</h3>
</div>