import bcrypt from "bcrypt";
import { User, Token } from "../models";
import { UserInterface } from "../lib/interface";
import { sign } from "../authentication/jwt-util";

class UserService {
    private static instance: UserService;
    private user: any;

    private constructor(User: any) {
        this.user = User;
    }

    public static getInstance() {
        if (UserService.instance == null) {
            UserService.instance = new UserService(User);
        }

        return UserService.instance;
    }

    public async register(userData: UserInterface) {
        try {
            if (this.isInvalidEmail(userData.email)) {
                return { ok: false };
            }

            const result = await this.findUser({ email: userData.email });
            if (result) {
                return { ok: false };
            }

            const password = userData.password;
            const hash = await bcrypt.hash(password, 10);

            userData.password = hash;

            this.user.create(userData);

            return { ok: true };
        } catch (err) {
            throw new Error(err);
        }
    }

    public async login(email: string, password: string) {
        if (this.isInvalidEmail(email)) {
            return { ok: false };
        }

        try {
            const userData = await this.findUser({ email });

            if (userData == null) {
                return { ok: false };
            }

            const result = await bcrypt.compare(password, userData.password);

            if (result == null) {
                return { ok: false };
            }

            const accessToken = sign({ userID: userData.usreID });
            let refreshToken = sign({}, "14d");

            Token.findOneAndDelete({ userID: userData.userID }).exec(() => {
                Token.create({ userID: userData.userID, token: refreshToken });
            });

            return { ok: true, accessToken, refreshToken };
        } catch (err) {
            throw new Error(err);
        }
    }

    public async changePassword(userID: string, password: string) {
        try {
            const userData = this.findUser({ userID });

            if (userData == null) {
                return { ok: false };
            }

            const hash = await bcrypt.hash(password, 10);

            await this.user.findOneAndUpdate({ userID }, { password: hash });

            return { ok: true };
        } catch (err) {
            throw new Error(err);
        }
    }

    private isInvalidEmail(email: string) {
        const reg = /^[\w-\.]+@([\w-]+\.)+com$/;

        if (!reg.test(email)) {
            return true;
        }

        return false;
    }

    public findUser(userData: { [key: string]: string }) {
        return this.user.findOne(userData).exec();
    }

    public async comparePassword(userID: string, hashedPassword: string) {
        const userData = await this.findUser({ userID });

        if (userData == null) {
            return null;
        }

        return bcrypt.compare(userData.password, hashedPassword);
    }
}

export default UserService;
