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
                            <strong>Episode: </strong>${item.episode}<br />
                            <strong>Year: </strong>${item.air_year}<br />
                            <strong>Date: </strong>${item.air_date}
                        </p>
                    </div>
                    <img id='image' src=${item.title_img} alt='${item.title}' title='${item.title}' />
                    <br />
                    <a href=${item.wikipedia} rel='noopener noreferrer' target='_blank'>Wikipedia</a> 
                    <a href=${item.imdb} rel='noopener noreferrer' target='_blank'>IMDb</a> 
                    <p class='narration'><strong>Wikipedia Storyline: </strong>${item.wikipedia_storyline}</p>
                    <p class='narration'><strong>IMDb Storyline: </strong>${item.imdb_storyline}</p>
                    <p class='narration'><strong>Trivia: </strong>${item.trivia}</p>
                    <img id='image' src=${item.img} alt='${item.title}' title='${item.title}' />
                    <p class='narration'><strong>Cast: </strong>${item.cast}</p>
                    <p class='narration'><strong>Guest Appearances: </strong><br />${item.guest_appearances.join("<br />")}</p>
                </div>
                <br />
            `;
        });
    })
    .catch(function (error) {
        console.log(error);
    });
