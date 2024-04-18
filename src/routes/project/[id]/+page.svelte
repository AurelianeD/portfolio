<script lang="ts">
    import { page } from "$app/stores";
    import {projects} from "$lib/data";
    import Header from "$lib/components/Header.svelte";

    const id = $page.params.id;
    $: projectData = projects.find((item) => item.id === parseInt(id, 10))

</script>

<div class="flex flex-col md:flex-row mb-10">
    <Header />
    <div class="max-w-[80%] mx-auto md:ml-[26%] mt-[10%] md:mt-10 md:mr-[5%]">
        <h1>{projectData.title}</h1>
    </div>
</div>
