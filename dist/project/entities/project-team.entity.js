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
exports.ProjectTeam = void 0;
const base_entity_1 = require("../../domain/base.entity");
const typeorm_1 = require("typeorm");
const project_entity_1 = require("./project.entity");
const team_entity_1 = require("../../team/entities/team.entity");
const project_team_member_1 = require("./project-team-member");
let ProjectTeam = exports.ProjectTeam = class ProjectTeam extends base_entity_1.Base {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => project_entity_1.Project, (project) => project.projectteam),
    __metadata("design:type", project_entity_1.Project)
], ProjectTeam.prototype, "project", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => team_entity_1.Team),
    __metadata("design:type", team_entity_1.Team)
], ProjectTeam.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => project_team_member_1.ProjectTeamMember, projectteammember => projectteammember.projectteam),
    __metadata("design:type", project_team_member_1.ProjectTeamMember)
], ProjectTeam.prototype, "projectteammember", void 0);
exports.ProjectTeam = ProjectTeam = __decorate([
    (0, typeorm_1.Entity)()
], ProjectTeam);
//# sourceMappingURL=project-team.entity.js.map