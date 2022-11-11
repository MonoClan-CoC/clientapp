import axios from 'axios'

export class Repository {
    private data: string = JSON.stringify({
        "collection": "ClansDetails",
        "database": "MonoClan",
        "dataSource": "Cluster0"
    });

    private config: any = {
        method: 'post',
        url: 'https://data.mongodb-api.com/app/data-lfpip/endpoint/data/v1/action/findOne',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            'api-key': 'iEcKHLItZw5i2q81DzQzKrNFxO3Lv5dcZJHvUh2E5Ykv9yIrfbM8bqdHbqjKf8d7',
        },
        data: this.data
    };

    public constructor() {
    }

    public fetchData(): void {
        axios(this.config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}
