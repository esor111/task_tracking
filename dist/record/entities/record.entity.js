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
exports.Record = void 0;
const base_entity_1 = require("../../domain/base.entity");
const typeorm_1 = require("typeorm");
const concern_entity_1 = require("../../concern/entities/concern.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const column_entity_1 = require("../../column/entities/column.entity");
let Record = exports.Record = class Record extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => column_entity_1.ColumnName),
    __metadata("design:type", column_entity_1.ColumnName)
], Record.prototype, "column", void 0);
__decorate([
    (0, typeorm_1.Column)('jsonb'),
    __metadata("design:type", Object)
], Record.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, user => user.record),
    __metadata("design:type", user_entity_1.User)
], Record.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => concern_entity_1.Concern, concern => concern.records),
    __metadata("design:type", concern_entity_1.Concern)
], Record.prototype, "concern", void 0);
exports.Record = Record = __decorate([
    (0, typeorm_1.Entity)()
], Record);
//# sourceMappingURL=record.entity.js.map