import autobind from 'autobind-decorator';

import {
	Input,
	Modal,
} from "./components/toolbox";

export default class Root extends React.Component {
	constructor(props){
		super(props);

	}

	@autobind
	hasServerInfo(){
		return localStorage.serverAddress && localStorage.serverKey;
	}

	@autobind
	onAddressChange({ target: { value, } }){
		localStorage.serverAddress = value;
	}

	@autobind
	onServerKeyChange({ target: { value, } }){
		localStorage.serverKey = value;
	}

	@autobind
	renderServerInfo(){
		return (
			<Modal>
				address: <Input
					type = "text"
					value = { localStorage.serverAddress }
					onChange = { this.onAddressChange } 
				/>
				key: <Input
					type = "text"
					value = { localStorage.serverKey }
					onChange = { this.onServerKeyChange }
				/>
			</Modal>
		);
	}

	render(){
		console.log(this.state);
		return (
			this.hasServerInfo()
			? <div />
			: this.renderServerInfo()
		);
	}
};
