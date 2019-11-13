import { Injectable , HttpService, HttpStatus } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly http: HttpService) {
  }

  private readonly url = 'https://sandbox.api.sap.com/s4hanacloud/sap/opu/odata/sap/API_SALES_ORDER_SRV/';


  getHello(): string {
    return 'Hello CHINT&SAP!';
  }

  async getSalesOrder(): Promise<any> {
    const url = this.url + 'A_SalesOrder'; 
    const res = await this.http.get(url, {
      headers: {
        apikey: 'xV8mjknvfA4btsFasdZ7k084RO8wdaCT'
      },
      params: {
        $top: 1,
        $skip: 10
      }
    }).toPromise();
    // console.log(res);
    if(res.data) {
      return res.data.d; 
    }
    return null;
  }

  async getItemPrice(orderid: string, itemid: string): Promise<any> {
    const url = this.url + 'A_SalesOrderItemPrElement';
    const res = await this.http.get(url, {
      headers: {
        apikey: 'xV8mjknvfA4btsFasdZ7k084RO8wdaCT'
      },
      params: {
        $top: 1,
        $skip: 10,
        $filter: `SalesOrder eq '${orderid}' and SalesOrderItem eq '${itemid}'`
      }
    }).toPromise();
    if(res.data) {
      return res.data.d;
    }
    return null;
  }

}
