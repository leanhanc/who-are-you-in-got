import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

// Locales
import { getDictionary } from "@/i18n/get-dictionary";

// Component
import Postgame from "@/app/components/views/Postgame";

// Types
import { Character } from "@/@types/character";

const characters = [
	{ id: "1", name: "Jon Snow" },
	{ id: "2", name: "Petyr Baelish" },
	{ id: "3", name: "Daenerys Targaryen" },
] satisfies Character[];

describe("Postgame", () => {
	it("shows the name of the most alike character as a title", async () => {
		const dictionary = await getDictionary("en");

		render(
			<Postgame
				dictionary={dictionary}
				secondMostAlikeDifference={2}
				characters={characters}
			/>
		);

		const title = await screen.findByRole("heading", {
			name: characters[0].name,
		});

		expect(title).toHaveTextContent(characters[0].name);
	});

	it("shows the character profile modal that can be closed correctly", async () => {
		const dictionary = await getDictionary("en");

		render(
			<Postgame
				dictionary={dictionary}
				secondMostAlikeDifference={2}
				characters={characters}
			/>
		);

		let modal: HTMLElement | null = screen.getByRole("dialog");

		expect(modal).toBeInTheDocument();

		const closeButton = screen.getByRole("button", {
			description: "Close",
		});

		await user.click(closeButton);

		modal = screen.queryByRole("dialog");

		expect(modal).toBeNull();
	});

	it("after closing the character profile modal it shows full test feedback with the correct characters", async () => {
		const dictionary = await getDictionary("en");

		render(
			<Postgame
				dictionary={dictionary}
				secondMostAlikeDifference={2}
				characters={characters}
			/>
		);

		const closeButton = screen.getByRole("button", {
			description: "Close",
		});

		await user.click(closeButton);

		const extraFeedbackElement = await screen.getByTestId("extra-feedback");

		expect(extraFeedbackElement).toBeInTheDocument();

		expect(extraFeedbackElement).toHaveTextContent(characters[0].name);
		expect(extraFeedbackElement).toHaveTextContent(characters[1].name);
		expect(extraFeedbackElement).toHaveTextContent(characters[2].name);
	});
});
