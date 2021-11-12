import React from "react";
import * as S from "./index.style";
import * as D from "../../data.json";

export const Header = () => {
	return (
		<S.Container className="user">
			<S.BackgroundImage style={{ backgroundImage: `url(${D.user.background})` }} />
			<S.ProfilePicture style={{ backgroundImage: `url(${D.user.picture})` }} />
			<h2>{D.user.name}</h2>
			<h3>{D.user.description}</h3>
		</S.Container>
	);
};
