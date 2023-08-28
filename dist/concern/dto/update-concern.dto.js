"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateConcernDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_concern_dto_1 = require("./create-concern.dto");
class UpdateConcernDto extends (0, swagger_1.PartialType)(create_concern_dto_1.CreateConcernDto) {
}
exports.UpdateConcernDto = UpdateConcernDto;
//# sourceMappingURL=update-concern.dto.js.map