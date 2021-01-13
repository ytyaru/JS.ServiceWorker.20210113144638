import ServiceWorkerTest from './ServiceWorkerTest.js';
window.addEventListener('load', (event) => {
//    console.log('has navigator:',navigator);
//    console.log(`has serviceWorker: ${'serviceWorker' in navigator}`);
//    let test = new ServiceWorkerTest(navigator.serviceWorker);
    let test = new ServiceWorkerTest();
});
