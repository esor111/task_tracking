"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedAddressModule = void 0;
const common_1 = require("@nestjs/common");
const shared_address_service_1 = require("./shared-address.service");
const shared_address_controller_1 = require("./shared-address.controller");
const typeorm_1 = require("@nestjs/typeorm");
const shared_address_entity_1 = require("./entities/shared-address.entity");
const user_module_1 = require("../user/user.module");
const address_module_1 = require("../address/address.module");
let SharedAddressModule = exports.SharedAddressModule = class SharedAddressModule {
};
exports.SharedAddressModule = SharedAddressModule = __decorate([
    (0, common_1.Module)({
        imports: [user_module_1.UserModule, address_module_1.AddressModule, typeorm_1.TypeOrmModule.forFeature([shared_address_entity_1.SharedAddress])],
        controllers: [shared_address_controller_1.SharedAddressController],
        providers: [shared_address_service_1.SharedAddressService]
    })
], SharedAddressModule);
//# sourceMappingURL=shared-address.module.js.map