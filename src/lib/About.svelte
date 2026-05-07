<script>
  import { reveal } from './actions.js'

  const skills = [
    'Python', 'R', 'SQL', 'JavaScript', 'Node.js',
    'React', 'PostgreSQL', 'Docker', 'FastAPI', 'Mapbox', 'Git',
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
        class="font-sans font-bold text-4xl lg:text-5xl tracking-tight text-ink mb-12 leading-tight">
      Who I Am
    </h2>

    <div class="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">

      <!-- Bio -->
      <div use:reveal={{ delay: 140 }} class="space-y-5 font-serif text-[17px] text-ink-mid leading-relaxed">
        <p>
          I'm a Computer Science student at the University of Colorado Boulder with a minor in
          Business, passionate about building things that connect technology, data, and
          real-world decision making.
        </p>
        <p>
          My work spans machine learning, full-stack development, and data analytics. I enjoy
          being hands-on — whether that's collaborating with a team, talking through a problem,
          or turning an idea into something that actually works.
        </p>
        <p>
          Outside of school I love being outdoors and cheering on local Colorado sports teams!
        </p>
      </div>

      <!-- Education + skills — plain text, no card -->
      <div use:reveal={{ delay: 200 }} class="space-y-7 font-sans">
        <div>
          <p class="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-2">Education</p>
          <p class="font-semibold text-[15px] text-ink leading-snug">University of Colorado Boulder</p>
          <p class="text-[14px] text-ink-mid mt-0.5">B.S. Computer Science &nbsp;·&nbsp; Business Minor</p>
          <p class="text-[14px] font-semibold text-accent mt-1">GPA: 3.9</p>
        </div>
        <div>
          <p class="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-2">Upcoming</p>
          <p class="font-semibold text-[15px] text-ink leading-snug">Data Analyst Intern</p>
          <p class="text-[14px] text-ink-mid mt-0.5">Norfolk Iron &amp; Metal</p>
        </div>
        <div>
          <p class="text-[11px] font-semibold tracking-[0.14em] uppercase text-accent mb-3">Core Skills</p>
          <div class="flex flex-wrap gap-2">
            {#each skills as skill}
              <span class="px-3 py-1 rounded-full border border-accent/20 text-xs
                           font-medium text-ink-mid hover:border-accent hover:text-accent
                           transition-colors duration-200 cursor-default">
                {skill}
              </span>
            {/each}
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
