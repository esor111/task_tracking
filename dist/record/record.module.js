"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecordModule = void 0;
const common_1 = require("@nestjs/common");
const record_service_1 = require("./record.service");
const record_controller_1 = require("./record.controller");
const typeorm_1 = require("@nestjs/typeorm");
const record_entity_1 = require("./entities/record.entity");
const concern_module_1 = require("../concern/concern.module");
const user_module_1 = require("../user/user.module");
let RecordModule = exports.RecordModule = class RecordModule {
};
exports.RecordModule = RecordModule = __decorate([
    (0, common_1.Module)({
        imports: [concern_module_1.ConcernModule, user_module_1.UserModule, typeorm_1.TypeOrmModule.forFeature([record_entity_1.Record])],
        controllers: [record_controller_1.RecordController],
        providers: [record_service_1.RecordService]
    })
], RecordModule);
//# sourceMappingURL=record.module.js.map