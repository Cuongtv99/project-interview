import { Module } from '@nestjs/common';
import { UserVoteModule } from './user-vote/user-vote.module';

@Module({
  imports: [UserVoteModule],
})
export class AppModule {}
