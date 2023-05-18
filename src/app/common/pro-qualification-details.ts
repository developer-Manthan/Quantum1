export class ProQualificationDetails {
    constructor(public applicantType: {
                    [key: string] : string
                },
                public typeSelected: string,
                public yearsOfExperience: number,
                public currentCTC: string,
                public expectedCTC: string,
                public expertiseInTech: {
                    name: string,
                    selected: boolean
                }[],
                public otherExpertiseTech: string,
                public familiarInTech: {
                    name: string,
                    selected: boolean
                }[],
                public otherFamiliarTech: string,
                public oNPOptions: string[],
                public onNoticePeriod: string,
                public endOfNoticePeriod: string,
                public noticePeriodDuration: {
                    [key: string] : string
                },
                public durationSelected: string,
                public aFTOptions: string[],
                public appearedForTest: string,
                public roleAppliedFor: string) {}
}
