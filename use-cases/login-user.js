 /* const { isValidElement } = require("react");

class RegisterUserusCase {
    constructor(userRepository, autoService) {
        this.userRepository = userRepository;
        this.autoServicey = autoService;
    }

    async execute(email, password) {
        const user = await this.userRepository.findByEmail(email);
        if (!user) {
            throw new Error('Invalid credentials');
        }
    }

    const isValidPassword = await this.authService.comparePassword{
        if (!isValidPassword) {
            throw new Error('Invalid credentials');
        }

        const token = this.authService.generateToken(user);

        return {

        }
    }
} */