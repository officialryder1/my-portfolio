<script>
    import { Github, Linkedin, Mail, ArrowRight, Download, Twitter } from "@lucide/svelte";

    import { fade, fly } from "svelte/transition";
</script>

<section class="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-primary-content">
  <div class="container mx-auto px-6 py-20 text-center" in:fade={{ duration: 500 }}>
    <div class="avatar mt-13 mb-8" in:fly={{ y: -50, duration: 800 }}>
      <div class="w-40 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
        <img src="/cartoon.jpeg" alt="Developer Profile" class="animate-pulse" />
      </div>
    </div>
    
    <h1 class="text-5xl font-bold mb-4 animate-bounce">Hi, I'm <span class="text-accent">Victor</span></h1>
    <h2 class="text-3xl font-semibold mb-6">Full Stack Developer</h2>
    
    <p class="text-xl max-w-2xl mx-auto mb-8">
      I build exceptional digital experiences with modern technologies.
      Currently specializing in Svelte, Node.js, python, and cloud architectures.
    </p>
    
    <div class="flex gap-4 justify-center">
      <a href="#projects" class="btn btn-accent animate-pulse">
        View Work <ArrowRight class="ml-2" />
      </a>
      <a href="/resume.pdf" class="btn btn-outline btn-primary">
        Download CV <Download class="ml-2" />
      </a>
    </div>
    
    <div class="mt-12 flex justify-center gap-6">
      <a href="https://github.com/officialryder1" class="btn btn-circle btn-ghost hover:scale-125 transition-transform">
        <Github size={28} />
      </a>
      <a href="https://linkedin.com/in/victor-kenneth-3a8704195/" class="btn btn-circle btn-ghost hover:scale-125 transition-transform">
        <Linkedin size={28} />
      </a>
      <a href="mailto:officialvictor07@gmail.com" class="btn btn-circle btn-ghost hover:scale-125 transition-transform">
        <Mail size={28} />
      </a>

      <a href="https://x.com/official_ryder0" class="btn btn-circle btn-ghost hover:scale-125 transition-transform">
        <Twitter size={28} />
      </a>
    </div>
  </div>
</section>