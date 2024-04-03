import { User } from "./User";
import { Company } from "./Companys";
import { CustomMap } from "./Maps";

//Create user and company instances and add markers of user and company to Map instance
const user = new User();
const company = new Company();
const customMap = new CustomMap('map');
customMap.addMarker(user);
customMap.addMarker(company);

// Get the users current location
console.log(user);
console.log(company);

