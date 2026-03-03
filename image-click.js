
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('img').forEach(function(img) {
    img.style.cursor = 'pointer';
    img.addEventListener('click', function(event) {
     
      event.stopPropagation();
      
      window.open(this.src, '_blank');
    });
  });
});