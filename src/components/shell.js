//import { runQuery, } from "jask-core";

import { initaliseClient, } from "src/jaskClient";

export default class Shell extends React.Component {

	componentDidMount(){
		initaliseClient();
	}

	render(){
		return <div/>
	}
};
