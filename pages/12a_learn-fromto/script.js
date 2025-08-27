import gsap from 'gsap'

const bars = document.querySelectorAll('.bar')

bars.forEach((bar,index) => {
  gsap.fromTo(bar,
    {
    scaleY:.4,
  },{
    scaleY:1.6,
    duration:.6,
    ease:'sine.inOut',
    repeat:-1,
    yoyo:true,
    delay:index *.1,
  })
})