import { initaliseJask, setPersistHandlers, runQuery, } from "jask-core";

export const initaliseClient = () => {

	const readAction = key => Promise.resolve(localStorage[key])
		.then( stringAction => 
			stringAction
			? JSON.parse(stringAction)
			: fetch(
				`http://${localStorage.serverAddress}:${localStorage.serverPort}/${key}`,
				{
					mode: "cors",
					method: "GET",
					headers: {
						'Authorization': localStorage.serverKey,
					},
				}
			)
			.then( x => x.json() )
			.then( R.tap(data => { localStorage[key] = JSON.stringify(data); }))
		)

	const listActions = () => fetch(
		`http://${localStorage.serverAddress}:${localStorage.serverPort}`,
		{
			mode: "cors",
			method: "GET",
			headers: {
				'Authorization': localStorage.serverKey,
			},
		}
	)
		.then( x => x.json() )
		.catch( x => console.log("catch", x) );

	const writeAction = action => { 
		console.log("write action", action);
	};

	//setPersistHandlers({
	//listActions,
	//readAction,
	//writeAction,
	//});

	//initaliseJask();
};
