<script>
	import '../app.css';
	import Navbar from '$lib/components/navbar.svelte';
	import Footer from '$lib/components/footer.svelte';
	import ThemeSwitcher from '$lib/components/themeSwitcher.svelte';
	let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
	<Navbar/>
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer/>
	<ThemeSwitcher/>
</div>
