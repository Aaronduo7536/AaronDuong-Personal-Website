<script>
  import { reveal } from './actions.js'

  import imgFishing       from '../assets/Fishing.jpg'
  import imgGrandcanyon   from '../assets/Grandcanyon.jpg'
  import imgBoulder       from '../assets/boulder.jpg'
  import imgFlagfootball  from '../assets/flagfootball.jpg'
  import imgFrisbee       from '../assets/frisbee.jpeg'
  import imgMountains     from '../assets/mountainsgood.jpg'
  import imgForests       from '../assets/forests.jpg'
  import imgNightMtn      from '../assets/nightmountains.jpg'
  import imgSedona        from '../assets/sedona.jpg'

  const photos = [
    // Page 1
    { src: imgForests,      alt: 'Forests' },
    { src: imgGrandcanyon,  alt: 'Grand Canyon' },
    { src: imgMountains,    alt: 'Mountains' },
    // Page 2
    { src: imgSedona,       alt: 'Sedona' },
    { src: imgBoulder,      alt: 'Boulder, CO',  pos: 'center 65%' },
    { src: imgNightMtn,     alt: 'Night mountains' },
    // Page 3
    { src: imgFishing,      alt: 'Fishing', desktopOnly: true },
    { src: imgFlagfootball, alt: 'Flag football' },
    { src: imgFrisbee,      alt: 'Frisbee' },
  ]

  // Pages: groups of 3 (last page wraps)
  const PAGE_COUNT = Math.ceil(photos.length / 3)

  const coursework = [
    'Data Structures (CSCI 2270)',
    'Algorithms (CSCI 3104)',
    'Database Systems (CSCI 3287)',
    'Data Science w/ Prob/Stat (CSCI 3022)',
    'Computer Systems (CSCI 2400)',
    'Discrete Structures (CSCI 2824)',
    'Software Dev Methods (CSCI 3308)',
    'Linear Algebra (MATH 2130)',
    'Calculus I & II',
    'Principles of Finance (BUSM 2021)',
    'Principles of Accounting (BUSM 2020)',
  ]

  // ── Smooth slide+fade carousel ────────────────────────────
  // Single stable DOM grid — opacity + small translateX driven by JS.
  // Double rAF between slide-out and slide-in so CSS transition picks
  // up the intermediate position before animating to center.
  let pageIdx  = 0
  let fading   = false
  let tx       = 0   // px, for slide hint

  $: shown = [0, 1, 2].map(i => photos[(pageIdx * 3 + i) % photos.length])

  async function go(delta) {
    if (fading) return
    fading = true
    tx = delta > 0 ? -14 : 14          // slide out in direction of travel

    await new Promise(r => setTimeout(r, 190))

    pageIdx = (pageIdx + delta + PAGE_COUNT) % PAGE_COUNT
    tx = delta > 0 ? 14 : -14          // park new content off-screen opposite side

    // Two rAFs: first lets Svelte flush new pageIdx + tx to the DOM,
    // second lets the browser paint that state so the next change transitions.
    await new Promise(r => requestAnimationFrame(r))
    await new Promise(r => requestAnimationFrame(r))

    fading = false                      // fade in
    tx = 0                              // slide to center
  }

  async function jumpTo(i) {
    if (fading || i === pageIdx) return
    await go(i > pageIdx ? 1 : -1)
    // If jump is more than 1 page away, we only step once —
    // for 3 pages total this is always sufficient.
    if (pageIdx !== i) {
      pageIdx = i   // snap without animation for edge cases
    }
  }

  let lightbox = null

  function openLightbox(p) { lightbox = p }
  function closeLightbox() { lightbox = null }
  function onKeydown(e) { if (e.key === 'Escape') closeLightbox() }
</script>

<svelte:window on:keydown={onKeydown} />

