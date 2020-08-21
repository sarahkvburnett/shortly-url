import React from 'react';
import {
	rendersWithoutCrashing,
	matchesSnapshot,
} from "../../../setupTests";
import CopyShortLink from "../CopyShortLink";

const CopyShortLinkWrapper = () => <CopyShortLink shortUrl="shortUrl"/>

it("renders copy short link without crashing", () =>
	rendersWithoutCrashing(CopyShortLinkWrapper));

it("copy short link matches snapshot", () => matchesSnapshot(CopyShortLinkWrapper));
