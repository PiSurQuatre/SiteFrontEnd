import { Utilisateur } from "./utilisateur.entitee";

export class Email {
    email: string;
    active: boolean;
    proprietaire: Utilisateur;
}