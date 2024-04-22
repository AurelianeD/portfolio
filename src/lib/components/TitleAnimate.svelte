<script lang="ts">
    import {tweened} from "svelte/motion";
    import {cubicOut} from "svelte/easing";

    const black = tweened(0, { duration: 500 });
    const transparent = tweened(0, {duration: 500})

    function handleMouseEnter(){
        black.set(1);
        transparent.set(0)
    }

    function handleMouseLeave(){
        black.set(0);
        transparent.set(1)
    }

</script>

<div
    on:mouseenter={handleMouseEnter}
    on:mouseleave={handleMouseLeave}
    on:touchstart={handleMouseEnter}
    on:touchend={handleMouseLeave}
    style="background-image: linear-gradient(to left, transparent {$transparent}%, black {$black * 100}%);"
>
    <slot />
</div>

<style>
    div{
        display: block;
        width: fit-content;
        /*background-image: linear-gradient(to right, transparent 50%, black 50%);*/
    }
</style>
