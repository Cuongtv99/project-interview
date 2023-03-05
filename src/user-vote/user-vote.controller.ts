import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { UserVoteService } from './user-vote.service';
import { UserVoteDTO } from './dto/user-vote.dto';
import { UserVote } from './entities/user-vote.entities';

@ApiTags('UserVote')
@Controller('UserVoted')
export class UserVoteController {
  constructor(private readonly userVoteService: UserVoteService) {}

  @Post()
  @ApiOperation({ summary: 'Create User vote' })
  async create(@Body() userVoteDTO: UserVoteDTO): Promise<UserVote> {
    return this.userVoteService.CreateUserVote(userVoteDTO);
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: 'The found record',
    type: UserVote,
  })
  findOne(@Param('id') id: string): UserVote {
    return this.userVoteService.findOne(+id);
  }
}