<section class="py-24 px-6 lg:px-20 bg-bg">
  <div class="max-w-5xl mx-auto space-y-20">

    <!-- Relevant Coursework -->
    <div use:reveal>
      <div class="flex items-center gap-3 font-sans text-[11px] font-semibold
                  tracking-[0.18em] uppercase text-accent mb-6">
        Relevant Coursework
        <span class="block w-12 h-px bg-accent"></span>
      </div>
      <div class="flex flex-wrap gap-2">
        {#each coursework as course}
          <span class="px-3.5 py-1.5 rounded-full border border-accent/20 font-sans text-[12px]
                       font-medium text-ink-mid cursor-default">
            {course}
          </span>
        {/each}
      </div>
    </div>

    <!-- Life Outside Work -->
    <div use:reveal={{ delay: 100 }}>
      <div class="flex items-center gap-3 font-sans text-[11px] font-semibold
                  tracking-[0.18em] uppercase text-accent mb-8">
        Life Outside Work
        <span class="block w-12 h-px bg-accent"></span>
      </div>

      <!-- Mobile grid: all 9 photos -->
      <div class="grid grid-cols-2 gap-3 sm:hidden">
        {#each photos.filter(p => !p.desktopOnly) as p}
          <button
            type="button"
            class="overflow-hidden rounded-xl aspect-[4/3] bg-sand cursor-zoom-in"
            on:click={() => openLightbox(p)}
          >
            <img src={p.src} alt={p.alt} class="w-full h-full object-cover"
                 style="object-position: {p.pos ?? 'center'}" />
          </button>
        {/each}
      </div>

      <!-- Carousel row (desktop only) -->
      <div class="hidden sm:flex items-center gap-4">
        <button
          on:click={() => go(-1)}
          disabled={fading}
          class="shrink-0 w-11 h-11 rounded-full border border-accent/25 flex items-center
                 justify-center text-ink-mid font-sans text-xl leading-none
                 hover:border-accent hover:text-accent hover:bg-accent/5
                 disabled:opacity-30 transition-all duration-200 select-none"
          aria-label="Previous">
          ‹
        </button>

        <!-- Single stable grid — opacity + translateX via inline style -->
        <div class="flex-1">
          <div
            class="grid grid-cols-1 sm:grid-cols-3 gap-3"
            style="opacity:{fading ? 0 : 1}; transform:translateX({tx}px);
                   transition: opacity 190ms ease, transform 190ms ease;">
            {#each shown as p, k (p.alt)}
              <button
                type="button"
                class="overflow-hidden rounded-xl aspect-[4/3] bg-sand cursor-zoom-in
                       {k > 0 ? 'hidden sm:block' : ''}"
                on:click={() => openLightbox(p)}
              >
                <img src={p.src} alt={p.alt} class="w-full h-full object-cover"
                     style="object-position: {p.pos ?? 'center'}" />
              </button>
            {/each}
          </div>
        </div>

        <button
          on:click={() => go(1)}
          disabled={fading}
          class="shrink-0 w-11 h-11 rounded-full border border-accent/25 flex items-center
                 justify-center text-ink-mid font-sans text-xl leading-none
                 hover:border-accent hover:text-accent hover:bg-accent/5
                 disabled:opacity-30 transition-all duration-200 select-none"
          aria-label="Next">
          ›
        </button>
      </div>

      <!-- Page dots -->
      <div class="hidden sm:flex justify-center gap-2 mt-6">
        {#each Array(PAGE_COUNT) as _, i}
          <button
            on:click={() => jumpTo(i)}
            class="h-1.5 rounded-full transition-all duration-300
                   {i === pageIdx ? 'w-6 bg-accent' : 'w-1.5 bg-sand-dark hover:bg-warm'}"
            aria-label="Page {i + 1}">
          </button>
        {/each}
      </div>

      <p class="font-sans text-[12px] text-ink-muted italic text-center mt-5">
        Hiking, fishing, flag football, frisbee, and anywhere with a good view.
      </p>
    </div>

  </div>
</section>

<!-- Lightbox -->
{#if lightbox}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
    on:click={closeLightbox}
    role="dialog"
    aria-modal="true"
    aria-label={lightbox.alt}
  >
    <button
      type="button"
      class="absolute top-4 right-4 text-white/70 hover:text-white transition-colors
             font-sans text-2xl leading-none p-2"
      on:click={closeLightbox}
      aria-label="Close"
    >
      ✕
    </button>
    <img
      src={lightbox.src}
      alt={lightbox.alt}
      class="max-w-[90vw] max-h-[90vh] object-contain rounded-xl shadow-2xl"
      on:click|stopPropagation
    />
  </div>
{/if}
