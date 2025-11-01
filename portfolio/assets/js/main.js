// Minimal JS: year update and contact form demo
document.addEventListener('DOMContentLoaded',function(){
  var yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  var form = document.getElementById('contact-form');
  if(form){
    var status = document.getElementById('form-status');
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(status) status.textContent = 'Sending (demo) — check console';
      console.log('Contact form submit (demo):',{
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      });
      setTimeout(function(){ if(status) status.textContent = 'Message logged to console (demo)'; }, 600);
    });

    var btn = document.getElementById('send-btn');
    if(btn){ btn.addEventListener('click', function(){ form.dispatchEvent(new Event('submit')); }); }
  }
});
