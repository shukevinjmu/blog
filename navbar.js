fetch('navbar.html')
  .then(data => data.text())
  .then(html => document.getElementById('navbar-load').innerHTML = html);

const sidePanelButton = document.getElementById("side-panel-button");
const sidePanel = document.getElementById("panel");


sidePanelButton.addEventListener("click", () =>{
      if (window.matchMedia('screen and (max-width: 1200px)').matches) {
          if(sidePanel.style.width > 1 + '%'){
              sidePanel.style.width = 0;
              sidePanel.style.height = 100 + '%';
              sidePanelButton.style.color = 'whitesmoke';
              sidePanel.style.display = 'none';
          } else{
              sidePanel.style.display = 'block';
              sidePanel.style.height = 30 + '%';
              sidePanel.style.width = 100 + '%';
              sidePanelButton.style.color = '#259a7a';
          }
  
      } else {
          if(sidePanel.style.width > 0 + 'vw'){
              sidePanel.style.display = 'block';
              sidePanel.style.width = 0;
              sidePanel.style.height = 100 + '%';
              sidePanelButton.style.color = 'whitesmoke';
          } else{
              sidePanel.style.display = 'block';
              sidePanel.style.width = 15 + 'vw';
              sidePanel.style.height = 100 + '%';
              sidePanelButton.style.color = '#259a7a';
          }
      }
  
  
});
  