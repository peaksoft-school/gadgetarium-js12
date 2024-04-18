import { api as index } from '../index';
interface IGet {
	id: string;
	title: string;
	description: string;
	subdescription: string;
	image: string;
	vector: string;
	className: string;
}
const api = index.injectEndpoints({
	endpoints: (build) => ({
		getAllSliders: build.query<IGet[], void>({
			query: () => ({
				url: 'https://api.elchocrud.pro/api/v1/53bbbf91c4ea62724aae7e81c91510e8/sliders',
				method: 'GET'
			}),
			providesTags: ['sliders']
		})
	})
});
export const { useGetAllSlidersQuery } = api;
