export class UserDto{
    id: string;
    userId: string;
    name: string;
    email: string;
    contact: string;
    gender: GenderType;
    ageGroup: AgeGroup;
    credentialId: string;
}
enum GenderType{
    male,
    female,
    other
}
enum AgeGroup{
    child,
    adult,
    seniorCitizen
}