/*
    test cases to consider:
    - should add a task card 
    - should remove a task card
    - should sort tasks correctly according to priority
    - should be able to display unsorted list
    
    - should not automatically remove completed tasks, but mark them completed and display to a different section 

*/

// iomporting the component we are testing
import TaskList from "./TaskList";

// import the Shallow Rendering API
import { shallow } from "enzyme";

describe("TaskList component tests", () => {
    const wrapper = shallow(<TaskList />);

    it("should render a header", () => {
        // checking that we only have one header
        expect(header).toHaveLength(1);
        // checking that the header renders the right text
        expect(header.at(0).text()).toBe(headerText);
    });

    it("should render tasks", () => {
        expect().toBe();
    });
});
