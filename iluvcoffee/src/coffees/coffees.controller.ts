import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll(@Query() paginationQuery) {
    // findAll(@Res() response) {
    // response.status(200).send('This action returns all coffees');
    const { limit, offset } = paginationQuery;
    return `This action returns all coffees, Limit: ${limit}, offset: ${offset}`;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `This action return #${id} coffee`;
  }

  @Post()
  // @HttpCode(HttpStatus.GONE)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    console.log('🚀 ~ update ~ body:', body);
    return `This action updates #${id} coffee`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes #${id} coffee`;
  }
}
