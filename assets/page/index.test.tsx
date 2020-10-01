import React from "react";
import { shallow } from "enzyme";

import Page from "./index";

describe("Page component :", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("It", () => {
        shallow(<Page />);
        expect(1).toBe(1);
    });
    
});