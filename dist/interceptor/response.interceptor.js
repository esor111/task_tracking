"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformResponseInterceptor = void 0;
const common_1 = require("@nestjs/common");
const operators_1 = require("rxjs/operators");
let TransformResponseInterceptor = exports.TransformResponseInterceptor = class TransformResponseInterceptor {
    intercept(context, next) {
        const { query, method, params, user } = context.switchToHttp().getRequest();
        console.log({ query });
        let meta = {};
        if (query && query.page) {
            meta['page'] = Number(query.page);
            meta['recordsPerPage'] = Number(query.take);
            meta['previous'] = meta['page'] > 1 ? meta['page'] - 1 : null;
        }
        return next.handle().pipe((0, operators_1.map)((responseData) => {
            console.log(responseData);
            return responseData;
        }));
    }
};
exports.TransformResponseInterceptor = TransformResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformResponseInterceptor);
//# sourceMappingURL=response.interceptor.js.map