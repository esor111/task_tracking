"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSharedAddressDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_shared_address_dto_1 = require("./create-shared-address.dto");
class UpdateSharedAddressDto extends (0, swagger_1.PartialType)(create_shared_address_dto_1.CreateSharedAddressDto) {
}
exports.UpdateSharedAddressDto = UpdateSharedAddressDto;
//# sourceMappingURL=update-shared-address.dto.js.map