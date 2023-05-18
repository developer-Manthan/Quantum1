export class LoginDetails {
    constructor(public firstName: string,
                public lastName: string,
                public email: string,
                public phoneNumber: number,
                public portfolioURL: string,
                public prefJobRoles: {
                    name: string,
                    selected: boolean
                }[],
                public referredBy: string,
                public sendUpdates: boolean) {
        // this._firstName = _firstName;
        // this._lastName = _lastName;
    }
    
    // get firstName(): string {
    //     console.log(this._firstName + " --in get");
    //     return this._firstName;
    // }

    // set firstName(fName: string) {
    //     this._firstName = fName;
    //     console.log(this._firstName + " --in set");
    // }

    // get lastName(): string {
    //     console.log(this._lastName + " --in get");
    //     return this._lastName;
    // }

    // set lastName(lName: string) {
    //     this._lastName = lName;
    //     console.log(this._lastName + " --in set");
    // }

};
