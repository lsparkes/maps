import { faker } from "@faker-js/faker";

import { Mappable } from './CustomMap';

export class Company implements Mappable {
    companyName: string;
    companyCatchPhrase: string;
    location: {
        lat: number,
        lng: number
    };
    colour: string = 'red';

    constructor() {
        this.companyName = faker.company.name();
        this.companyCatchPhrase = faker.company.catchPhrase();
        this.location = {
            lat: parseFloat(faker.address.latitude()),
            lng: parseFloat(faker.address.longitude())
        };
    };

    markerContent(): string {
        return `
            <div>
                <h1>Company Name: ${ this.companyName }</h1>
                <h3>Catch Phrase: ${this.companyCatchPhrase}</h5>
            </div>
        `;
    };
}