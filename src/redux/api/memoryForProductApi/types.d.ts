/* eslint-disable @typescript-eslint/no-unused-vars */
namespace PRODUCTMEMORY {
  type GetProductMemoryRequest = {
    gadgetId: number;
    color: string;
  };
  type GetProductMemoryResponse = string[];
}