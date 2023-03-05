import { Test, TestingModule } from '@nestjs/testing';
import { UserVoteService } from './user-vote.service';
import { UserSelected } from '../../constants/user-vote.constant';
import { UserVoteDTO } from '../dto/user-vote.dto';

describe('UserVoteService', () => {
  let service: UserVoteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserVoteService],
    }).compile();

    service = module.get<UserVoteService>(UserVoteService);
  });

  describe('createTweet', () => {
    it('should create tweet', () => {
      // Arrange
      service.userVote = [];
      const payload: UserVoteDTO = {
        userVoteId: '1',
        voteSelected: UserSelected.FUNNY,
      };

      // Act
      const userVoted = service.CreateUserVote(payload);

      // Assert
      expect(userVoted).toBe(payload);
    });
  });
});
