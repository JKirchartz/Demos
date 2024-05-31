let app_btn = document.createElement('button');
app_btn.innerText = "Run The App!"
app_btn.addEventListener('click', () => { alert("You clicked the button!") });
document.appendChild(app_btn);

let app_btn = document.createElement('button');
app_btn.innerText = "Install The App!"
app_btn.addEventListener('click', () => { alert("You clicked the button!") });
document.appendChild(app_btn);

if (navigator && navigator.serviceWorker) {
  navigator.serviceWorker.register('worker.js');
}
