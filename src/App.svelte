<script>
  import Nav        from './lib/Nav.svelte'
  import Hero       from './lib/Hero.svelte'
  import About      from './lib/About.svelte'
  import Projects   from './lib/Projects.svelte'
  import Experience from './lib/Experience.svelte'
  import Contact    from './lib/Contact.svelte'
  import Footer     from './lib/Footer.svelte'
</script>

<Nav />
<main>
  <Hero />
  <div class="h-px bg-accent/10"></div>
  <About />
  <div class="h-px bg-accent/10 mx-6 lg:mx-20"></div>
  <Projects />
  <div class="h-px bg-accent/10 mx-6 lg:mx-20"></div>
  <Experience />
  <div class="h-px bg-accent/10 mx-6 lg:mx-20"></div>
  <Contact />
</main>
<Footer />
