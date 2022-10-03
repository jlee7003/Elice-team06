import { Token } from "src/models";

class TokenService {
    private static instance: TokenService;
    private token: any;

    private constructor(token: any) {
        this.token = token;
    }

    public static getInstance() {
        if (!TokenService.instance) {
            TokenService.instance = new TokenService(Token);
        }

        return TokenService.instance;
    }

    public checkToken(token: string) {
        return this.token.findOne({ token });
    }

    public addToken(userID: string, token: string) {
        try {
            this.token.create({ userID, token });
        } catch (err) {
            throw new Error(err);
        }
    }

    public removeToken(token: string) {
        try {
            this.token.deleteOne({ token });
        } catch (err) {
            throw new Error(err);
        }
    }
}

export default TokenService;
