<script>
  import { reveal } from './actions.js'

  import imgNextDownMain  from '../assets/NextDownMain.png'
  import imgNextDownPlays from '../assets/NextDownPlays.png'
  import imgBirdBrainMap  from '../assets/BirdBrainMap.png'
  import imgBirdBrainPost from '../assets/BirdBrainPost.png'

  const projects = [
    {
      number:  '01',
      title:   'NextDown',
      desc:    'Predict NFL play calls using a gradient boosted tree model trained on historical NFL data. Features an interactive UI where users input game-situation variables — down, distance, field position — to get a recommended play call.',
      stack:   ['Python', 'FastAPI', 'React', 'Vite', 'Gradient Boosted Trees'],
      link:    'https://github.com/zroberson165/NextDown',
      images:  [imgNextDownMain, imgNextDownPlays],
      imgAlts: ['NextDown main dashboard', 'NextDown play predictions'],
    },
    {
      number:  '02',
      title:   'Bird Brain',
      desc:    'A full-stack web app for logging, identifying, and exploring bird sightings on an interactive map. Uses Mapbox GL JS for geospatial visualization, the eBird API for bird data, and Google Gemini AI for photo-based bird identification.',
      stack:   ['Node.js', 'Express', 'PostgreSQL', 'Mapbox', 'eBird API', 'Gemini AI'],
      link:    'https://github.com/Huntwr/Bird-Brain',
      images:  [imgBirdBrainMap, imgBirdBrainPost],
      imgAlts: ['Bird Brain map view', 'Bird Brain post view'],
    },
    {
      number:  '03',
      title:   '3D Physics Ball Roller',
      desc:    'A 3D physics-based puzzle game built in Unity with realistic ball rolling mechanics and collision responses. Features camera controls, force-based player movement, and a UI for level tracking and performance metrics.',
      stack:   ['Unity', 'C#', 'Physics Engine'],
      link:    null,
      images:  [],
      imgAlts: [],
    },
  ]
</script>

<section id="projects" class="py-24 px-6 lg:px-20 bg-bg">
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

    <div class="flex flex-col gap-10">
      {#each projects as project, i}
        <div use:reveal={{ delay: i * 80 }}
             class="group bg-bg-card border border-accent/15 rounded-2xl overflow-hidden
                    hover:border-accent/30 hover:shadow-[0_16px_48px_rgba(42,31,20,0.08)]
                    hover:-translate-y-1 transition-all duration-400 relative">
          <!-- Top accent bar -->
          <div class="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent to-warm
                      scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400 z-10"></div>

          <!-- Project images strip -->
          {#if project.images.length > 0}
            <div class="grid grid-cols-2 gap-0 h-52 overflow-hidden">
              {#each project.images as src, j}
                <div class="overflow-hidden {project.images.length === 1 ? 'col-span-2' : ''}">
                  <img {src} alt={project.imgAlts[j]}
                       class="w-full h-52 object-cover object-top group-hover:scale-105
                              transition-transform duration-500" />
                </div>
              {/each}
            </div>
          {/if}

          <!-- Card body -->
          <div class="p-8 flex flex-col gap-4">
            <div class="flex items-start justify-between gap-4">
              <div>
                <span class="font-sans text-[11px] font-semibold tracking-[0.14em] text-ink-muted block mb-1">
                  {project.number}
                </span>
                <h3 class="font-sans font-bold text-2xl text-ink tracking-tight">
                  {project.title}
                </h3>
              </div>
              {#if project.link}
                <a href={project.link} target="_blank" rel="noopener"
                   class="shrink-0 font-sans text-[12px] font-semibold text-accent
                          inline-flex items-center gap-1.5 mt-1
                          hover:gap-3 transition-all duration-200">
                  GitHub →
                </a>
              {/if}
            </div>

            <p class="font-serif text-[15px] text-ink-mid leading-relaxed">
              {project.desc}
            </p>

            <div class="flex flex-wrap gap-1.5 pt-1">
              {#each project.stack as tag}
                <span class="px-3 py-1 rounded-full bg-sand font-sans text-[11px] font-medium text-ink-mid">
                  {tag}
                </span>
              {/each}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>
