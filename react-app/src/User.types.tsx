export interface User {
    id: number | null;
    name: string;
    email: string;
    phone?: string | null | undefined;
    roleId?: number;
    isActive: boolean;
}
const defaultUser: User = {
        id: null, 
        name: "Asia", 
        email: "mail@example.com",
        phone: "123456789",
        roleId: 1,
        isActive: true
}

export default defaultUser