import { Email } from "./email.entitee";

export class Utilisateur {
    id: number;
    pseudo: string;
    emails: Email[];
}