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
exports.ConcernRow = void 0;
const typeorm_1 = require("typeorm");
const base_entity_1 = require("../../domain/base.entity");
const concern_entity_1 = require("./concern.entity");
const columnvalue_entity_1 = require("../../column/entities/columnvalue.entity");
let ConcernRow = exports.ConcernRow = class ConcernRow extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => concern_entity_1.Concern, concern => concern.concernrows),
    __metadata("design:type", concern_entity_1.Concern)
], ConcernRow.prototype, "concern", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => columnvalue_entity_1.ColumnValue, columnValue => columnValue.concernrow),
    __metadata("design:type", Array)
], ConcernRow.prototype, "columnvalues", void 0);
exports.ConcernRow = ConcernRow = __decorate([
    (0, typeorm_1.Entity)()
], ConcernRow);
//# sourceMappingURL=concern.row.entity.js.map