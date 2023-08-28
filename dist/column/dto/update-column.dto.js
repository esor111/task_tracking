"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateColumnDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_column_dto_1 = require("./create-column.dto");
class UpdateColumnDto extends (0, swagger_1.PartialType)(create_column_dto_1.CreateColumnDto) {
}
exports.UpdateColumnDto = UpdateColumnDto;
//# sourceMappingURL=update-column.dto.js.map