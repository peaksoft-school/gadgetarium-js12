namespace ORDERHISTORYSTORE {
  type IHistory = {
    _id: string;
    date: string;
    orderNumber: string;
    statusDelivered: string;
    statusCancelled: string;
    statusProcessing: string;
    statusOnTheWay: string;
    total: string;
    client: string;
    firstName: string;
    lastName: string;
    region: string;
    address: string;
    phone: string;
    email: string;
    payment: string;
    city: string;
    discount: string;
  }

  type GetOrderResponse = IHistory[];
  type GetOrderRequest = string;  
  type PostOrderRequest = IHistory;
  type PostOrderResponse = IHistory[];
}