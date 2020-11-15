class Contact {
    
    // constructor
    constructor(...params) {
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phoneNo=params[6];
        this.email=params[7];
    }

    // getters and setters
    get firstName() { return this._firstName; }
    set firstName(firstName) { 
        if(this.nameValidate(firstName))
        this._firstName=firstName;
        else throw 'Invalid First Name';
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) { 
        if(this.nameValidate(lastName))
        this._lastName=lastName; 
        else throw 'Invalid Last Name';
    }
    get address() { return this._address; }
    set address(address) {
        if(this.addressValidator(address))
        this._address=address;
        else throw 'Invalid Address, length should be greater';
    }
    get city() { return this._city; }
    set city(city) {
        if(this.addressValidator(city))
        this._city=city;
        else throw 'Invalid city length';
    }
    get state() { return this._state; }
    set state(state) {
        if(this.addressValidator(state))
        this._state=state;
        else throw 'Invalid State length';
    }
    get zip() { return this._zip; }
    set zip(zip) {
        if(this.zipValidator(zip))
        this._zip=zip;
        else throw 'Invalid Zip Code';
    }
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        if(this.phoneValidator(phoneNo))
        this._phoneNo=phoneNo;
        else throw 'Invalid Phone Number';
    }
    get email() { return this._email; }
    set email(email) {
        if(this.emailValidator(email))
        this._email=email;
        else throw 'Invalid Email Type';
    }

    // methods
    nameValidate(name) {
        let nameReg=RegExp('^[A-Z]{1}[a-z]{3,}$');
        if(nameReg.test(name))
        return true;
        else
        return false;
    }
    addressValidator(location) {
        let locReg=RegExp('^[A-Za-z 0-9]{4,}$');
        if(locReg.test(location))
        return true;
        else
        return false;
    }
    zipValidator(zip) {
        let zipReg=RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
        return (zipReg.test(zip))?true:false;
    }

    phoneValidator(phone) {
        let phoneReg=RegExp('^[6-9]{1}[0-9]{9}$');
        return (phoneReg.test(phone))?true:false;
    }

    emailValidator(email) {
        let emailReg=RegExp('^[0-9a-zA-Z_+-]+(\\.?[0-9a-zA-Z_+-]*)[^\\.]@[0-9a-zA-Z]+(\\.[0-9a-zA-Z]{2,})(\\.?[a-zA-Z]{2,})?$');
        return (emailReg.test(email))?true:false;
    }

    toString() {
        return "Name= "+this.firstName+" "+this.lastName+", Address= "+this.address+", city= "+this.city+", state= "+this.state+", zip= "+this.zip+", phoneNo= "+this.phoneNo+", email= "+this.email;
    }
}

let contact1=new Contact('Syouz','Hixa','Bottom bell mountain','Los Angels','California',201451,9844125306,'soyuz@cere.xz');
console.log(contact1.toString());
try {
    let c2=new Contact('Markie','Jordon','Mastai 101','Las Vegas','Nevada','400088',8801341806,'marlie89@_hotmail.com');
    console.log(c2.toString());
} catch(e) {
    console.error(e);
}
