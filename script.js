(function(){
  const lb = document.getElementById('lightbox');
  const lbContent = document.getElementById('lightbox-content');
  const closeBtn = lb.querySelector('.close');
  function openLB(node){ lb.classList.remove('hidden'); lbContent.innerHTML=''; lbContent.appendChild(node); }
  function closeLB(){ lb.classList.add('hidden'); lbContent.innerHTML=''; }
  closeBtn.addEventListener('click', closeLB);
  lb.addEventListener('click', (e)=>{ if(e.target===lb) closeLB(); });

  document.querySelectorAll('.thumb').forEach(el=>{
    el.addEventListener('click', ()=>{
      const type = el.getAttribute('data-type');
      if(type==='image'){
        const src = el.getAttribute('data-src');
        const img = new Image();
        img.src = src;
        img.alt = 'preview';
        openLB(img);
      }
      if(type==='video'){
        const src = el.getAttribute('data-src');
        const v = document.createElement('video');
        v.src = src;
        v.controls = true;
        v.autoplay = true;
        v.playsInline = true;
        openLB(v);
      }
      if(type==='fb'){
        const href = el.getAttribute('data-href');
        const iframe = document.createElement('iframe');
        const plugin = 'https://www.facebook.com/plugins/video.php?href='+encodeURIComponent(href)+'&show_text=false&width=900';
        iframe.src = plugin;
        iframe.allowFullscreen = true;
        iframe.setAttribute('frameborder','0');
        openLB(iframe);
      }
    });
  });
})();