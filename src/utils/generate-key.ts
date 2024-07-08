export const generateKey = (pre:unknown) => {
    return `${ pre }_${Math.random()}_${ new Date().getTime() }`;
}