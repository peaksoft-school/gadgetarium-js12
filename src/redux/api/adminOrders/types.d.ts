/* eslint-disable @typescript-eslint/no-unused-vars */
namespace ORDERSTORE {
  type IOrder = {
      searchWord: string,
      status: string,
      waiting: number,
      progress: number,
      onTheWay: number,
      delivered: number,
      canceled: number,
      startDate: string,
      endDate: string,
      page: number,
      size: number,
      orderResponses: [
        {
          id: number,
          fullName: string,
          article: number,
          date: string,
          count: number,
          price: number,
          typeOrder: string,
          status: string,
        }
      ]
  }

  type GetOrderResponse = IOrder[
    {
      searchWord: string,
      status: string,
      waiting: number,
      progress: number,
      onTheWay: number,
      delivered: number,
      canceled: number,
      startDate: string,
      endDate: string,
      page: number,
      size: number,
      orderResponses: [
        {
          id: number,
          fullName: string,
          article: number,
          date: string,
          count: number,
          price: number,
          typeOrder: string,
          status: string,
        }
      ]
    }
  ];
  type GetOrderRequest = {
    page: string;
    page: string;
    keyword: string;
    status?: string;
    startDate: string;
    endDate: string;
    size: string;
  };

  
  type PostOrderRequest = IOrder;
  type PostOrderResponse = IOrder;
  type PutOrderRequest = {
    orderId: number;
    status: string;
  };
  type PutOrderResponse = IOrder;
  type DeleteOrderRequest = {
    orderId: number;
  };
  type DeleteOrderResponse = number;
}