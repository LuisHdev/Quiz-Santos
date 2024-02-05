const switchBtn = document.getElementById('flexSwitchCheckDefault');
switchBtn.addEventListener('click', switchTheme);

function switchTheme() {
    document.body.classList.toggle('dark-body');

    const jersey = document.getElementById('jersey');

    if (switchBtn.checked) {
        jersey.setAttribute('src', './imgs/camisa-black.png');
    } else {
        jersey.setAttribute('src', './imgs/camisa-white.png');
    }
}

const form = document.getElementById('form');

form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    const answers = [];

    const question1 = document.querySelector('input[name="flexRadioDefault1"]:checked').value;
    const question2 = document.querySelector('input[name="flexRadioDefault2"]:checked').value;
    const question3 = document.querySelector('input[name="flexRadioDefault3"]:checked').value;
    const question4 = document.querySelector('input[name="flexRadioDefault4"]:checked').value;
    const question5 = document.querySelector('input[name="flexRadioDefault5"]:checked').value;

    answers.push(question1, question2, question3, question4, question5);

    let jeanLucas = 0;
    let neymar = 0;
    let borges = 0;
    let aranha = 0;

    for (let i = 0; i < answers.length; i++) {
        const jogador = answers[i];

        switch (jogador) {
            case "Jean Lucas":
                jeanLucas++;
                break;
            case "Neymar":
                neymar++;
                break;
            case "Borges":
                borges++;
                break;
            case "Aranha":
                aranha++;
                break;
            // default:
            //     alert('Calculando...');
        }
    }

    if (jeanLucas > neymar && jeanLucas > borges && jeanLucas > aranha) {

        const containerQuiz = document.querySelector('.container-quiz')
        const resultJeanLucas = document.createElement('div')
        const name = document.createElement('h1')
        const picture = document.createElement('img')
        const description = document.createElement('p')

        resultJeanLucas.className = 'result-container'
        resultJeanLucas.id = 'dark-result-container'
        name.innerText = 'Jean Lucas'
        picture.setAttribute('src', './imgs/jean-lucas.jpg')
        picture.setAttribute('alt', 'Jean Lucas')
        description.innerText = 'Volante da base do Flamengo, atuou com a camisa do Peixe fazendo boas atuações com destaque em sua raça e velocidade nos jogos e após o Santos Futebol Clube ser rebaixado para a série B do campeonato brasileiro, ele recusou a diminuição do salário no clube alvinegro e passou a defender o Esporte Clube Bahia.'

        containerQuiz.appendChild(resultJeanLucas)
        resultJeanLucas.append(name, picture, description)


    } else if (neymar > jeanLucas && neymar > borges && neymar > aranha) {

        const containerQuiz = document.querySelector('.container-quiz')
        const resultNeymar = document.createElement('div')
        const name = document.createElement('h1')
        const picture = document.createElement('img')
        const description = document.createElement('p')

        resultNeymar.className = 'result-container'
        resultNeymar.id = 'dark-result-container'
        name.innerText = 'Neymar Jr.'
        picture.setAttribute('src', './imgs/neymar.jpg')
        picture.setAttribute('alt', 'Neymar Jr')
        description.innerText = 'Neymar Jr. é um proeminente jogador de futebol, iniciou sua carreira no Santos FC, destacando-se por suas habilidades técnicas, dribles e gols. Transferiu-se para o Barcelona em 2013, colaborando com Messi e Suárez em conquistas, incluindo a Liga dos Campeões. Em 2017, tornou-se o jogador mais caro da história ao se transferir para o Paris Saint-Germain. Além de clubes, Neymar é figura essencial na seleção brasileira, participando de várias Copas do Mundo. Volta e meia Neymar se encontra em algumas polêmicas e sua personalidade carismática e estilo de jogo único o mantêm como uma figura proeminente e controversa no cenário futebolístico global.'

        containerQuiz.appendChild(resultNeymar)
        resultNeymar.append(name, picture, description)

    } else if (borges > jeanLucas && borges > neymar && borges > aranha) {

        const containerQuiz = document.querySelector('.container-quiz')
        const resultBorges = document.createElement('div')
        const name = document.createElement('h1')
        const picture = document.createElement('img')
        const description = document.createElement('p')

        resultBorges.className = 'result-container'
        resultBorges.id = 'dark-result-container'
        name.innerText = 'Borges'
        picture.setAttribute('src', './imgs/borges.jpg')
        picture.setAttribute('alt', 'Borges')
        description.innerText = 'Borges atuou como atacante ao longo de sua carreira, destacando-se por sua eficácia na finalização e capacidade de marcar gols. Teve passagens por vários clubes, incluindo o Santos FC e o São Paulo FC, onde conquistou títulos importantes. Seu estilo de jogo centrado no faro de gol o tornou uma figura respeitada no futebol brasileiro. Borges encerrou sua carreira profissional em 2017.'

        containerQuiz.appendChild(resultBorges)
        resultBorges.append(name, picture, description)

    } else if (aranha > jeanLucas && aranha > neymar && aranha > borges) {

        const containerQuiz = document.querySelector('.container-quiz')
        const resultAranha = document.createElement('div')
        const name = document.createElement('h1')
        const picture = document.createElement('img')
        const description = document.createElement('p')

        resultAranha.className = 'result-container'
        resultAranha.id = 'dark-result-container'
        name.innerText = 'Aranha'
        picture.setAttribute('src', './imgs/aranha.jpg')
        picture.setAttribute('alt', 'Aranha')
        description.innerText = 'O goleiro Aranha além de ser conhecido por sua carreira no Santos FC, onde atuou entre 2004 e 2015.  contribuindo para a conquista de títulos, incluindo a Copa Libertadores em 2011. e marcada por destacadas defesas e participações em equipes brasileiras de futebol. Aranha foi envolvido em uma polêmica após em um jogo contra o Grêmio ter sofrido insultos racistas e ter junto com a justiça punindo a torcedora responsável e o próprio clube.'

        containerQuiz.appendChild(resultAranha)
        resultAranha.append(name, picture, description)

    } else {
        alert('Empate ou erro na lógica de contagem.');
    }
});



