Array.prototype.slice.call(document.querySelectorAll('*')).forEach(el => {
  el.style.position = 'fixed'
  el.style.top = Math.random() * window.innerHeight + 'px'
  el.style.left = Math.random() * window.innerWidth + 'px'
})
