namespace ORDERSTORE {
  type IOrder = {
    searchWord: string,
    status: string,
    quantity: number,
    startDate: string,
    endDate: string,
    page: number,
    size: number,
    orderResponses: [
      {
        id: number,
        fullName: string,
        modalName: string,
        article: number,
        date: string,
        count: number,
        price: string,
        typeOrder: string,
        status: string,
      }
    ]
  }

  type GetOrderResponse = IOrder[
    {
      searchWord: string,
      status: string,
      quantity: number,
      startDate: string,
      endDate: string,
      page: number,
      size: number,
      orderResponses: [
        {
          id: number,
          fullName: string,
          modalName: string,
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
  type GetOrderRequest = string;
  type PostOrderRequest = IOrder;
  type PostOrderResponse = IOrder;
  type PutOrderRequest = {
    id: string;
    status: string;
    state: string;
  };
  type PutOrderResponse = IOrder;
  type DeleteOrderRequest = {
    id: string;
  };
  type DeleteOrderResponse = IOrder;
}