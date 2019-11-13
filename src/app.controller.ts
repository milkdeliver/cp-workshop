import { Controller, Get, HttpService, HttpStatus, Param} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/salesorder')
  async getSalesOrder(): Promise<any> {
    return await this.appService.getSalesOrder();
  }

  // A_SalesOrderItemPrElement
  @Get('/itemprice/:orderid/:itemid') 
  async getItemPrice(@Param('orderid') orderid: string, @Param('itemid') itemid: string): Promise<any> {
    return await this.appService.getItemPrice(orderid, itemid);
  }
  getPrice

}
