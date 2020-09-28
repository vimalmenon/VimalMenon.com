import React from "react";
import { shallow } from "enzyme";

import Page from "./index";

describe("Page component :", () => {
    
    afterEach(() => {
        jest.clearAllMocks();
    });

    it("It", () => {
        const component = shallow(<Page />);
        expect(component.text()).toBe("This is vimal Menon");
    });
    
});