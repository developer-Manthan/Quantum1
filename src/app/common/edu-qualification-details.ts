export class EduQualificationDetails {
    constructor(public percentage: number,
                public yearOfPassing: {
                    [key: string] : string
                },
                public yearSelected: string,
                public qualification: {
                    [key: string] : string
                },
                public qualificationSelected: string,
                public stream: {
                    [key: string] : string
                },
                public streamSelected: string,
                public college: {
                    [key: string] : string
                },
                public collegeSelected: string,
                public otherCollegeName: string,
                public collegeLocation: string) {}
}
