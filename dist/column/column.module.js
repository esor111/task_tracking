"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnModule = void 0;
const common_1 = require("@nestjs/common");
const column_service_1 = require("./column.service");
const column_controller_1 = require("./column.controller");
const typeorm_1 = require("@nestjs/typeorm");
const column_entity_1 = require("./entities/column.entity");
const columntype_entity_1 = require("./entities/columntype.entity");
const columnvalue_entity_1 = require("./entities/columnvalue.entity");
const concern_module_1 = require("../concern/concern.module");
const concern_entity_1 = require("../concern/entities/concern.entity");
const concern_row_entity_1 = require("../concern/entities/concern.row.entity");
let ColumnModule = exports.ColumnModule = class ColumnModule {
};
exports.ColumnModule = ColumnModule = __decorate([
    (0, common_1.Module)({
        imports: [concern_module_1.ConcernModule, typeorm_1.TypeOrmModule.forFeature([column_entity_1.ColumnName, columntype_entity_1.ColumnType, columnvalue_entity_1.ColumnValue, concern_entity_1.Concern, concern_row_entity_1.ConcernRow])],
        controllers: [column_controller_1.ColumnController],
        providers: [column_service_1.ColumnService],
        exports: [column_service_1.ColumnService]
    })
], ColumnModule);
//# sourceMappingURL=column.module.js.map