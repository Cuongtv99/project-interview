import { Module } from '@nestjs/common';
import { UserVoteController } from '../controller/user-vote.controller';
import { UserVoteService } from '../service/user-vote.service';

@Module({
  controllers: [UserVoteController],
  providers: [UserVoteService],
})
export class UserVoteModule {}
