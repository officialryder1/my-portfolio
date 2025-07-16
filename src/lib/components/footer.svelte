<script>
  import { Heart, Copyright } from '@lucide/svelte';
  import { fade } from 'svelte/transition';
</script>

<footer class="footer p-10 bg-neutral text-neutral-content" in:fade>
  <div class="container mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <span class="footer-title">Services</span> 
        <a class="link link-hover">Web Development</a>
        <a class="link link-hover">Mobile Apps</a>
        <a class="link link-hover">UI/UX Design</a>
        <a class="link link-hover">Consulting</a>
      </div> 
      <div>
        <span class="footer-title">Company</span> 
        <a class="link link-hover">About me</a>
        <a class="link link-hover">Contact</a>
        <a class="link link-hover">Testimonials</a>
        <a class="link link-hover">Blog</a>
      </div> 
      <div>
        <span class="footer-title">Legal</span> 
        <a class="link link-hover">Terms of use</a>
        <a class="link link-hover">Privacy policy</a>
        <a class="link link-hover">Cookie policy</a>
      </div>
    </div>
    
    <div class="mt-12 pt-6 border-t border-neutral-focus text-center">
      <p class="flex items-center justify-center">
        <Copyright class="mr-1" size={16} /> {new Date().getFullYear()} All rights reserved
      </p>
      <p class="mt-2 flex items-center justify-center">
        Made with <Heart class="mx-1 text-red-500" size={16} /> using SvelteKit
      </p>
    </div>
  </div>
</footer>