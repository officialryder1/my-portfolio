<script>
  import { Menu, X, Code, Home, User, Briefcase, MessageSquare } from "@lucide/svelte";
  import { fade } from 'svelte/transition';
  
  let mobileMenuOpen = false;
</script>

<nav class="navbar fixed top-0 z-50 bg-base-100/90 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl">
  <div class="container mx-auto px-6">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl font-bold text-primary hover:scale-105 transition-transform">
        <Code class="mr-2" /> DevPortfolio
      </a>
    </div>
    
    <div class="flex-none hidden md:block">
      <ul class="menu menu-horizontal px-1 gap-2">
        <li>
          <a href="#home" class="hover:text-accent flex items-center">
            <Home class="mr-1" /> Home
          </a>
        </li>
        <li>
          <a href="#about" class="hover:text-accent flex items-center">
            <User class="mr-1" /> About
          </a>
        </li>
        <li>
          <a href="#projects" class="hover:text-accent flex items-center">
            <Briefcase class="mr-1" /> Projects
          </a>
        </li>
        <li>
          <a href="#contact" class="hover:text-accent flex items-center">
            <MessageSquare class="mr-1" /> Contact
          </a>
        </li>
      </ul>
    </div>
    
    <div class="flex-none md:hidden">
      <button class="btn btn-square btn-ghost" on:click={() => mobileMenuOpen = !mobileMenuOpen}>
        {#if mobileMenuOpen}
            <Menu size={24}/>
        {:else}
            <X size={24}/>
        {/if}
      </button>
    </div>
  </div>
  
  {#if mobileMenuOpen}
    <div class="md:hidden absolute top-16 left-0 right-0 bg-base-200 shadow-lg" transition:fade>
      <ul class="menu p-4 gap-2">
        <li>
          <a href="#home" class="hover:text-accent flex items-center">
            <Home class="mr-2" /> Home
          </a>
        </li>
        <li>
          <a href="#about" class="hover:text-accent flex items-center">
            <User class="mr-2" /> About
          </a>
        </li>
        <li>
          <a href="#projects" class="hover:text-accent flex items-center">
            <Briefcase class="mr-2" /> Projects
          </a>
        </li>
        <li>
          <a href="#contact" class="hover:text-accent flex items-center">
            <MessageSquare class="mr-2" /> Contact
          </a>
        </li>
      </ul>
    </div>
  {/if}
</nav>