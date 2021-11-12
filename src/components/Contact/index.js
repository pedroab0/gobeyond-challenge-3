import React from "react";

import * as S from "./index.style";
import * as D from "../../data.json";

import githubIcon from "../../assets/github.svg";
import linkedinIcon from "../../assets/linkedin.svg";
import emailIcon from "../../assets/gmail.svg";

export const Contact = () => {
	return (
		<S.Box>
			<S.Contact>
				<div>
					<a href={D.contact.github}>
						<img src={githubIcon} alt="Email" />
						<span>GitHub</span>
					</a>
					<a href={D.contact.linkedin}>
						<img src={linkedinIcon} alt="Email" />
						<span>Linkedin</span>
					</a>
					<a href={`mailto:${D.contact.email}`}>
						<img src={emailIcon} alt="Email" />
						<span>Email</span>
					</a>
				</div>
			</S.Contact>
		</S.Box>
	);
};
