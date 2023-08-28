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
exports.BidRepository = void 0;
const decorators_1 = require("@nestjs/common/decorators");
const typeorm_1 = require("typeorm");
const business_entity_1 = require("./business.entity");
let BidRepository = exports.BidRepository = class BidRepository extends typeorm_1.Repository {
    constructor(dataSource) {
        super(business_entity_1.BusinessEntity, dataSource.createEntityManager());
    }
};
exports.BidRepository = BidRepository = __decorate([
    (0, decorators_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.DataSource])
], BidRepository);
//# sourceMappingURL=business.repository.js.map