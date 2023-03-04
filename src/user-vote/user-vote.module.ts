import { Module } from '@nestjs/common';
import { UserVoteController } from './user-vote.controller';
import { UserVoteService } from './user-vote.service';

@Module({
  controllers: [UserVoteController],
  providers: [UserVoteService],
})
export class UserVoteModule {}
