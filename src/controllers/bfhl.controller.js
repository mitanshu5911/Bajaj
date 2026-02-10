import validateBFHL from '../validators/bfhl.validator.js';
import mathService from '../services/math.service.js';
import aiService from '../services/ai.service.js';
const handleBFHL = async (req, res) => {
    try {
        const { key, value } = validateBFHL(req.body);

        let result;

        switch (key) {
            case 'fibonacci':
                result = mathService.fibonacci(value);
                break;
            case 'prime':
                result = mathService.primes(value);
                break;
            case 'lcm':
                result = mathService.lcm(value);
                break;
            case 'hcf':
                result = mathService.hcf(value);
                break;
            case 'AI':
                result = await aiService.askAI(value);
                break;

            default:
                throw { status: 400, message: 'Invalid operation' };
        }

        return res.status(200).json({
            is_success: true,
            official_email: "mitanshu1398.be23@chitkara.edu.in",
            data: result
        });
    } catch (err) {
        return res.status(err.status || 400).json({
            is_success: false,
            message: err.message
        });
    }
}

export default handleBFHL;