<script>
  import { ExternalLink, Github, Eye } from '@lucide/svelte';
  import { flip } from 'svelte/animate';
  import { quintOut } from 'svelte/easing';
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration and admin dashboard",
      tags: ["SvelteKit", "Node.js", "Stripe", "FastAPI"],
      image: "/ryderx.png",
      links: [
        { url: "https://ryderx.vercel.app", icon: ExternalLink, label: "Live Demo" },
        { url: "https://github.com/officialryder1/RyderXchange", icon: Github, label: "Source Code" }
      ]
    },
    {
      title: "Couple Quest",
      description: "A gamified platform where couples grow closer by completing fun, meaningful tasks and earn XP and climb leaderboard",
      tags: ["Sveltekit", "Django Restframework", "WebSockets"],
      image: "/dashboard2.png",
      links: [
        { url: "http://couple-quest-frontend.vercel.app/", icon: ExternalLink, label: "Live Demo" },
        { url: "https://github.com/officialryder1/tweetgenie", icon: Github, label: "Source Code" }
      ]
    },
    {
      title: "AI Movie Suggester",
      description: "GPT-3 powered content creation tool with customizable templates",
      tags: ["svelte", "OpenAI", "Tailwind"],
      image: "/ai-movies.png",
      links: [
        { url: "https://ai-movies-xi.vercel.app/", icon: ExternalLink, label: "Live Demo" },
        { url: "https://github.com/officialryder1/ai-movies", icon: Github, label: "Source Code" }
      ]
    }
  ];
  
  let selectedFilter = "all";
</script>

<section class="py-20 bg-base-100" id="projects">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Featured <span class="text-primary">Projects</span></h2>
      <p class="text-xl max-w-2xl mx-auto">
        Some of my recent work that I'm particularly proud of
      </p>
    </div>
    
    <div class="flex justify-center mb-12 gap-4">
      <button 
        class="btn {selectedFilter === 'all' ? 'btn-primary' : 'btn-ghost'}" 
        on:click={() => selectedFilter = 'all'}
      >
        All
      </button>
      <button 
        class="btn {selectedFilter === 'web' ? 'btn-primary' : 'btn-ghost'}" 
        on:click={() => selectedFilter = 'web'}
      >
        Web Apps
      </button>
      <button 
        class="btn {selectedFilter === 'mobile' ? 'btn-primary' : 'btn-ghost'}" 
        on:click={() => selectedFilter = 'mobile'}
      >
        Mobile
      </button>
    </div>
    
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {#each projects as project (project.title)}
        <div 
          animate:flip={{ duration: 500, easing: quintOut }}
          class="card bg-base-200 shadow-xl image-full hover:scale-[1.02] transition-transform"
        >
          <figure><img src={project.image} alt={project.title} loading="lazy"/></figure>
          <div class="card-body">
            <h3 class="card-title text-2xl">{project.title}</h3>
            <p>{project.description}</p>
            <div class="flex flex-wrap gap-2 mt-2">
              {#each project.tags as tag}
                <div class="badge badge-outline">{tag}</div>
              {/each}
            </div>
            <div class="card-actions justify-end mt-4">
              {#each project.links as link}
                <a href={link.url} class="btn btn-sm btn-outline hover:btn-primary">
                  <svelte:component this={link.icon} class="mr-1" size={16} />
                  {link.label}
                </a>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
    
    <div class="text-center mt-12">
      <a href='/project' class="btn btn-primary btn-wide">
        View All Projects <Eye class="ml-2" />
      </a>
    </div>
  </div>
</section>