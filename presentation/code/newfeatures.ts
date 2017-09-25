enum UserTypes {
    SuperAdmin,
    Admin,
    Regular,
    Viewer
}

class User {
    private name: string;
    readonly id: number;
    protected status: string;

    constructor(name, id, status) {
        this.name = name;
        this.id = id;
        this.status = status;
    }
}

interface Options {
    name: string;
    id: number;
    status: string;
}

class SuperUser {
    private name: string;
    readonly id: number;
    protected status: string;

    constructor(options: Options) {
        this.name = options.name;
        this.id = options.id;
        this.status = options.status;
    }
}

