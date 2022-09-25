<script>
    import ProjectList from '../../lib/projects/ProjectList.svelte';
    export let data;
</script>

<svelte:head>
    <title>Projects - Xun Zhou</title>
</svelte:head>

<ProjectList projects= {Object.values(data)}/>