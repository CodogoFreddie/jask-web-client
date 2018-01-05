import autobind from 'autobind-decorator';

import ServerDetails from "./components/serverDetails";
import Shell from "./components/shell";

export default class Root extends React.Component {
	@autobind
	hasServerInfo(){
		console.log(
			localStorage.serverPort,
			localStorage.serverAddress,
			localStorage.serverKey
		);
		return localStorage.serverPort && localStorage.serverAddress && localStorage.serverKey;
	}

	render(){
		console.log(this.hasServerInfo());
		return (
			this.hasServerInfo()
			? <Shell/>
			: <ServerDetails onSubmit = { () => this.forceUpdate() } />
		);
	}
};
