document.querySelector('input').addEventListener('change', () => {
    const buttonInf = document.querySelector('#buttoninf');
    const name = document.querySelector("#inputfile").files[0].name;
    if (name.substring(name.length - 4, name.length) === '.wav' || name.substring(name.length - 4, name.length) === '.mp3') {
        buttonInf.innerHTML = '<button id="button">поржать</button>';
        const button = document.querySelector('#button');
        document.querySelector('#autoplaysettings').innerHTML = '<button id="autosmehBtn">натроить автосмех</button>';
        const buttonautosmeh = document.querySelector('#autosmehBtn');
        buttonautosmeh.addEventListener('click', autoplayAudio);
        button.addEventListener('click', playAudio);
    } else {
        buttonInf.innerHTML = 'это не музыка';
    }
});

function playAudio() {
    document.querySelector('#autoplaysettings').innerHTML = '';
    const audio = new Audio(`ауди/${document.querySelector("#inputfile").files[0].name}`);
    audio.play();
}

function autoplayAudio() {
    document.querySelector('#buttoninf').innerHTML = '';
    document.querySelector('#autoplaysettings').innerHTML = 'Скороть запуска аудио: <input type="number" id="inputspeed" placeholder="2раз/с"><br><br>Время прололжения запуска аудио: <input type="number" id="inputtime" placeholder="5c"><br><br><button id="button">автопоржать</button>';
    document.querySelector('#button').addEventListener('click', () => {
        const timeInput = document.querySelector('#inputtime');
        const speedInput = document.querySelector('#inputspeed');
        if (timeInput.value === '' || timeInput.value <= 0) {
            window.time = 5;
        } else {
            window.time = timeInput.value;
        }
        if (speedInput.value === '' || speedInput.value <= 0) {
            window.speed = 2;
        } else {
            window.speed = speedInput.value;
        }
        timeInput.value = '';
        speedInput.value = '';
        const autoplay = setInterval(() => {
            const audio = new Audio(`ауди/${document.querySelector("#inputfile").files[0].name}`);
            audio.play();
        }, 1000 / speed)
        setTimeout(() => {clearInterval(autoplay);}, time * 1000);
    });
}

