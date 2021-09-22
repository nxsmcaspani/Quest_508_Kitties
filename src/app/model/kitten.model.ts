export enum CatBreed {
    PERSIAN="Persian",
    MAINE_CONNE="Maine Coon",
    BENGAL="Bengal",
    SHORTAIR="Shortair",
    SIAMESE="Siamese",
    SPHYNX="Sphynx",
    RAGDOLL="Ragdoll",
    MUNCHKIN="Munchkin",
    SAVANNAH="Savannah",
    SIBERIAN="Siberian",
    ANGORA="Angora",
    BIRMAN="Birman",
    CHARTREUX="Chartreux",
    BOMBAY="Bombay",
    NONE="None"
}

export class Kitten {
    name : string;
    breed : string;
    birthdate : Date;
    picture : string;
}