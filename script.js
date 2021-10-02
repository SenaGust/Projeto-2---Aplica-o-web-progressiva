navigator.serviceWorker.register('service-worker.js');

let tarefas = [];

onload = () => {
  const t = JSON.parse(localStorage.getItem('tarefas'));
  if (t) tarefas = t;
   
};
