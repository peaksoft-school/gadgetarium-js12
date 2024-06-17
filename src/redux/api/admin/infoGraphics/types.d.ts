namespace INFOGRAPHICS {
  type IInfoGraphics = {
    buyPrice: number,
    buyCount: number,
    orderPrice: number,
    orderCount: number
  }

  type GetOrderResponse = IInfoGraphics[
    {
      buyPrice: number,
      buyCount: number,
      orderPrice: number,
      orderCount: number
    }
  ];
  type GetOrderRequest = string;

  type IInfoGraphicsAmountDay = {
    currentPeriod: number,
    previousPeriod: number
  }

  type GetInfoDayResponse = [
    {
      currentPeriod: number,
      previousPeriod: number
    }
  ]
  type GetInfoDayRequest = string;



  type IInfoGraphicsAmountMonth = {
    currentPeriod: number,
    previousPeriod: number
  }

  type GetInfoMonthResponse = [
    {
      currentPeriod: number,
      previousPeriod: number
    }
  ]
  type GetInfoMonthRequest = string;



  type IInfoGraphicsAmountYear = {
    currentPeriod: number,
    previousPeriod: number
  }

  type GetInfoYearResponse = [
    {
      currentPeriod: number,
      previousPeriod: number
    }
  ]
  type GetInfoYearRequest = string;
}