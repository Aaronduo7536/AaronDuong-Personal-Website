<script>
  import { reveal } from './actions.js'

  const skills = [
    'Node.js', 'Express', 'PostgreSQL', 'Docker',
    'Python', 'REST APIs', 'Mapbox', 'JavaScript',
    'HTML / CSS', 'Git',
  ]

  const interests = [
    'Backend Engineering', 'Geospatial Data',
    'Data Pipelines', 'Developer Tools', 'Nature & Bird-tracking',
  ]
</script>

<section id="about" class="py-24 px-6 lg:px-20 bg-bg">
  <div class="max-w-5xl mx-auto">
    <div use:reveal class="flex items-center gap-3 font-sans text-[11px] font-semibold
                           tracking-[0.18em] uppercase text-accent mb-3">
      About Me
      <span class="block w-12 h-px bg-accent"></span>
    </div>

    <h2 use:reveal={{ delay: 100 }}
        class="font-sans font-bold text-4xl lg:text-5xl tracking-tight text-ink mb-14 leading-tight">
      Who I Am
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
      <!-- Bio -->
      <div use:reveal={{ delay: 150 }} class="space-y-5 font-serif text-[17px] text-ink-mid leading-relaxed">
        <p>
          I'm a Computer Science student at the University of Colorado Boulder with a
          minor in Business, passionate about building software systems that are both
          technically rigorous and genuinely useful.
        </p>
        <p>
          My work centers around backend engineering, data pipelines, and interactive
          map-based experiences. I enjoy connecting the dots between APIs, infrastructure,
          and the user-facing layer to create products that feel polished from every angle.
        </p>
        <p>
          When I'm not coding, I'm exploring the outdoors — which is part of what drew
          me to bird-tracking and geospatial projects in the first place.
        </p>
      </div>

      <!-- Sidebar -->
      <div class="space-y-8">
        <!-- Skills -->
        <div use:reveal={{ delay: 200 }}>
          <p class="font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-accent mb-3">
            Core Skills
          </p>
          <div class="flex flex-wrap gap-2">
            {#each skills as skill}
              <span class="px-3.5 py-1.5 rounded-full border border-accent/20 font-sans text-xs
                           font-medium text-ink-mid bg-bg-card hover:border-accent hover:text-accent
                           transition-colors duration-200 cursor-default">
                {skill}
              </span>
            {/each}
          </div>
        </div>

        <!-- Interests -->
        <div use:reveal={{ delay: 260 }}>
          <p class="font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-accent mb-3">
            Interests
          </p>
          <div class="flex flex-wrap gap-2">
            {#each interests as interest}
              <span class="px-3.5 py-1.5 rounded-full border border-accent/20 font-sans text-xs
                           font-medium text-ink-mid bg-bg-card hover:border-accent hover:text-accent
                           transition-colors duration-200 cursor-default">
                {interest}
              </span>
            {/each}
          </div>
        </div>

        <!-- Education -->
        <div use:reveal={{ delay: 320 }}>
          <p class="font-sans text-[11px] font-bold tracking-[0.14em] uppercase text-accent mb-3">
            Education
          </p>
          <div class="font-sans text-sm text-ink-mid leading-relaxed">
            <p class="font-semibold text-ink text-[15px]">University of Colorado Boulder</p>
            <p>B.S. Computer Science</p>
            <p>Business Minor</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
