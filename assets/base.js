(function(){
  'use strict';
  var SH = window.SH = window.SH || {};

  function el(id){ return document.getElementById(id); }

  /* ===================== MENU MOVIL ===================== */
  var menuBtn = el('menuBtn');
  var mobileNav = el('mobile-nav');
  if (menuBtn && mobileNav){
    menuBtn.addEventListener('click', function(){
      var isOpen = mobileNav.classList.toggle('open');
      menuBtn.classList.toggle('open', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
    });
    Array.prototype.forEach.call(mobileNav.querySelectorAll('a'), function(a){
      a.addEventListener('click', function(){
        mobileNav.classList.remove('open'); menuBtn.classList.remove('open');
        menuBtn.setAttribute('aria-expanded','false');
      });
    });
  }

  /* ===================== PREGUNTAS FRECUENTES ===================== */
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function(f){
    var btn = f.querySelector('.faq-q');
    if (btn) btn.addEventListener('click', function(){ f.classList.toggle('open'); });
  });

  /* ===================== REVEAL EN SCROLL ===================== */
  var revObs = null;
  function observeReveals(){
    if (!('IntersectionObserver' in window)){
      Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function(elm){ elm.classList.add('in'); });
      return;
    }
    if (!revObs){
      revObs = new IntersectionObserver(function(entries){
        entries.forEach(function(en){
          if (en.isIntersecting){ en.target.classList.add('in'); revObs.unobserve(en.target); }
        });
      }, {threshold:0.12});
    }
    Array.prototype.forEach.call(document.querySelectorAll('.reveal'), function(elm){
      if (!elm.dataset.revealed){ elm.dataset.revealed = '1'; revObs.observe(elm); }
    });
  }
  SH.observeReveals = observeReveals;
  observeReveals();

  /* ===================== ANO FOOTER ===================== */
  var year = el('year');
  if (year) year.textContent = new Date().getFullYear();

  /* ===================== WHATSAPP FLOTANTE ===================== */
  var waIcon = el('waIcon');
  var waIconFallback = el('waIconFallback');
  if (waIcon && waIconFallback){
    waIcon.addEventListener('error', function(){ waIcon.style.display='none'; waIconFallback.style.display='block'; });
  }
  var waBubble = el('waBubble');
  var waBubbleClose = el('waBubbleClose');
  if (waBubble && waBubbleClose){
    var tHide = setTimeout(function(){ waBubble.classList.remove('show'); }, 14000);
    setTimeout(function(){ waBubble.classList.add('show'); }, 2500);
    waBubbleClose.addEventListener('click', function(){ clearTimeout(tHide); waBubble.classList.remove('show'); });
  }
  var waFloat = el('waFloat');
  if (waFloat){
    setInterval(function(){
      waFloat.classList.add('shake');
      setTimeout(function(){ waFloat.classList.remove('shake'); }, 600);
    }, 25000);
  }
})();