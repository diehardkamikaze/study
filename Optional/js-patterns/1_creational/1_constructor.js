class Server {
    constructor(name, ip) {
        this.name = name;
        this.ip = ip;
    }
    getUrl() {
        return `https://${this.ip}:80`;
    }
}

const awg = new Server('AWS Russia', '82.43.54.11')
console.log(awg.getUrl());