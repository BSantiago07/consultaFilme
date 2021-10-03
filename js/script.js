    const imgFilme = document.getElementById('imagem2');
    const txtFilme = document.getElementById('txtFilme');
    const btnFilme = document.getElementById('btnFilme');

    const txtNome = document.getElementById('txtNome');
    const txtDiretor = document.getElementById('txtDiretor');
    const txtGenero = document.getElementById('txtGenero');
    const txtAno = document.getElementById('txtAno');
    const txtIdioma = document.getElementById('txtIdioma');
    const txtPais = document.getElementById('txtPais');

    btnFilme.addEventListener('click', getFilme);


    const options = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }

    function getFilme() {
        let nomeFilme = txtFilme.value;
        let url = `http://www.omdbapi.com/?t=${nomeFilme}&apikey=763bfc46`;


        fetch(url, options)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                imgFilme.src = `${data.Poster}`;
                txtNome.value = `${data.Title}`;
                txtDiretor.value = `${data.Director}`;
                txtGenero.value = `${data.Genre}`;
                txtAno.value = `${data.Year}`;
                txtIdioma.value = `${data.Language}`;
                txtPais.value = `${data.Country}`;
            });
    }