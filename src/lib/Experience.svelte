<script>
  import { reveal } from './actions.js'
  import resume from '../assets/resume.pdf'

  const entries = [
    {
      date:    'Incoming',
      role:    'Data Analyst Intern',
      org:     'Norfolk Iron and Metal',
      bullets: [
        'Incoming summer internship — joining the data analytics team',
        'Will work on data-driven initiatives across operations and business processes',
      ],
      highlight: true,
    },
    {
      date:    'Present',
      role:    'Head Student IT Technician',
      org:     'Leeds School of Business · CU Boulder',
      bullets: [
        'Provide technical support to 5,000+ students, faculty, and staff',
        'Handle installation and maintenance of 250+ computer systems',
        'Lead and mentor a team of 6 student technicians',
        'Manage the Bloomberg Lab and CU Leeds RAP Dorm',
      ],
      highlight: false,
    },
    {
      date:    'Internship',
      role:    'Software Developer Intern',
      org:     'Oasis Dental',
      bullets: [
        'Built website features to improve patient engagement and internal operations',
        'Executed SEO initiatives that increased clicks by 11.6% and search impressions by 17.5% in 90 days',
      ],
      highlight: false,
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
      Experience
    </h2>

    <!-- Timeline -->
    <div class="relative pl-8 lg:pl-12 border-l border-accent/15">
      {#each entries as entry, i}
        <div use:reveal={{ delay: i * 100 }}
             class="relative pb-14 last:pb-0 group">
          <!-- Dot -->
          <div class="absolute -left-[calc(2rem+5px)] lg:-left-[calc(3rem+5px)] top-2
                      w-2.5 h-2.5 rounded-full ring-2 ring-bg transition-all duration-300
                      {entry.highlight
                        ? 'bg-accent ring-accent/30'
                        : 'bg-sand-dark group-hover:bg-accent group-hover:ring-accent/30'}">
          </div>

          <div class="flex items-start gap-3 flex-wrap mb-1">
            <span class="font-sans text-[11px] font-semibold tracking-[0.1em] uppercase
                         px-2.5 py-0.5 rounded-full
                         {entry.highlight
                           ? 'bg-accent/10 text-accent'
                           : 'bg-sand text-ink-muted'}">
              {entry.date}
            </span>
          </div>

          <h3 class="font-sans font-bold text-[18px] text-ink tracking-tight">{entry.role}</h3>
          <p class="font-sans text-[13px] font-medium text-accent mb-3">{entry.org}</p>

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
      <a href={resume} target="_blank" rel="noopener"
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
