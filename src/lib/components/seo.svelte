<script>
    export let title = "Full Stack Developer Portfolio";
    export let description = "Professional portfolio showcasing my projects and skills";
    export let url = "https://my-portfolio-39ntj11wu-officialryder1s-projects.vercel.app/";
    export let image = "/cartoon.jpeg";
    export let structuredData = null;
</script>

<svelte:head>
    <!-- Basic Meta Tags -->
    <title>{title} | Developer Portfolio</title>
    <meta name="description" content={description} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={url} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content={url} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta name="twitter:image" content={image} />
    
    <!-- Canonical URL -->
    <link rel="canonical" href={url} />
    
    <!-- Structured Data -->
    {#if structuredData}
        <script type="application/ld+json">
            {structuredData.jsonld}
        </script>
    {/if}
</svelte:head>