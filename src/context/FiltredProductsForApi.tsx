// /* eslint-disable @typescript-eslint/ban-types */
// import React, { FC, createContext, useState } from 'react';
// type ContextStateTypes = {
// 	id: number;
// 	sort: null | string;
// 	discount: null | string;
// 	memory: null | string[];
// 	ram: null | string[];
// 	costFrom: null | number;
// 	costUpTo: null | number;
// 	colour: string[];
// 	brand: string[];
// 	page: null | number;
// 	size: null | number;
// 	responses: Responses[];
// };
// const ContextForFiltredProducts = createContext({});
// interface ContextApiTypes {
// 	children: React.ReactNode;
// }
// const ContextApi: FC<ContextApiTypes> = ({ children }) => {
// 	const [responseData, setResponseData] = useState<ContextStateTypes>();
// 	return (
// 		<ContextForFiltredProducts.Provider
// 			value={{ responseData, setResponseData }}
// 		>
// 			{children}
// 		</ContextForFiltredProducts.Provider>
// 	);
// };

// export { ContextForFiltredProducts, ContextApi };

import React, { FC, createContext, useState } from 'react';

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

const defaultState: ContextStateTypes = {
	id: 0,
	sort: null,
	discount: null,
	memory: [],
	ram: [],
	costFrom: null,
	costUpTo: null,
	colour: [],
	brand: [],
	page: null,
	size: null,
	responses: []
};

const ContextForFiltredProducts = createContext<{
	responseData: ContextStateTypes;
	setResponseData: React.Dispatch<React.SetStateAction<ContextStateTypes>>;
}>({
	responseData: defaultState,
	setResponseData: () => {}
});

interface ContextApiTypes {
	children: React.ReactNode;
}

const ContextApi: FC<ContextApiTypes> = ({ children }) => {
	const [responseData, setResponseData] =
		useState<ContextStateTypes>(defaultState);

	return (
		<ContextForFiltredProducts.Provider
			value={{ responseData, setResponseData }}
		>
			{children}
		</ContextForFiltredProducts.Provider>
	);
};

export { ContextForFiltredProducts, ContextApi };
