/* eslint-disable @typescript-eslint/no-unused-vars */
type ContextStateTypes = {
	id: number;
	sort: null | string;
	discount: null | string;
	memory: null | string[];
	ram: null | string[];
	costFrom: null | number;
	costUpTo: null | number;
	colour: string[];
	brand: string[];
	page: null | number;
	size: null | number;
	responses: Responses[];
};

export  const Data: ContextStateTypes = {
  id: 0,
  sort: null,
  discount: null,
  memory: null,
  ram: null,
  costFrom: null,
  costUpTo: null,
  colour: [],
  brand: [],
  page: null,
  size: null,
  responses: []
};
