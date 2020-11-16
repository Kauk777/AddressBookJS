var zipReg=RegExp('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$');
var nameReg=RegExp('^[A-Z]{1}[a-z]{3,}$');
var locReg=RegExp('^[A-Za-z 0-9]{4,}$');
var phoneReg=RegExp('^[6-9]{1}[0-9]{9}$');
var emailReg=RegExp('^[0-9a-zA-Z_+-]+(\\.?[0-9a-zA-Z_+-]*)[^\\.]@[0-9a-zA-Z]+(\\.[0-9a-zA-Z]{2,})(\\.?[a-zA-Z]{2,})?$');
const prompt = require('prompt-sync')();
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
        if(nameReg.test(firstName))
        this._firstName=firstName;
        else throw 'Invalid First Name';
    }
    get lastName() { return this._lastName; }
    set lastName(lastName) { 
        if(nameReg.test(lastName))
        this._lastName=lastName; 
        else throw 'Invalid Last Name';
    }
    get address() { return this._address; }
    set address(address) {
        if(locReg.test(address))
        this._address=address;
        else throw 'Invalid Address, length should be greater';
    }
    get city() { return this._city; }
    set city(city) {
        if(locReg.test(city))
        this._city=city;
        else throw 'Invalid city length';
    }
    get state() { return this._state; }
    set state(state) {
        if(locReg.test(state))
        this._state=state;
        else throw 'Invalid State length';
    }
    get zip() { return this._zip; }
    set zip(zip) {
        if(zipReg.test(zip))
        this._zip=zip;
        else throw 'Invalid Zip Code';
    }
    get phoneNo() { return this._phoneNo; }
    set phoneNo(phoneNo) {
        if(phoneReg.test(phoneNo))
        this._phoneNo=phoneNo;
        else throw 'Invalid Phone Number';
    }
    get email() { return this._email; }
    set email(email) {
        if(emailReg.test(email))
        this._email=email;
        else throw 'Invalid Email Type';
    }

    // methods
    toString() {
        return "Name= "+this.firstName+" "+this.lastName+", Address= "+this.address+", city= "+this.city+", state= "+this.state+", zip= "+this.zip+", phoneNo= "+this.phoneNo+", email= "+this.email;
    }
}

let contactBook;
try {
    contactBook = [ new Contact('Syouz','Hixa','Bottom bell mountain','Los Angels','California',201451,9844125306,'soyuz@cere.xz'),
                    new Contact('Markie','Jordon','Mastai 101','Las Vegas','Nevada','400088',8801341806,'marlie89@hotmail.com'),
                    new Contact('Noah','Parker','Blue Hill 225','Pasedena','California','205588',9871555806,'noah777@gamil.com'),
                    new Contact('Noah','Parker','Blue Hill 225','Pasedena','California','205588',9871555806,'noah777@gamil.com')];
    contactBook.forEach(contact => console.log(contact.toString()));
    console.log('Removing Duplicates Contacts');
    contactBook=checkDuplicate(contactBook,contactBook.firstName);
    contactBook.forEach(contact => console.log(contact.toString()));
    let enterName=prompt('Enter Name to edit the Contact: ');
    contactEdit(enterName);
    console.log('***************************************************************************************');
    contactBook.forEach(contact => console.log(contact.toString()));
    console.log('***************************************************************************************');
    let deleteName=prompt('Enter name to delete the contact: ');
    deleteContact(deleteName);
    contactBook.forEach(contact => console.log(contact.toString()));
    console.log('***************************************************************************************');
    console.log('Number of Contacts: '+countContact());
    console.log('***************************************************************************************');
    let cityName=prompt('Enter city to display person names in that city: ');
    displayByCity(cityName);
    let stateName=prompt('Enter state name to display person names in that state: ');
    displayByState(stateName);
 
} catch(e) {
    console.error(e);
}

function contactEdit(name) {
    let editContact=contactBook.filter(contactName => contactName.firstName.concat(' ',contactName.lastName).localeCompare(name)==0)
                    .forEach(contact => { let editAddress=prompt('Enter new Address to Edit ContactBook: ');
                                          contact.address=editAddress;
                                          let editZip=prompt('Enter new Zip Code: ');
                                          contact.zip=editZip; });                                                         
}

function deleteContact(name) {
    let pos=contactBook.findIndex(contactName => contactName.firstName.concat(' ',contactName.lastName).localeCompare(name)==0);
    if(pos>0)
    contactBook.splice(pos,1);
}

function countContact() {
    return contactBook.reduce((accumulator,current) => accumulator.concat(current), []).length;   
}

function checkDuplicate(contactArr,name) {
    return contactArr.filter((obj,pos,arr) => {
        return arr.map(mapObj => mapObj.firstName).indexOf(obj.firstName) === pos;
    });
}

function displayByCity(cityName) {
    contactBook.filter(value => value.city.localeCompare(cityName)==0).forEach(contact => console.log(contact.firstName+' '+contact.lastName) );
}
function displayByState(stateName) {
    contactBook.filter(value => value.state.localeCompare(stateName)==0).forEach(contact => console.log(contact.firstName+' '+contact.lastName) );
}

