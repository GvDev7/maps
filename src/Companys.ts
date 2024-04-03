import { faker } from "@faker-js/faker";
import { Mappable } from "./Maps";

export class Company implements Mappable {
    name: string;
    catchPhrase: string;
    location: {
        lat: number;
        lng: number;
    }

    constructor() {
        this.name = faker.company.companyName();
        this.catchPhrase = faker.company.catchPhrase();
        this.location = {
            lat:  parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        }
    }

    markerContent(): string {
        return `Comapny Name: ${this.name}
            <br/>
            Catch Phrase: ${this.catchPhrase}
        `;
    }
}