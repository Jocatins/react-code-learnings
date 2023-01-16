// import React, { Component } from "react";

// export class ClassComponent extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			isOnline: "null",
// 		};
// 	}

// 	componentDidMount() {
// 		ChatAPI.subscribeToFriendStatus(
// 			this.props.friend.id,
// 			this.handleStatusChange
// 		);
// 	}

// 	componentWillUnmount() {
// 		ChatAPI.unsubscribeFromFriendStatus(
// 			this.props.friend.id,
// 			this.handleStatusChange
// 		);
// 	}

// 	handleStatusChange(status) {
// 		this.setState({ isOnline: status.isOnline });
// 	}

// 	render() {
// 		if (this.state.isOnline === null) {
// 			return "Loading...";
// 		}
// 		return this.state.isOnline ? "Online" : "Offline";
// 	}
// }

// export default ClassComponent;
