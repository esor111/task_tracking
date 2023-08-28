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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TeamController = void 0;
const common_1 = require("@nestjs/common");
const team_service_1 = require("./team.service");
const create_team_dto_1 = require("./dto/create-team.dto");
const update_team_dto_1 = require("./dto/update-team.dto");
const swagger_1 = require("@nestjs/swagger");
const create_project_dto_1 = require("../project/dto/create-project.dto");
let TeamController = exports.TeamController = class TeamController {
    constructor(teamService) {
        this.teamService = teamService;
    }
    async createTeam(teamDto) {
        return this.teamService.createTeam(teamDto);
    }
    async getAllTeams() {
        return this.teamService.getAllTeams();
    }
    async addBusinessTeam(addteamDto) {
        return this.teamService.addBusinessTeam(addteamDto);
    }
    async addProjectTeam(addprojectteamdto) {
        return this.teamService.addProjectTeam(addprojectteamdto);
    }
    findOne(id) {
        return this.teamService.findOne(+id);
    }
    update(id, updateTeamDto) {
        return this.teamService.update(+id, updateTeamDto);
    }
    remove(id) {
        return this.teamService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "createTeam", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "getAllTeams", null);
__decorate([
    (0, common_1.Post)("/addteam/:businessId"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_team_dto_1.CreateBusinessTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "addBusinessTeam", null);
__decorate([
    (0, common_1.Post)("projectteam/:projectId"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_project_dto_1.addProjectTeamDto]),
    __metadata("design:returntype", Promise)
], TeamController.prototype, "addProjectTeam", null);
__decorate([
    (0, common_1.Get)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_team_dto_1.UpdateTeamDto]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TeamController.prototype, "remove", null);
exports.TeamController = TeamController = __decorate([
    (0, swagger_1.ApiTags)("teams"),
    (0, common_1.Controller)("team"),
    __metadata("design:paramtypes", [team_service_1.TeamService])
], TeamController);
//# sourceMappingURL=team.controller.js.map