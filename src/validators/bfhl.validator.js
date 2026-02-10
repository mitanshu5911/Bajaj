const validateBFHL = (body) => {
    const keys = Object.keys(body);

    if(keys.length !==1) {
        throw {status: 400, message: "Exactly one key is required"};
    }

    const key = keys[0];
    const value = body[key];

    const allowed = ['fibonacci', 'prime', 'lcm', 'hcf', 'AI'];
    if(!allowed.includes(key)){
        throw { status: 400, message: "Invalid key" };
    }

     if (key === 'fibonacci' && !Number.isInteger(value)) {
    throw { status: 400, message: "Fibonacci requires integer" };
  }

   if (['prime', 'lcm', 'hcf'].includes(key) && !Array.isArray(value)) {
    throw { status: 400, message: "Array required" };
  }

  if (key === 'AI' && typeof value !== 'string') {
    throw { status: 400, message: "AI requires string" };
  }

  return { key, value };

};
export default validateBFHL;