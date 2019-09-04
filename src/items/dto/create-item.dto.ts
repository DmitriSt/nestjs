import { ApiModelProperty } from '@nestjs/swagger';

export class CreateItemDto {
    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly qty: number;

    @ApiModelProperty()
    readonly description: string;
}