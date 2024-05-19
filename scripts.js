document.addEventListener('DOMContentLoaded', () => {
    const movingObject = document.getElementById('moving-object');
    const adjustButton = document.getElementById('adjust-button');
    const resetButton = document.getElementById('reset-button');
    const resultMessage = document.getElementById('result-message');
    
    let interval;
    let speed = 5; // Velocidad de movimiento del objeto

    const startMoving = () => {
        interval = setInterval(() => {
            let top = parseInt(movingObject.style.top || 0);
            top += speed;
            if (top >= 200 || top <= -200) {
                speed = -speed;
            }
            movingObject.style.top = top + 'px';
        }, 20);
        movingObject.style.backgroundColor = 'lightblue'; // Color del objeto en movimiento
        movingObject.textContent = ''; // Texto del objeto en movimiento
    };

    const stopMoving = () => {
        clearInterval(interval);
    };

    const resetGame = () => {
        movingObject.style.top = '0px';
        resultMessage.textContent = '';
        startMoving();
    };

    adjustButton.addEventListener('click', () => {
        stopMoving();
        const top = parseInt(movingObject.style.top || 0);
        const effectiveness = Math.max(0, 100 - Math.abs(top));
        resultMessage.textContent = `Efectividad: ${effectiveness}%`;

        if (effectiveness === 100) {
            movingObject.style.backgroundColor = 'green'; // Color del objeto cuando acierta
            movingObject.textContent = '¡Correcto!'; // Texto del objeto cuando acierta
        } else {
            movingObject.style.backgroundColor = 'red'; // Color del objeto cuando falla
            movingObject.textContent = '¡Fallaste!'; // Texto del objeto cuando falla
        }
    });

    resetButton.addEventListener('click', () => {
        stopMoving();
        resetGame();
    });

    // Inicia el movimiento del objeto al cargar la página
    resetGame();
});
