<script>
  import { fade, scale } from 'svelte/transition'
  import { contactOpen } from './lib/stores.js'

  import Nav        from './lib/Nav.svelte'
  import Hero       from './lib/Hero.svelte'
  import About      from './lib/About.svelte'
  import Projects   from './lib/Projects.svelte'
  import Experience from './lib/Experience.svelte'
  import Extras     from './lib/Extras.svelte'
  import Contact    from './lib/Contact.svelte'
  import Footer     from './lib/Footer.svelte'

  function handleKey(e) {
    if (e.key === 'Escape') $contactOpen = false
  }
</script>

<svelte:window on:keydown={handleKey} />

<Nav />

<main>
  <Hero />
  <div class="h-px bg-accent/8 mx-6 lg:mx-20"></div>
  <About />
  <div class="h-px bg-accent/8 mx-6 lg:mx-20"></div>
  <Projects />
  <div class="h-px bg-accent/8 mx-6 lg:mx-20"></div>
  <Experience />
  <div class="h-px bg-accent/8 mx-6 lg:mx-20"></div>
  <Extras />
  <div class="h-px bg-accent/8 mx-6 lg:mx-20"></div>
  <Contact />
</main>

<Footer />

<!-- Contact modal -->
{#if $contactOpen}
  <!-- Backdrop -->
  <div
    transition:fade={{ duration: 180 }}
    class="fixed inset-0 z-50 flex items-center justify-center p-6
           bg-ink/20 backdrop-blur-sm"
    role="dialog"
    aria-modal="true"
    on:click|self={() => $contactOpen = false}>

    <!-- Card -->
    <div transition:scale={{ duration: 220, start: 0.94 }}
         class="bg-bg-card border border-accent/15 rounded-3xl shadow-[0_24px_64px_rgba(42,31,20,0.15)]
                p-8 w-full max-w-sm relative">

      <!-- Close -->
      <button
        on:click={() => $contactOpen = false}
        class="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center
               text-ink-muted hover:text-ink hover:bg-sand transition-all duration-150 text-lg">
        ×
      </button>

      <p class="font-sans text-[11px] font-semibold tracking-[0.18em] uppercase text-accent mb-6">
        Get in Touch
      </p>

      <div class="flex flex-col gap-3">
        <!-- Email -->
        <a href="mailto:ajd23021@gmail.com"
           class="group flex items-center gap-4 p-4 rounded-2xl border border-accent/15
                  hover:border-accent/35 hover:bg-bg transition-all duration-200">
          <div class="w-9 h-9 rounded-full bg-sand flex items-center justify-center shrink-0
                      group-hover:bg-accent/10 transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2"/>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
            </svg>
          </div>
          <div>
            <p class="font-sans text-[13px] font-semibold text-ink">Email</p>
            <p class="font-sans text-[11px] text-ink-muted">ajd23021@gmail.com</p>
          </div>
        </a>

        <!-- LinkedIn -->
        <a href="https://www.linkedin.com/in/aaron-duong1/" target="_blank" rel="noopener"
           class="group flex items-center gap-4 p-4 rounded-2xl border border-accent/15
                  hover:border-accent/35 hover:bg-bg transition-all duration-200">
          <div class="w-9 h-9 rounded-full bg-sand flex items-center justify-center shrink-0
                      group-hover:bg-accent/10 transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
              <rect x="2" y="9" width="4" height="12"/>
              <circle cx="4" cy="4" r="2"/>
            </svg>
          </div>
          <div>
            <p class="font-sans text-[13px] font-semibold text-ink">LinkedIn</p>
            <p class="font-sans text-[11px] text-ink-muted">aaron-duong1</p>
          </div>
        </a>

        <!-- GitHub -->
        <a href="https://github.com/Aaronduo7536" target="_blank" rel="noopener"
           class="group flex items-center gap-4 p-4 rounded-2xl border border-accent/15
                  hover:border-accent/35 hover:bg-bg transition-all duration-200">
          <div class="w-9 h-9 rounded-full bg-sand flex items-center justify-center shrink-0
                      group-hover:bg-accent/10 transition-colors duration-200">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
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
          <div>
            <p class="font-sans text-[13px] font-semibold text-ink">GitHub</p>
            <p class="font-sans text-[11px] text-ink-muted">@Aaronduo7536</p>
          </div>
        </a>
      </div>
    </div>
  </div>
{/if}
