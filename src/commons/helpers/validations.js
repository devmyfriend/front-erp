

export const validateExpression = ( expression, term )=>{

    const regex = new RegExp(expression);

    return regex.test(term);

}