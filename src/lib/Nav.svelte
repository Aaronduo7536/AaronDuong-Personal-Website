<script>
  import { onMount } from 'svelte'
  let scrolled = false

  onMount(() => {
    const handler = () => { scrolled = window.scrollY > 10 }
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  })

  const links = [
    ['#about',      'About'],
    ['#projects',   'Projects'],
    ['#experience', 'Experience'],
    ['#contact',    'Contact'],
  ]
</script>

<nav class="fixed top-0 left-0 right-0 z-50 flex items-center justify-between h-16 px-6 lg:px-20
            bg-bg/90 backdrop-blur-lg border-b border-accent/10 transition-shadow duration-300
            {scrolled ? 'shadow-[0_2px_24px_rgba(42,31,20,0.07)]' : ''}">
  <span class="font-sans font-bold text-[15px] tracking-wide text-ink">Aaron Duong</span>
  <ul class="hidden sm:flex gap-8 list-none m-0 p-0">
    {#each links as [href, label]}
      <li>
        <a {href}
           class="font-sans text-[13px] font-medium tracking-[0.06em] uppercase
                  text-ink-mid hover:text-accent transition-colors duration-200">
          {label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
