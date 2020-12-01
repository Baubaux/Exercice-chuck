chuckNorrisFacts = ["Peter Parker a été mordu par une araignée, Clark Kent a été mordu par Chuck Norris", "Chuck Norris peut faire des ronds avec une equerre", "Chuck Norris a déjà compté jusqu'à l'infini. Deux fois.", "Un jour, deux individus se sont introduits dans le jardin de Chuck Norris. Depuis, on n'a plus de nouvelles d'Adam et Ève.", "C'est Chuck Norris lui même qui a signé un autographe sur le front d'Harry Potter.", "Avant d'aller à l'école, Chuck Norris déposait ses parents au travail.", "Chuck Norris peut faire un copier-coller sur une machine à écrire.", "Chuck Norris peut jouer à Candy Crush sur un téléphone fixe.", "Chuck Norris ne porte pas de montre. Il décide de l’heure qu’il est.", "Si Chuck Norris avait été pris dans le film 300 il l’aurait renommé en « 1 »."]

function newQuote () {
    // console.log(chuckNorrisFacts[1]);
    // quote.textContent = chuckNorrisFacts[1];

    function randomNb(min, max)
    {
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var nb = randomNb(1, chuckNorrisFacts.length);
    
    // nb = chuckNorrisFacts[i];

    quote.textContent = nb;
}

const factBtn = document.querySelector("#factBtn");
factBtn.addEventListener("click", newQuote);

const quote = document.querySelector('#quote');

