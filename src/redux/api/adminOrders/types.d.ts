namespace ORDERSTORE {
  type IOrder = {
    searchWord: string,
    status: string,
    quantity: 0,
    startDate: string,
    endDate: string,
    page: 0,
    size: 0,
    orderResponses: [
      {
        id: 0,
        fullName: string,
        modalName: string,
        article: 0,
        date: string,
        quantity: 0,
        totalPrice: 0,
        discountPrice: 0,
        fullOldPrice: 0,
        typeOrder: string,
        status: string,
        state: string,
        address: string,
        product: string,
        phone: string,
        discount: string,        
      }
    ]
  }

  type GetOrderResponse = IOrder[];
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