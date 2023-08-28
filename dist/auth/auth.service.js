"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_1 = require("bcrypt");
const user_service_1 = require("../user/user.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = exports.AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async Signup(registeruser) {
        const pass = await this.hashpassword(registeruser.password);
        return await this.userService.registerUser(registeruser, pass);
    }
    async Validateandlogin(logindto) {
        let user = await this.validateUser(logindto);
        const isvalid = await this.comparePass(user.password, logindto.password);
        if (!isvalid) {
            throw new common_1.HttpException('Password not valid', 400);
        }
        return await this.login(user);
    }
    async login(user) {
        const { id, email, name } = user;
        const token = await this.generateToken({ id, name, email });
        return {
            user, token
        };
    }
    async validateUser(loginDto) {
        const { email } = loginDto;
        const user = await this.userService.findOneByemail(email);
        return user;
    }
    async generateToken(user) {
        return this.jwtService.signAsync(user, {
            secret: 'ishworisbillionire',
        });
    }
    async comparePass(dbpass, userpass) {
        return (0, bcrypt_1.compare)(userpass, dbpass);
    }
    async hashpassword(password) {
        return (0, bcrypt_1.hash)(password, 10);
    }
};
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [user_service_1.UserService,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map