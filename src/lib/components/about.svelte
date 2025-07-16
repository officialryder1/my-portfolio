<script>
  import { User, Award, School, Briefcase, Calendar } from '@lucide/svelte';
  import { fade, slide } from 'svelte/transition';
  import Seo from './seo.svelte';
  import { getStructuredData } from '$lib/seo';
  

    const pageSeo = {
        title: "About Me | Developer",
        description: "Learn about my background, skills, and experience",
        url: "https://yourportfolio.vercel.app/about"
    };
    
    const structuredData = getStructuredData();

  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Sanctuary wealth MF.",
      period: "2024 - Present",
      description: "Leading a team to build scalable web applications with modern technologies.",
      icon: Briefcase
    },
    {
      role: "Backend Engineer",
      company: "Jiggy",
      period: "2021 - 2022",
      description: "Developed and integrated chat feature for company.",
      icon: Briefcase
    },
    {
      role: "Junior Developer",
      company: "StartUp Ventures",
      period: "2019 - 2021",
      description: "Built MVP products and assisted in all phases of development lifecycle.",
      icon: Briefcase
    }
  ];
  
  const education = [
    {
      degree: "Bsc in Computer Science",
      institution: "Federal University of Technology, Owerri",
      period: "2019 - 2023",
      icon: School
    },
    {
      degree: "SSCE",
      institution: "VGA",
      period: "2013 - 2016",
      icon: School
    }
  ];
  
  let activeTab = 'experience';
</script>

<Seo {...pageSeo} {structuredData} />

<section class="py-20 bg-base-100" id="about">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16" in:fade>
      <h2 class="text-4xl font-bold mb-4">About <span class="text-primary">Me</span></h2>
      <p class="text-xl max-w-2xl mx-auto">
        Get to know the person behind the code
      </p>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-12 items-center">
      <div class="lg:w-1/3 flex justify-center" in:slide={{ delay: 200 }}>
        <div class="relative group">
          <div class="absolute -inset-2 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-200 animate-tilt"></div>
          <div class="relative">
            <img 
              src="/victor.jpg" 
              alt="About Me" 
              class="rounded-lg w-full max-w-xs shadow-2xl hover:scale-105 transition-transform"
            />
          </div>
        </div>
      </div>
      
      <div class="lg:w-2/3" in:slide={{ delay: 400 }}>
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <User class="mr-2 text-primary" size={24} /> Who Am I?
          </h3>
          <p class="text-lg mb-4">
            I'm a passionate full-stack developer with over 5+ years of experience building web applications. 
            I specialize in JavaScript & Python ecosystems and cloud architectures.
          </p>
          <p class="text-lg">
            When I'm not coding, you can find me Playing Video Games, watching sci-fi, 
            or experimenting with new Technologies had from the web. I believe in continuous learning 
            and sharing knowledge with the community.
          </p>
        </div>
        
        <div class="mb-8">
          <h3 class="text-2xl font-semibold mb-4 flex items-center">
            <Award class="mr-2 text-primary" size={24} /> My Approach
          </h3>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-full bg-primary/20 text-primary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">Clean Code</h4>
                <p class="text-sm text-base-content/80">Maintainable and well-documented</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-full bg-primary/20 text-primary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">User Focused</h4>
                <p class="text-sm text-base-content/80">Intuitive and accessible interfaces</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-full bg-primary/20 text-primary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">Performance</h4>
                <p class="text-sm text-base-content/80">Optimized and efficient solutions</p>
              </div>
            </div>
            
            <div class="flex items-start gap-3">
              <div class="p-2 rounded-full bg-primary/20 text-primary mt-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 class="font-semibold">Testing</h4>
                <p class="text-sm text-base-content/80">Reliable and well-tested code</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="tabs tabs-boxed bg-base-200 max-w-xs mb-6">
          <button 
            class="tab {activeTab === 'experience' ? 'tab-active' : ''}" 
            on:click={() => activeTab = 'experience'}
          >
            Experience
          </button> 
          <button 
            class="tab {activeTab === 'education' ? 'tab-active' : ''}" 
            on:click={() => activeTab = 'education'}
          >
            Education
          </button>
        </div>
        
        <div class="space-y-6">
          {#if activeTab === 'experience'}
            {#each experiences as exp (exp.role)}
              <div class="relative pl-8 group" in:fade>
                <div class="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary group-hover:animate-ping"></div>
                <div class="absolute left-0 top-1 h-4 w-4 rounded-full bg-primary"></div>
                <div class="absolute left-2 top-1 h-full w-0.5 bg-base-300"></div>
                
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 class="text-xl font-semibold">{exp.role}</h4>
                  <div class="flex items-center text-sm text-base-content/80">
                    <Calendar class="mr-1" size={14} /> {exp.period}
                  </div>
                </div>
                <p class="font-medium text-primary">{exp.company}</p>
                <p class="text-base-content/80">{exp.description}</p>
              </div>
            {/each}
          {:else}
            {#each education as edu (edu.degree)}
              <div class="relative pl-8 group" in:fade>
                <div class="absolute left-0 top-1 h-4 w-4 rounded-full bg-secondary group-hover:animate-ping"></div>
                <div class="absolute left-0 top-1 h-4 w-4 rounded-full bg-secondary"></div>
                <div class="absolute left-2 top-1 h-full w-0.5 bg-base-300"></div>
                
                <div class="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                  <h4 class="text-xl font-semibold">{edu.degree}</h4>
                  <div class="flex items-center text-sm text-base-content/80">
                    <Calendar class="mr-1" size={14} /> {edu.period}
                  </div>
                </div>
                <p class="font-medium text-secondary">{edu.institution}</p>
              </div>
            {/each}
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .animate-tilt {
    animation: tilt 10s infinite linear;
  }
  
  @keyframes tilt {
    0%, 100% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(0.5deg);
    }
    75% {
      transform: rotate(-0.5deg);
    }
  }
</style>