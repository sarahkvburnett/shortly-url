import React, { useState } from "react";
import {
	rendersWithoutCrashing,
	matchesSnapshot,
	ComponentWrapper,
} from "../../../setupTests";
import LinkDeletor from "../LinkDeletor";
import { UserContext } from "../../../context/UserContext";
import { LinksProvider } from "../../../context/LinksContext";
import { FlashProvider } from "../../../context/FlashContext";
import { ProcessLinkProvider } from "../../../context/ProcessLinkContext";

// const LinkDeletorWrapper = () => {
//     const [ user, setUser ] = useState({
//         isAuth: true,
//         id: "ha4skdfh45asdlkfh5aksf",
//         token: "Bearer adsfjla542fdjlasd.dfakdsfj24422lkasfj.htjk5445rhk5ajdsf",
//     });
//     return (
//         <UserContext.Provider value={[user, setUser]}>
//             <LinksProvider>
//                 <FlashProvider>
//                     <ProcessLinkProvider>
//                         <LinkDeletor/>
//                     </ProcessLinkProvider>
//                 </FlashProvider>
//             </LinksProvider>
//         </UserContext.Provider>
//     )
// };

const LinkDeletorWrapper = () => ComponentWrapper(LinkDeletor);

it("renders link deletor without crashing", () =>
	rendersWithoutCrashing(LinkDeletorWrapper));

it("link deletor matches snapshot", () => matchesSnapshot(LinkDeletorWrapper));

//TODO: check deleting link deletes link - integration
