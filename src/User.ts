import { faker } from "@faker-js/faker";

export class User {
    firstName: string;
    lastName: string;
    jobType: string;
    title: string;
    location: {
        lat: number;
        lng: number;
    };

    constructor() {
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
        this.jobType = faker.name.jobType();
        this.title = faker.name.jobTitle();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    }

    markerContent(): string {
        return `User Name: ${this.firstName} ${this.lastName}
            <br/>
            Their title: ${this.title}
            <br/>
            Job type: ${this.jobType}
        `;
    }
}