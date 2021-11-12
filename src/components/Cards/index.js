import React, { useState } from "react";

import * as S from "./index.style";
import * as D from "../../data.json";

export const Cards = () => {
	const [tabCards, setTabCards] = useState(0);

	return (
		<>
			<S.Tabs>
				{D.content.map(({ title }, i) => {
					return (
						<S.Tab
							onClick={() => setTabCards(i)}
							key={i}
							active={tabCards === i ? true : false}
						>
							{title}
						</S.Tab>
					);
				})}
			</S.Tabs>
			<S.Cards>
				{D.content[tabCards].contents.map(({ background, link, title }, i) => {
					return (
						<S.Card
							style={{ backgroundImage: `url(${background})` }}
							href={link}
							key={i}
						>
							<S.Title>{title}</S.Title>
						</S.Card>
					);
				})}
			</S.Cards>
		</>
	);
};
