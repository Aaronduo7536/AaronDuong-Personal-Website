export function reveal(node, { delay = 0 } = {}) {
  if (delay) node.style.transitionDelay = `${delay}ms`
  node.classList.add('reveal')

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          node.classList.add('visible')
          observer.unobserve(node)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  observer.observe(node)
  return { destroy() { observer.disconnect() } }
}
