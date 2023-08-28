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
exports.Concern = void 0;
const base_entity_1 = require("../../domain/base.entity");
const typeorm_1 = require("typeorm");
const record_entity_1 = require("../../record/entities/record.entity");
const user_entity_1 = require("../../user/entities/user.entity");
const column_entity_1 = require("../../column/entities/column.entity");
const concern_row_entity_1 = require("./concern.row.entity");
let Concern = exports.Concern = class Concern extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Concern.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => column_entity_1.ColumnName),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Concern.prototype, "columns", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => record_entity_1.Record, (record) => record.concern),
    __metadata("design:type", Array)
], Concern.prototype, "records", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], Concern.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => concern_row_entity_1.ConcernRow, (concernrow) => concernrow.concern),
    __metadata("design:type", concern_row_entity_1.ConcernRow)
], Concern.prototype, "concernrows", void 0);
exports.Concern = Concern = __decorate([
    (0, typeorm_1.Entity)()
], Concern);
//# sourceMappingURL=concern.entity.js.map