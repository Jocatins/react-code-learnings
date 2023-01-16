import React from "react";

function Comment(props) {
	return (
		<>
			<div className="Comment">
				<div className="UserInfo"></div>
				{currentDate(props.date)}
			</div>
			<div>Comment</div>
		</>
	);
}

export default Comment;
