import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('coffees')
export class CoffeesController {
  @Get()
  findAll() {
    // findAll(@Res() response) {
    // response.status(200).send('This action returns all coffees');
    return 'This action returns all coffees';
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
}
