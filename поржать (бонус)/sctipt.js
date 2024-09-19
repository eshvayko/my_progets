document.querySelector('input').addEventListener('change', () => {
    var buttonInf = document.querySelector('#buttoninf');
    var name = document.querySelector("#inputfile").files[0].name;
    if (name.substring(name.length - 4, name.length) == '.wav' || name.substring(name.length - 4, name.length) == '.mp3') {
        buttonInf.innerHTML = '<button id="button">поржать</button>';
        var button = document.querySelector('#button');
        document.querySelector('#autoplaysettings').innerHTML = '<button id="autosmehBtn">натроить автосмех</button>';
        var buttonautosmeh = document.querySelector('#autosmehBtn');
        buttonautosmeh.addEventListener('click', autoplayAudio);
        button.addEventListener('click', playAudio);
    } else {
        buttonInf.innerHTML = 'это не музыка';
    }
});

function playAudio() {
    document.querySelector('#autoplaysettings').innerHTML = '';
    var audio = new Audio(`ауди/${document.querySelector("#inputfile").files[0].name}`);
    audio.play();
}

function autoplayAudio() {
    document.querySelector('#buttoninf').innerHTML = '';
    document.querySelector('#autoplaysettings').innerHTML = 'Скороть запуска аудио: <input type="number" id="inputspeed" placeholder="2раз/с"><br><br>Время прололжения запуска аудио: <input type="number" id="inputtime" placeholder="5c"></input><br><br><button id="button">автопоржать</button>';
    document.querySelector('#button').addEventListener('click', () => {
        var timeInput = document.querySelector('#inputtime');
        var speedInput = document.querySelector('#inputspeed');
        window.time = timeInput.value;
        window.speed = speedInput.value;
        timeInput.value = '';
        speedInput.value = '';
        var autoplay = setInterval(() => {
            var audio = new Audio(`ауди/${document.querySelector("#inputfile").files[0].name}`);
            audio.play();
        }, 1000 / speed)
        setTimeout(() => {clearInterval(autoplay);}, time * 1000);
    });
}

