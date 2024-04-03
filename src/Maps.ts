import { User } from "./User";
import { Company } from "./Companys";

export class CustomMap {
   private googleMap: google.maps.Map;

    constructor(divID: string) {
        this.googleMap = new google.maps.Map(document.getElementById(divID) as HTMLElement, {
            zoom: 1,
            center: {
                lat: 0,
                lng: 0
            }
        });
    }

    addUserMarker(user: User): void {

    }

    addCompanyMaker(company: Company): void {

    }
}