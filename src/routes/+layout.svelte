<script>
	import { injectAnalytics } from '@vercel/analytics/sveltekit'
	import { dev } from '$app/environment';
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import ThemeSwitcher from '$lib/components/themeSwitcher.svelte';
	import { getStructuredData } from '$lib/seo';
	import Seo from '$lib/components/seo.svelte';
	
	let { children } = $props();

	const siteData = {
        title: "Full Stack Developer Portfolio",
        description: "Professional portfolio showcasing my projects and skills",
        url: "https://yourportfolio.vercel.app"
    };
    
    const structuredData = getStructuredData();
	injectAnalytics({ mode: dev ? 'development' : 'production' });

</script>

<Seo 
    {...siteData}
    {structuredData}
/>
<div class="min-h-screen flex flex-col">
	<Navbar/>
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer/>
	<ThemeSwitcher/>
</div>
