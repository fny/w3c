var codeView = document.getElementById('code-view');
codeView.classList.toggle('hidden'); // Start hidden if JavaScript is enabled
document.getElementById('view-source').addEventListener('click', function(){
  codeView.classList.toggle('hidden');
});
