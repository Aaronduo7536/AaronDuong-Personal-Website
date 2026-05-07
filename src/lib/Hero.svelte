<script>
  import photo from '../assets/senior-pic.jpg'
</script>

<section id="hero" class="min-h-screen flex flex-col justify-center pt-16 px-6 lg:px-20 relative overflow-hidden bg-bg">
  <!-- Ambient blobs -->
  <div class="absolute inset-0 pointer-events-none" aria-hidden="true">
    <div class="absolute top-1/4 right-1/4 w-[560px] h-[440px] rounded-full bg-warm/8 blur-3xl"></div>
    <div class="absolute bottom-1/3 left-1/5 w-[380px] h-[380px] rounded-full bg-sand/50 blur-3xl"></div>
  </div>

  <div class="relative max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

    <!-- Left: text -->
    <div>
      <div class="flex items-center gap-3 font-sans text-[12px] font-semibold tracking-[0.18em]
                  uppercase text-accent mb-5 [animation:fadeUp_0.7s_0.2s_both]">
        <span class="w-8 h-px bg-accent shrink-0"></span>
        CS @ CU Boulder &nbsp;·&nbsp; Incoming Data Analyst Intern
      </div>

      <h1 class="font-sans font-bold leading-[1.05] tracking-tight text-ink mb-7
                 [animation:fadeUp_0.8s_0.35s_both]"
          style="font-size: clamp(48px, 7vw, 88px);">
        Aaron<br>
        <span class="text-accent">Duong</span>
      </h1>

      <p class="font-serif text-ink-mid mb-12 max-w-lg leading-relaxed
                [animation:fadeUp_0.8s_0.5s_both]"
         style="font-size: clamp(16px, 1.8vw, 19px);">
        Building things that connect technology, data, and real world decision making.
      </p>

      <div class="flex gap-4 flex-wrap [animation:fadeUp_0.8s_0.65s_both]">
        <a href="#projects"
           class="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-bg-card
                  font-sans text-[13px] font-semibold tracking-wide
                  shadow-[0_6px_24px_rgba(124,92,62,0.28)]
                  hover:bg-accent-lt hover:-translate-y-0.5 transition-all duration-250">
          View My Work ↓
        </a>
        <a href="#contact"
           class="inline-flex items-center gap-2 px-7 py-3 rounded-full
                  border border-accent/30 text-ink-mid font-sans text-[13px] font-semibold
                  hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-250">
          Get in Touch
        </a>
      </div>
    </div>

    <!-- Right: photo — centered in its column -->
    <div class="flex justify-center items-center [animation:fadeUp_0.9s_0.55s_both]">
      <div class="relative">
        <div class="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-sand to-warm/30 blur-2xl opacity-70"></div>
        <img
          src={photo}
          alt="Aaron Duong"
          class="relative w-64 sm:w-72 lg:w-80 xl:w-[340px] aspect-[3/4] object-cover object-center
                 rounded-3xl shadow-2xl shadow-accent/20 ring-1 ring-sand-dark"
        />
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="absolute bottom-10 left-6 lg:left-20 flex items-center gap-3
              font-sans text-[11px] font-medium tracking-[0.14em] uppercase text-ink-muted
              [animation:fadeUp_0.8s_1s_both]">
    <div class="w-10 h-px bg-sand-dark relative overflow-hidden">
      <div class="absolute inset-0 bg-accent [animation:scrollLine_1.8s_1.2s_infinite]"></div>
    </div>
    Scroll to explore
  </div>
</section>
