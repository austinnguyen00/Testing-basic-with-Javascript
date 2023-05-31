/* eslint-disable no-undef */
class Stack {
	constructor() {
		this.top = -1;
		this.items = {};
	}
}

// `describe(name, fn) creates a block that groups togeether several related tests`
describe("My Stack", () => {
	//  `test(name fn, timeout)` is a method which runs a test
	// `test.todo` is used when you are planning on writing tests
	test("is created empty", () => {
		const stack = new Stack();
		expect(stack.top).toBe(-1);
		expect(stack.items).toEqual({});
	});

	test.todo("can push to the top");

	test.todo("can pop off");
});
