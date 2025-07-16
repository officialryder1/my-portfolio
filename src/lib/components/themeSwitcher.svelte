<script>
  import { Sun, Moon, Monitor } from "@lucide/svelte";
  
  let theme = 'light';
  
  const setTheme = (newTheme) => {
    theme = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };
  
  $: if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }
</script>

<div class="dropdown dropdown-top fixed bottom-6 left-6 z-50">
  <label tabindex="0" class="btn btn-circle btn-primary shadow-lg">
    {#if theme === 'light'}
      <Sun size={20} />
    {:else if theme === 'dark'}
      <Moon size={20} />
    {:else}
      <Monitor size={20} />
    {/if}
  </label>
  <ul tabindex="0" class="dropdown-content menu p-2 shadow-2xl bg-base-300 rounded-box w-52">
    <li><button on:click={() => setTheme('light')} class="flex items-center">
      <Sun class="mr-2" size={16} /> Light
    </button></li>
    <li><button on:click={() => setTheme('dark')} class="flex items-center">
      <Moon class="mr-2" size={16} /> Dark
    </button></li>
    <li><button on:click={() => setTheme('cupcake')} class="flex items-center">
      <Monitor class="mr-2" size={16} /> Cupcake
    </button></li>
  </ul>
</div>