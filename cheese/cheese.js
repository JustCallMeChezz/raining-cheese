document.addEventListener('DOMContentLoaded', function() {
    const chezzFallContainer = document.querySelector('.chezz-fall-container');
    const chezzSources = ['cheese.png', 'cheese/lily_fall.png'];
    const cheeseIcon = document.getElementById('cheeseIcon');

    function createChezz() {
        const chezz = document.createElement('img');
        chezz.src = chezzSources[0];
        chezz.classList.add('chezz-fall');
        chezz.style.left = `${Math.random() * 100}vw`; 
        chezz.style.animationDuration = `${5 + Math.random() * 5}s`; 
        chezzFallContainer.appendChild(chezz);

        chezz.addEventListener('click', () => {
            const nextIndex = (chezzSources.indexOf(chezz.src.split('/').pop()) + 1) % chezzSources.length;

            setTimeout(() => {
                chezz.src = chezzSources[nextIndex];
            }, parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--transition-duration')) * 1000);
        });

        chezz.addEventListener('animationend', () => {
            chezz.remove();
        });
    }

    cheeseIcon.addEventListener('click', () => {
        cheeseIcon.classList.add('clicked'); 
        setInterval(createChezz, 500); 
    });
});