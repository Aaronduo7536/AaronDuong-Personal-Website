<script>
  import resume from '../assets/resume.pdf'
</script>

<footer class="py-8 px-6 lg:px-20 bg-bg border-t border-accent/10
              flex items-center justify-between gap-4 flex-wrap">
  <p class="font-sans text-[12px] text-ink-muted">© 2025 Aaron Duong.</p>
  <div class="flex gap-6">
    <a href="https://github.com/Aaronduo7536" target="_blank" rel="noopener"
       class="font-sans text-[12px] font-medium text-ink-muted hover:text-accent transition-colors">
      GitHub
    </a>
    <a href="mailto:ajd23021@gmail.com"
       class="font-sans text-[12px] font-medium text-ink-muted hover:text-accent transition-colors">
      Email
    </a>
    <a href={resume} target="_blank" rel="noopener"
       class="font-sans text-[12px] font-medium text-ink-muted hover:text-accent transition-colors">
      Resume
    </a>
  </div>
</footer>
