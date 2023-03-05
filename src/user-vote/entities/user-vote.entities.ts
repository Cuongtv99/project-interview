import { ApiProperty } from '@nestjs/swagger';
import { UserSelected } from 'src/constants/user-vote.constant';

export class UserVote {
  @ApiProperty()
  userVoteId: string;

  @ApiProperty({ enum: ['FUNNY', 'NOT_FUNNY'] })
  voteSelected: UserSelected;
}
