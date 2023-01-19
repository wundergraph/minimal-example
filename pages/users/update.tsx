import { useMutation, useQuery, withWunderGraph } from '../../components/custom';
import { users_updateInput } from '../../components/generated/models';
import { useState } from 'react';

const Users = () => {
	const [state, setState] = useState<users_updateInput>({
		id: '1',
		name: 'Jens',
		userInfo: 'Founder of WunderGraph',
	});
	const { data, trigger } = useMutation({
		operationName: 'users/update',
	});
	return (
		<div>
			<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				<div className="flex justify-center">
					<div className="w-40 text-white">
						<svg
							version="1.1"
							id="Layer_1"
							xmlns="http://www.w3.org/2000/svg"
							xmlnsXlink="http://www.w3.org/1999/xlink"
							x="0px"
							y="0px"
							viewBox="0 0 1000 1000"
							enableBackground="new 0 0 1000 1000"
							xmlSpace="preserve"
						>
							<path
								fill="currentColor"
								d="M675.4,473.2l-53.6,91l-68.5-116.7L484.9,564l-118.1-204c42.4-56.8,110.1-93.4,186.5-93.4
	c45.8,0,88.5,13.2,124.6,35.9c-0.7,3.8-1.1,7.6-1.1,11.6c0,34.4,27.9,62.2,62.2,62.2s62.2-27.9,62.2-62.2
	c0-34.4-27.9-62.2-62.2-62.2c-9.3,0-18.2,2.1-26.1,5.8c-45.8-30.2-100.6-47.9-159.6-47.9c-86.5,0-164,37.7-217,97.6L296,237.6
	c7-10.1,11.1-22.2,11.1-35.4c0-34.4-27.9-62.2-62.2-62.2s-62.2,27.9-62.2,62.2s27.9,62.2,62.2,62.2c1.8,0,3.5-0.1,5.3-0.3l52.2,90.3
	c-24.9,42.7-39,92.6-39,145.4c0,80.1,32.4,152.6,84.9,205.1c52.5,52.5,125,84.9,205.1,84.9c151,0,275.4-115.7,288.7-263.5
	c0.8-8.8,1.3-17.5,1.3-26.5v-26.5H675.4z M553.4,733.2c-64.5,0-122.8-26.3-165-68.4c-42.2-42.2-68.5-100.6-68.5-165
	c0-30.5,5.8-59.7,16.7-86.5L484.4,669l69-116.7l68.5,116.5l83.8-142.5H785C772,642.8,673.3,733.2,553.4,733.2z"
							/>
						</svg>
					</div>
				</div>
				<h1 className="font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center text-white">
					WunderGraph Functions
				</h1>
			</div>
			<div className="relative flex flex-col items-center overflow-hidden p-8 sm:p-12">
				<div className="w-full rounded-2xl bg-white p-10">
					<div className="flex flex-col items-center mt-4">
						<div className='flex flex-col gap-y-2 w-64'>
							<input className='border border-black rounded-md px-2 py-1' value={state.id} onChange={(e) => setState((s) => ({ ...s, id: e.target.value }))} />
							<input className='border border-black rounded-md px-2 py-1' value={state.name} onChange={(e) => setState((s) => ({ ...s, name: e.target.value }))} />
							<input className='border border-black rounded-md px-2 py-1' value={state.userInfo} onChange={(e) => setState((s) => ({ ...s, userInfo: e.target.value }))} />
						</div>
						<div className='flex w-full mt-4 justify-center'>
							<button className="bg-sky-500 text-white border-sky-600/20 hover:bg-sky-600 hover:border-sky-700/20 items-center rounded px-2.5 py-1.5 text-sm font-medium" onClick={() => trigger(state)}>Update</button>
						</div>
						<div className='mt-4'>{JSON.stringify(data)}</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default withWunderGraph(Users);
