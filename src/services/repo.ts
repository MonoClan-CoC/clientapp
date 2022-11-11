import axios from 'axios'

export class Repository {

    // private data: string = JSON.stringify({
    //     "collection": "ClansDetails",
    //     "database": "MonoClan",
    //     "dataSource": "Cluster0"
    // });

    private data: string = "query {\n" +
        "  clansDetail {\n" +
        "    _id\n" +
        "\t\tclanLevel\n" +
        "\t\tclanPoints\n" +
        "\t\tclanVersusPoints\n" +
        "\t\tdescription\n" +
        "\t\tisWarLogPublic\n" +
        "\t\tmembers\n" +
        "    memberList {\n" +
        "      clanRank\n" +
        "      donations\n" +
        "      donationsReceived\n" +
        "      expLevel\n" +
        "      name\n" +
        "      previousClanRank\n" +
        "      role\n" +
        "      tag\n" +
        "      trophies\n" +
        "      versusTrophies\n" +
        "    }\n" +
        "\t\tname\n" +
        "\t\trequiredTownhallLevel\n" +
        "\t\trequiredTrophies\n" +
        "\t\trequiredVersusTrophies\n" +
        "\t\ttag\n" +
        "\t\ttype\n" +
        "\t\twarFrequency\n" +
        "\t\twarWinStreak\n" +
        "\t\twarWins\n" +
        "  }\n" +
        "}";

    private config: any = {
        method: 'post',
        url: 'https://realm.mongodb.com/api/client/v2.0/app/data-lfpip/graphql',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Request-Headers': '*',
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            //'apikey': 'kwUbfBPnawSfNzgzWOrZwM5g4IyAGQmH2nTYmYUuDn8CjYtgbWiTkB9hEnsnEWUl',
            'Access-Control-Allow-Origin':'*'
        },
        data: this.data
    };

    public constructor() {
    }

    public async fetchData(): Promise<void> {
        axios(this.config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log(error);
            });
    }

}
