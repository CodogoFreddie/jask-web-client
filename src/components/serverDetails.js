import autobind from 'autobind-decorator';

import {
	Input,
	Modal,
	Button,
} from "./toolbox";

export default class ServerDetails extends React.Component {
	constructor(props){
		super(props);

		localStorage.serverPort = localStorage.serverPort || "9000";
	}

	@autobind
	onAddressChange({ target: { value, } }){
		console.log({ value, });
		localStorage.serverAddress = value;
		this.forceUpdate();
	}

	@autobind
	onPortChange({ target: { value, } }){
		localStorage.serverPort = value;
		this.forceUpdate();
	}

	@autobind
	onServerKeyChange({ target: { value, } }){
		localStorage.serverKey = value;
		this.forceUpdate();
	}

	@autobind
	render(){
		return (
			<Modal>
				address: <Input
					type = "text"
					value = { localStorage.serverAddress }
					onChange = { this.onAddressChange } 
				/>
				port: <Input
					type = "text"
					value = { localStorage.serverPort }
					onChange = { this.onPortChange } 
				/>
				key: <Input
					type = "text"
					value = { localStorage.serverKey }
					onChange = { this.onServerKeyChange }
				/>

			<Button
				onClick = { this.props.onSubmit }
			>Submit</Button>
			</Modal>
		);
	}
};
