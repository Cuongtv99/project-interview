import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsUUID } from 'class-validator';
import { UserSelected } from 'src/constants/user-vote.constant';

export class UserVoteDTO {
  @IsString()
  @IsUUID('4', { each: true })
  userVoteId: string;

  @IsEnum(UserSelected)
  @ApiProperty({
    description: 'description of the UserSelected property',
    enum: UserSelected,
  })
  voteSelected: UserSelected;
}
