<script>
  import { reveal } from './actions.js'

  const projects = [
    {
      number: '01',
      title: 'Bird Brain',
      desc: 'A full-stack bird-tracking platform that pulls real-time sighting data from the eBird API and visualizes it across interactive Mapbox maps. Includes AI-powered summaries of bird activity and hotspots via Google Gemini, backed by a containerized Node.js + PostgreSQL backend.',
      tags: ['Node.js', 'Express', 'PostgreSQL', 'Docker', 'Mapbox', 'eBird API', 'Gemini AI'],
      link: 'https://github.com/aadu7536',
    },
    {
      number: '02',
      title: 'Personal Website',
      desc: 'This site — a clean, professionally scrolling portfolio built in Svelte and Tailwind CSS. Smooth scroll-reveal animations, a warm editorial palette, and a fully responsive layout. Designed for GitHub Pages with no backend required.',
      tags: ['Svelte', 'Tailwind CSS', 'Vite', 'GitHub Pages'],
      link: 'https://github.com/aadu7536',
    },
    {
      number: '03',
      title: 'Next Experiment',
      desc: 'A reserved slot for the next project — likely at the intersection of data pipelines, maps, and real-world APIs. Currently exploring ideas around geospatial data visualization and developer tooling.',
      tags: ['Coming Soon', 'APIs', 'Data', 'Maps'],
      link: null,
    },
  ]
</script>

<section id="projects" class="py-24 px-6 lg:px-20 bg-bg-alt">
  <div class="max-w-5xl mx-auto">
    <div use:reveal class="flex items-center gap-3 font-sans text-[11px] font-semibold
                           tracking-[0.18em] uppercase text-accent mb-3">
      Work
      <span class="block w-12 h-px bg-accent"></span>
    </div>

    <h2 use:reveal={{ delay: 100 }}
        class="font-sans font-bold text-4xl lg:text-5xl tracking-tight text-ink mb-14 leading-tight">
      Projects
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
      {#each projects as project, i}
        <div use:reveal={{ delay: i * 80 }}
             class="group bg-bg-card border border-accent/15 rounded-2xl p-9 flex flex-col gap-4
                    relative overflow-hidden hover:border-accent/30
                    hover:shadow-[0_16px_48px_rgba(42,31,20,0.08)] hover:-translate-y-1
                    transition-all duration-400">
          <!-- Top accent bar -->
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-warm
                      scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400"></div>

          <span class="font-sans text-[11px] font-semibold tracking-[0.14em] text-ink-muted">
            {project.number}
          </span>

          <h3 class="font-sans font-bold text-xl text-ink tracking-tight">
            {project.title}
          </h3>

          <p class="font-serif text-[15px] text-ink-mid leading-relaxed flex-1">
            {project.desc}
          </p>

          <div class="flex flex-wrap gap-1.5">
            {#each project.tags as tag}
              <span class="px-3 py-1 rounded-full bg-sand font-sans text-[11px] font-medium text-ink-mid">
                {tag}
              </span>
            {/each}
          </div>

          {#if project.link}
            <a href={project.link} target="_blank" rel="noopener"
               class="font-sans text-[12px] font-semibold text-accent
                      inline-flex items-center gap-1.5 mt-1
                      hover:gap-3 transition-all duration-200">
              View on GitHub →
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
