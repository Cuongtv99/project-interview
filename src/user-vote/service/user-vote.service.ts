import { Injectable } from '@nestjs/common';
import { UserVoteDTO } from '../dto/user-vote.dto';
import { UserVote } from '../entities/user-vote.entities';

@Injectable()
export class UserVoteService {
  userVote: UserVote[] = [];

  CreateUserVote(userVoteSelected: UserVoteDTO): UserVote {
    this.userVote.push(userVoteSelected);
    return userVoteSelected;
  }

  findOne(id: number): UserVote {
    return this.userVote[id];
  }
}
