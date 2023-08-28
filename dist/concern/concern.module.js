"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcernModule = void 0;
const common_1 = require("@nestjs/common");
const concern_service_1 = require("./concern.service");
const concern_controller_1 = require("./concern.controller");
const typeorm_1 = require("@nestjs/typeorm");
const concern_entity_1 = require("./entities/concern.entity");
const user_module_1 = require("../user/user.module");
const column_entity_1 = require("../column/entities/column.entity");
const columntype_entity_1 = require("../column/entities/columntype.entity");
const concern_row_entity_1 = require("./entities/concern.row.entity");
let ConcernModule = exports.ConcernModule = class ConcernModule {
};
exports.ConcernModule = ConcernModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([concern_entity_1.Concern, column_entity_1.ColumnName, columntype_entity_1.ColumnType, concern_row_entity_1.ConcernRow]), user_module_1.UserModule],
        controllers: [concern_controller_1.ConcernController],
        providers: [concern_service_1.ConcernService],
        exports: [concern_service_1.ConcernService]
    })
], ConcernModule);
//# sourceMappingURL=concern.module.js.map