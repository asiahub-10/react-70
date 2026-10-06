export interface User {
    id: number;
    name: string;
    email: string;
    role?: string;
    password?: string;
    created_at?: Date;
    updated_at?: Date;
}

export const defaultUser: User = {
    id: 0,
    name: '',
    email: ''
}