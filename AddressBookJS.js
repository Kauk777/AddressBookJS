class Contact {
    // property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phNo;
    email;

    // constructor
    constructor(...params) {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phNo=params[6];
        this.email=params[7];
    }

    // getters and setters
    get firstName() { return this.firstName; }
    set firstName(firstName) { this.firstName=firstName; }
    get lastName() { return this.lastName; }
    set lastName(lastName) { this.lastName=lastName; }

    // method
    toString() {
        return "Name= "+this.firstName+" "+this.lastName+", Address= "+this.address+", city= "+this.city+", state= "+this.state+", zip= "+this.zip+", phoneNo= "+this.phNo+", email= "+this.email;
    }
}

let contact1=new Contact('Syouz','Hixa','Bottom bell mountain','LA','California',201451,98441253,'soyuz@cere.xz');
console.log(contact1);
let c2= new Contact('Noah','Lorez');
console.log(c2);