import React from "react";
import { shallow } from "enzyme";


import MetaData from "./index";


describe("MetaData Component", () => {
    let component;
    beforeEach(() => {
        component = shallow(<MetaData title="this is testing"/>);
    })
    test("MetaData check Helmet Component :", () => {
        expect(component.find("HelmetWrapper").length).toBe(1);
    });
    test("MetaData check Title Component:", () => {
        expect(component.find("title").text()).toBe("this is testing");
    });
});