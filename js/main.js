// ── Cursor
const cursor = document.getElementById('cursor');
if(cursor){
  document.addEventListener('mousemove',e=>{
    cursor.style.left=e.clientX+'px';
    cursor.style.top=e.clientY+'px';
  });
}

// ── Nav scroll
const nav = document.querySelector('nav');
window.addEventListener('scroll',()=>{
  nav.classList.toggle('scrolled',window.scrollY>50);
});

// ── Active nav link
const links = document.querySelectorAll('.nav-links a');
links.forEach(l=>{
  if(l.href===window.location.href) l.classList.add('active');
});

// ── Hamburger
const ham = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');
function closeMenu(){
  navLinks.classList.remove('open');
  ham.classList.remove('open');
}
if(ham){
  ham.addEventListener('click',()=>{
    navLinks.classList.toggle('open');
    ham.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
}

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
    }
  });
},{threshold:0.1});
reveals.forEach(r=>observer.observe(r));

// ── Stagger children
document.querySelectorAll('.stagger').forEach(parent=>{
  Array.from(parent.children).forEach((child,i)=>{
    child.style.transitionDelay=`${i*0.1}s`;
    child.classList.add('reveal');
    observer.observe(child);
  });
});

// ── Counter animation
function animateCounter(el){
  const target = parseInt(el.dataset.target);
  const duration = 1800;
  const step = target/duration*16;
  let current = 0;
  const timer = setInterval(()=>{
    current = Math.min(current+step,target);
    el.textContent = Math.floor(current)+(el.dataset.suffix||'');
    if(current>=target) clearInterval(timer);
  },16);
}
const counterObserver = new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting && !e.target.dataset.counted){
      e.target.dataset.counted='1';
      animateCounter(e.target);
    }
  });
},{threshold:0.5});
document.querySelectorAll('.counter').forEach(c=>counterObserver.observe(c));
