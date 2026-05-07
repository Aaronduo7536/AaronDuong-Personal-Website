<script>
  import { reveal } from './actions.js'

  const entries = [
    {
      date:  '2022 — Present',
      role:  'CS Student',
      org:   'University of Colorado Boulder',
      desc:  'Pursuing a B.S. in Computer Science with a Business minor. Coursework spans algorithms, systems programming, databases, and software engineering.',
      bullets: [
        'Building real-world projects alongside coursework',
        'Focused on backend systems, APIs, and data-driven applications',
        'Business minor provides product and market awareness',
      ],
    },
    {
      date:  'Ongoing',
      role:  'Independent Developer',
      org:   'Personal Projects',
      desc:  'Building full-stack applications independently, with an emphasis on clean APIs, reliable infrastructure, and meaningful user experiences.',
      bullets: [
        'Designed and shipped Bird Brain — a full-stack geospatial platform',
        'Containerized development environments with Docker',
        'Integrated third-party APIs: eBird, Mapbox, Gemini',
      ],
    },
    {
      date:  'Target: 2025 – 2026',
      role:  'Seeking Internship / Co-op',
      org:   'Open to Opportunities',
      desc:  'Actively looking for roles in software engineering with particular interest in:',
      bullets: [
        'Backend & API development',
        'Data-driven products',
        'Developer tools & platform engineering',
        'Geospatial / mapping applications',
      ],
    },
  ]
</script>

<section id="experience" class="py-24 px-6 lg:px-20 bg-bg">
  <div class="max-w-5xl mx-auto">
    <div use:reveal class="flex items-center gap-3 font-sans text-[11px] font-semibold
                           tracking-[0.18em] uppercase text-accent mb-3">
      Background
      <span class="block w-12 h-px bg-accent"></span>
    </div>

    <h2 use:reveal={{ delay: 100 }}
        class="font-sans font-bold text-4xl lg:text-5xl tracking-tight text-ink mb-14 leading-tight">
      Experience &amp; Direction
    </h2>

    <!-- Timeline -->
    <div class="relative pl-8 lg:pl-12 border-l border-accent/15">
      {#each entries as entry, i}
        <div use:reveal={{ delay: i * 100 }}
             class="relative pb-14 last:pb-0 group">
          <!-- Dot -->
          <div class="absolute -left-[calc(2rem+5px)] lg:-left-[calc(3rem+5px)] top-2
                      w-2.5 h-2.5 rounded-full bg-sand-dark ring-2 ring-bg
                      group-hover:bg-accent group-hover:ring-accent/30 transition-all duration-300">
          </div>

          <p class="font-sans text-[12px] font-medium text-ink-muted mb-1">{entry.date}</p>
          <h3 class="font-sans font-bold text-[18px] text-ink tracking-tight">{entry.role}</h3>
          <p class="font-sans text-[13px] font-medium text-accent mb-3">{entry.org}</p>

          <p class="font-serif text-[15px] text-ink-mid leading-relaxed mb-2">{entry.desc}</p>
          <ul class="list-disc pl-5 space-y-1.5">
            {#each entry.bullets as bullet}
              <li class="font-serif text-[15px] text-ink-mid leading-relaxed">{bullet}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

    <!-- Resume CTA -->
    <div use:reveal={{ delay: 300 }} class="flex gap-4 flex-wrap mt-14">
      <a href="submission/resources/resume.pdf" target="_blank" rel="noopener"
         class="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-accent text-bg-card
                font-sans text-[13px] font-semibold tracking-wide
                shadow-[0_6px_24px_rgba(124,92,62,0.28)]
                hover:bg-accent-lt hover:-translate-y-0.5 transition-all duration-250">
        Download Resume ↓
      </a>
      <a href="mailto:aadu7536@colorado.edu"
         class="inline-flex items-center gap-2 px-7 py-3 rounded-full
                border border-accent/30 text-ink-mid font-sans text-[13px] font-semibold
                hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all duration-250">
        Email Me
      </a>
    </div>
  </div>
</section>
