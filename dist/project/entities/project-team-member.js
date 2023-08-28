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
exports.ProjectTeamMember = void 0;
const base_entity_1 = require("../../domain/base.entity");
const typeorm_1 = require("typeorm");
const project_team_entity_1 = require("./project-team.entity");
const user_entity_1 = require("../../user/entities/user.entity");
let ProjectTeamMember = exports.ProjectTeamMember = class ProjectTeamMember extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_team_entity_1.ProjectTeam, (projectteam) => projectteam.projectteammember),
    __metadata("design:type", project_team_entity_1.ProjectTeam)
], ProjectTeamMember.prototype, "projectteam", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User),
    __metadata("design:type", user_entity_1.User)
], ProjectTeamMember.prototype, "member", void 0);
exports.ProjectTeamMember = ProjectTeamMember = __decorate([
    (0, typeorm_1.Entity)()
], ProjectTeamMember);
//# sourceMappingURL=project-team-member.js.map