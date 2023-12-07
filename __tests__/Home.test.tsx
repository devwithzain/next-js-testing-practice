import { Home } from "@/components";
import { render, screen } from "@testing-library/react";

it("should have Homes text", () => {
	render(<Home />); // ARRANGE

	const myElem = screen.getByText("Homes"); // ACT

	expect(myElem).toBeDefined(); // ASSERT
});
