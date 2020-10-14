export default class FetchData {
    startURL = 'https://api.spacexdata.com/v4/';

    getResource = async url => {
        const data = await fetch(url);

        if(!data.ok) {
            throw new Error(`Error: ${data.body}`);
        }

        return await data.json();
    }

    postResource = url => {
        fetch(url, {
            method: 'POST',
            headers: {
                "Content-type" : ''
            }

        })
    }

    getRocket = async () => await this.getResource(this.startURL + 'rockets');

    getLaunches = async () => await this.getResource(this.startURL + 'launches/past');

    getCompany = async () => await this.getResource(this.startURL + 'company');
}