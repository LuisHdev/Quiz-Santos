const switchBtn = document.getElementById('flexSwitchCheckDefault')
switchBtn.addEventListener('click', switchTheme)

function switchTheme(){
    document.body.classList.toggle('dark-body')

    const jersey = document.getElementById('jersey')
    const players = document.querySelectorAll('.player')


    if (switchBtn.checked) {
        jersey.setAttribute('src', './imgs/camisa-black.png');
        players.forEach(function(player) {
            player.setAttribute('src', './imgs/player-dark.png');
        });
    } else {
        jersey.setAttribute('src', './imgs/camisa-white.png');
        players.forEach(function(player) {
            player.setAttribute('src', './imgs/player.png');
        });
    }

}