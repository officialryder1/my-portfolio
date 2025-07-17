<script>
  import { fade, slide } from 'svelte/transition';
  import { intersect } from '$lib/intersect';
  import { 
    Code2, Cpu, Database, GitBranch, 
    ShieldCheck, Smartphone, Globe 
  } from "@lucide/svelte";
  
  const skills = [
    { name: "Frontend", icon: Smartphone, items: ["Svelte", "React", "Tailwind", "TypeScript"] },
    { name: "Backend", icon: Cpu, items: ["Node.js", "Python", "Php", "Go"] },
    { name: "DevOps", icon: GitBranch, items: ["Docker", "Kubernetes", "AWS", "CI/CD"] },
    { name: "Database", icon: Database, items: ["PostgreSQL", "Pocketbase", "Redis", "Firebase"] },
    { name: "Security", icon: ShieldCheck, items: ["OAuth", "JWT", "CORS", "HTTPS"] },
    { name: "Web", icon: Globe, items: ["HTTP", "REST", "GraphQL", "WebSockets"] },
  ];
  
  let visible = false;
  
  const handleIntersection = (entries) => {
    visible = entries[0].isIntersecting;
  };
</script>

<section 
  class="py-20 bg-base-200" 
  id="skills"
  use:intersect={{ threshold: 0.1 }} 
  {visible}
>
  <div class="container mx-auto px-6">
    <div class="text-center mb-16" in:fade>
      <h2 class="text-4xl font-bold mb-4">My <span class="text-primary">Skills</span></h2>
      <p class="text-xl max-w-2xl mx-auto">
        Technologies I've worked with and areas I specialize in
      </p>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each skills as skill, i}
        <div 
          class="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow"
          in:slide={{ delay: i * 100, duration: 500 }}
        >
          <div class="card-body">
            <div class="flex items-center mb-4">
              <svelte:component this={skill.icon} class="text-primary mr-3" size={28} />
              <h3 class="text-2xl font-semibold">{skill.name}</h3>
            </div>
            <div class="flex flex-wrap gap-2">
              {#each skill.items as item}
                <span class="badge badge-error badge-outline hover:badge-primary transition-colors">
                  {item}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>