/* eslint-disable @typescript-eslint/no-unused-vars */

// type CharacteristicsForTypes = {
// 	additionalProp1: string;
// 	additionalProp2: string;
// 	additionalProp3: string;
// };

type Коммуникации = {
	Съемный: string
};
interface MainCharacteristics {
	// additionalProp1: CharacteristicsForTypes;
	// additionalProp2: CharacteristicsForTypes;
	// additionalProp3: CharacteristicsForTypes;
	Коммуникации: Коммуникации
}

namespace CHARACTERISTICS {
	type GetCharacteristicsRequest = string;
	type GetCharacteristicsResponse = {
		id: number;
		mainCharacteristics: MainCharacteristics;
	};
}
