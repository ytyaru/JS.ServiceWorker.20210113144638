class ServiceWorkerTest {
    constructor() {
        this.msg="Hello ServiceWorker!!";
        this.#setup();
    }
    show() {
        console.log(this.msg);
        alert(this.msg);
    }
    #setup() {
        console.log('has navigator:',navigator);
        console.log(`has serviceWorker: ${'serviceWorker' in navigator}`);
        navigator.serviceWorker.register('ServiceWorkerTest.js', {
            scope: './'
        }).then(function(registration) {
            var serviceWorker;
            if (registration.installing) {
                console.log('installing');
                serviceWorker = registration.installing;
                document.querySelector('#kind').textContent = 'installing';
            } else if (registration.waiting) {
                console.log('waiting');
                serviceWorker = registration.waiting;
                document.querySelector('#kind').textContent = 'waiting';
            } else if (registration.active) {
                console.log('active');
                serviceWorker = registration.active;
                document.querySelector('#kind').textContent = 'active';
            }
            if (serviceWorker) {
                console.log(`state: ${serviceWorker.state}`);
                serviceWorker.addEventListener('statechange', function (e) {
                    console.log(`state: ${e.target.state}`);
                });
            }
        }).catch (function (error) {
            console.log(error);
        });
    }
    download() {

    }

    install() {

    }

    activate() {

    }
}
