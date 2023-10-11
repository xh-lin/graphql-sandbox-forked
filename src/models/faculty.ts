import data from '../data/faculty.json'

export default class Faculty {
    firstname : string | null
    lastname : string | null
    position : string | null
    organization : string | null
    isPrimaryFaculty : boolean | null

    constructor() {
        this.firstname = null
        this.lastname = null
        this.position = null
        this.organization = null
        this.isPrimaryFaculty = null
    }

    static get(termCode: number, crn: number) {
        const result = data
            .filter((d) => {
                return d.termCode === termCode && d.crn === crn
            })
            .map((d) => {
                const faculty = new Faculty()
                faculty.firstname = d.firstname
                faculty.lastname = d.lastname
                faculty.position = d.position
                faculty.organization = d.organization
                faculty.isPrimaryFaculty = d.isPrimaryFaculty
                return faculty
            })
        return result.length > 0 ? result[0] : null
    }
}