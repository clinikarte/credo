async function getRandomCredo() {
    const url = 'https://raw.githubusercontent.com/clinikarte/credo/main/credo.json';

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        const data = await response.json();
        const credoList = data.credo;

        const randomIndex = Math.floor(Math.random() * credoList.length);
        const randomCredo = credoList[randomIndex];

        console.log(randomCredo);
        return randomCredo;
    } catch (error) {
        console.error('Fetch error: ', error);
    }
}

getRandomCredo();
