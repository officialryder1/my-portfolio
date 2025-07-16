<script>
  import { Mail, MapPin, Phone, Send } from '@lucide/svelte';
  import { fade, scale } from 'svelte/transition';
  
  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let submitSuccess = false;
  
  const handleSubmit = async () => {
    isSubmitting = true;
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    isSubmitting = false;
    submitSuccess = true;
    name = '';
    email = '';
    message = '';
    
    // Reset success message after 3 seconds
    setTimeout(() => submitSuccess = false, 3000);
  };
</script>

<section class="py-20 bg-base-200" id="contact">
  <div class="container mx-auto px-6">
    <div class="text-center mb-16">
      <h2 class="text-4xl font-bold mb-4">Get In <span class="text-primary">Touch</span></h2>
      <p class="text-xl max-w-2xl mx-auto">
        Have a project in mind or want to chat? Feel free to reach out!
      </p>
    </div>
    
    <div class="flex flex-col lg:flex-row gap-12">
      <div class="lg:w-1/2" in:fade>
        <div class="space-y-6">
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-full bg-primary/20 text-primary">
              <Mail size={24} />
            </div>
            <div>
              <h3 class="text-xl font-semibold">Email</h3>
              <p class="text-base-content/80">officialryder07@gmail.com</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-full bg-secondary/20 text-secondary">
              <Phone size={24} />
            </div>
            <div>
              <h3 class="text-xl font-semibold">Phone</h3>
              <p class="text-base-content/80">+234 903 3147 769</p>
            </div>
          </div>
          
          <div class="flex items-start gap-4">
            <div class="p-3 rounded-full bg-accent/20 text-accent">
              <MapPin size={24} />
            </div>
            <div>
              <h3 class="text-xl font-semibold">Location</h3>
              <p class="text-base-content/80">26 ebtukiwe jabi Abuja</p>
            </div>
          </div>
        </div>
        
        <div class="mt-12">
          <h3 class="text-2xl font-semibold mb-4">Connect With Me</h3>
          <div class="flex gap-4">
            <button class="btn btn-circle btn-ghost hover:bg-primary hover:text-primary-content">
              <i class="fab fa-twitter text-xl"></i>
            </button>
            <button class="btn btn-circle btn-ghost hover:bg-blue-600 hover:text-white">
              <i class="fab fa-linkedin text-xl"></i>
            </button>
            <button class="btn btn-circle btn-ghost hover:bg-gray-800 hover:text-white">
              <i class="fab fa-github text-xl"></i>
            </button>
            <button class="btn btn-circle btn-ghost hover:bg-pink-600 hover:text-white">
              <i class="fab fa-dribbble text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      <div class="lg:w-1/2" in:fade={{ delay: 200 }}>
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            {#if submitSuccess}
              <div class="alert alert-success mb-6" transition:scale>
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Your message has been sent successfully!</span>
              </div>
            {/if}
            
            <form class="space-y-4" on:submit|preventDefault={handleSubmit}>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Name</span>
                </label>
                <input 
                  type="text" 
                  class="input input-bordered" 
                  bind:value={name}
                  required
                />
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email Address</span>
                </label>
                <input 
                  type="email" 
                  class="input input-bordered" 
                  bind:value={email}
                  required
                />
              </div>
              
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Your Message</span>
                </label>
                <textarea 
                  class="textarea textarea-bordered h-32" 
                  bind:value={message}
                  required
                ></textarea>
              </div>
              
              <div class="form-control mt-6">
                <button 
                  class="btn btn-primary" 
                  type="submit"
                  disabled={isSubmitting}
                >
                  {#if isSubmitting}
                    <span class="loading loading-spinner"></span>
                  {:else}
                    <p>Send Message <Send class="ml-2" /></p>
                  {/if}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>