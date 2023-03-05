import { Injectable } from '@nestjs/common';
import { UserVote } from './entities/user-vote.entities';
import { UserVoteDTO } from './dto/user-vote.dto';

@Injectable()
export class UserVoteService {
  private readonly userVote: UserVote[] = [];

  CreateUserVote(userVoteSelected: UserVoteDTO): UserVote {
    this.userVote.push(userVoteSelected);
    return userVoteSelected;
  }

  findOne(id: number): UserVote {
    return this.userVote[id];
  }
}
