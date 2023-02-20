export function validateFullName(fullName: string): Boolean {
    const validation = /^[a-zA-Z ]{2,30}$/;
    return validation.test(fullName);
}

export function validateIdentityCard(identityCard: string): Boolean {
    if(typeof identityCard !== 'string') return false;
    const validation = /^[0-9]{7,8}$/;
    return validation.test(identityCard);
}

export function validateEmail(email: string): Boolean {
    const validation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return validation.test(email);

}