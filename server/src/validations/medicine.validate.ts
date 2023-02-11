export function validateName(name: string): Boolean{
    const validation = /^[a-zA-Z]{2,30}$/;
    return validation.test(name);
}