const episodeResults = document.querySelector('.episodes');

let loader = `<div class="boxLoading"></div>`;
document.querySelector('.boxLoading').innerHTML = loader;

fetch('https://the-prisoner-api.vercel.app/episodes')
    .then((res) => res.json())
    .then(function (data) {
        let episodes = data.results;
        console.log(data);

        // Stop loading spinner after data loads
        document.querySelector('.loader').style.display = 'none';

        return data.map(function (item) {
            episodeResults.innerHTML += `
                <div class='episode'>
                    <h3 id='title'>${item.title}</h3>
                    <div class='details'>
                        <p>
                            <strong>Season: </strong>${item.season}<br />
                            <strong>Episode: </strong>${item.episode}<br />
                            <strong>Year: </strong>${item.air_year}
                        </p>
                    </div>
                    <img id='image' src=${item.img} alt='${item.title}' title='${item.title}' />
                    <br />
                    <p class='narration'><strong>Opening Narration: </strong>${item.opening_narration}</p>
                    <p class='narration'><strong>Closing Narration: </strong>${item.closing_narration}</p>
                </div>
            `;
        });
    })
    .catch(function (error) {
        console.log(error);
    });
