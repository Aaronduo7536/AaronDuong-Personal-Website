<script>
  import { reveal } from './actions.js'
</script>

<section id="contact" class="py-24 px-6 lg:px-20 bg-bg-alt text-center">
  <div class="max-w-xl mx-auto">
    <div use:reveal class="flex justify-center items-center gap-3 font-sans text-[11px] font-semibold
                           tracking-[0.18em] uppercase text-accent mb-3">
      Contact
      <span class="block w-12 h-px bg-accent"></span>
    </div>

    <h2 use:reveal={{ delay: 100 }}
        class="font-sans font-bold text-4xl lg:text-5xl tracking-tight text-ink mb-6 leading-tight">
      Let's Connect
    </h2>

    <p use:reveal={{ delay: 160 }}
       class="font-serif text-[18px] text-ink-mid leading-relaxed mb-12">
      Whether it's a project collaboration, internship opportunity, or just a conversation
      about software — I'd love to hear from you.
    </p>

    <div use:reveal={{ delay: 220 }} class="flex justify-center gap-5 flex-wrap">
      <!-- Email card -->
      <a href="mailto:aadu7536@colorado.edu"
         class="group flex flex-col items-center gap-3 py-8 px-10 min-w-[160px]
                bg-bg-card border border-accent/15 rounded-2xl
                hover:border-accent/40 hover:-translate-y-1
                hover:shadow-[0_12px_36px_rgba(42,31,20,0.08)]
                transition-all duration-300 text-ink-mid hover:text-accent">
        <div class="w-11 h-11 rounded-full bg-sand flex items-center justify-center
                    group-hover:bg-accent/10 transition-colors duration-200">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
               stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </div>
        <span class="font-sans text-[13px] font-semibold">Email</span>
        <span class="font-sans text-[12px] opacity-70">aadu7536@colorado.edu</span>
      </a>

      <!-- GitHub card -->
      <a href="https://github.com/aadu7536" target="_blank" rel="noopener"
         class="group flex flex-col items-center gap-3 py-8 px-10 min-w-[160px]
                bg-bg-card border border-accent/15 rounded-2xl
                hover:border-accent/40 hover:-translate-y-1
                hover:shadow-[0_12px_36px_rgba(42,31,20,0.08)]
                transition-all duration-300 text-ink-mid hover:text-accent">
        <div class="w-11 h-11 rounded-full bg-sand flex items-center justify-center
                    group-hover:bg-accent/10 transition-colors duration-200">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                     0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466
                     -.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832
                     .092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688
                     -.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844
                     a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651
                     .64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855
                     0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017
                     C22 6.484 17.522 2 12 2z"/>
          </svg>
        </div>
        <span class="font-sans text-[13px] font-semibold">GitHub</span>
        <span class="font-sans text-[12px] opacity-70">@aadu7536</span>
      </a>
    </div>
  </div>
</section>
