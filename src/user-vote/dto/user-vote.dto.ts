import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString } from 'class-validator';
import { UserSelected } from 'src/constants/user-vote.constant';

export class UserVoteDTO {
  @IsString()
  readonly userVoteId: string;

  @IsEnum(UserSelected)
  @ApiProperty({
    description: 'description of the UserSelected property',
    enum: UserSelected,
  })
  voteSelected: UserSelected;
}
