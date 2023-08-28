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
exports.TeamService = void 0;
const common_1 = require("@nestjs/common");
const team_entity_1 = require("./entities/team.entity");
const team_repository_1 = require("./team.repository");
const business_service_1 = require("../business/business.service");
const business_team_repository_1 = require("./entities/business-team.repository");
const business_team_member_repository_1 = require("../business/entities/business-team-member.repository");
const user_service_1 = require("../user/user.service");
let TeamService = exports.TeamService = class TeamService {
    constructor(businessservice, userservice, teamRepo, businessTeamRepo, businessteammemberrepository, teammemberrepository) {
        this.businessservice = businessservice;
        this.userservice = userservice;
        this.teamRepo = teamRepo;
        this.businessTeamRepo = businessTeamRepo;
        this.businessteammemberrepository = businessteammemberrepository;
        this.teammemberrepository = teammemberrepository;
    }
    async createTeam(createTeamDto) {
        const { name, description } = createTeamDto;
        const team = new team_entity_1.Team();
        team.name = name;
        team.description = description;
        return await this.teamRepo.save(team);
    }
    async getAllTeams() {
        return this.teamRepo.find();
    }
    async addBusinessTeam(teamDto) {
        const savedbusinessteam = teamDto.businessteam.map(async (eachteam) => {
            const { businessId, teamId } = eachteam;
            const team = await this.teamRepo.findOne({
                where: { id: teamId },
            });
            if (!team) {
                throw new common_1.HttpException("team not found", 404);
            }
            const business = await this.businessservice.findOne(businessId);
            if (!business) {
                throw new common_1.HttpException("business not found", 404);
            }
            const businessteam = await this.businessTeamRepo.save({ team, business });
            const member = await eachteam?.member?.map(async (member) => {
                const { userId } = member;
                const user = await this.userservice.findOneById3(userId);
                if (!user) {
                    throw new common_1.HttpException("user not found", 404);
                }
                return this.businessteammemberrepository.save({ user, businessteam });
            });
            return { ...businessteam, member };
        });
        return savedbusinessteam;
    }
    async addProjectTeam(addprojectteamdto) {
    }
    async addBusinessTeamOnly(addteamDto) {
    }
    findOne(id) {
        return `This action returns a #${id} team`;
    }
    update(id, updateTeamDto) {
        return `This action updates a #${id} team`;
    }
    remove(id) {
        return `This action removes a #${id} team`;
    }
};
exports.TeamService = TeamService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [business_service_1.BusinessService,
        user_service_1.UserService,
        team_repository_1.TeamRepository,
        business_team_repository_1.BusinessTeamRepository,
        business_team_member_repository_1.BusinessTeamMemberRepository,
        business_team_member_repository_1.BusinessTeamMemberRepository])
], TeamService);
//# sourceMappingURL=team.service.js.map