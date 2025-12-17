export class Nurse {
    id?: number;
    name: string;
    surname: string;
    username: string;
    password: string;
    passwordConfirm: string;
    img: string;

    constructor(name: string, surname: string, username: string, password: string, passwordConfirm: string, img: string) {
        this.name = name;
        this.surname = surname;
        this.username = username;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.img = img;
    }
}

