export class Nurse {
    id?: number;
    name: string;
    username: string;
    password: string;
    passwordConfirm: string;
    img: string;

    constructor(name: string, username: string, password: string, passwordConfirm: string, img: string) {
        this.name = name;
        this.username = username;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.img = img;
    }
}

