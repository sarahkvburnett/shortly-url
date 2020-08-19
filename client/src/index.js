import React from "react";
import ReactDOM from "react-dom";
import { UserProvider } from "./context/UserContext";
import { LinksProvider } from "./context/LinksContext";
import { ActiveLinkProvider } from "./context/ActiveLinkContext";
import { ProcessLinkProvider } from "./context/ProcessLinkContext";
import { App } from "./App";
import { FlashProvider } from "./context/FlashContext";

ReactDOM.render(
	<React.StrictMode>
		<UserProvider>
			<LinksProvider>
				<ActiveLinkProvider>
					<ProcessLinkProvider>
						<FlashProvider>
							<App />
						</FlashProvider>
					</ProcessLinkProvider>
				</ActiveLinkProvider>
			</LinksProvider>
		</UserProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
