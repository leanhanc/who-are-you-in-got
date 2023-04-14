import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";

// Locales
import { getDictionary } from "@/i18n/get-dictionary";

// Component
import Game from "@/app/components/views/Game";

describe("Game", () => {
	it("correctly displays the first question", async () => {
		const dictionary = await getDictionary("en");

		render(<Game dictionary={dictionary} />);

		const firstQuestion = screen.getByText(dictionary.questions[0]);

		expect(firstQuestion).toBeInTheDocument();
	});

	it("correctly displays the first character answer", async () => {
		const dictionary = await getDictionary("en");

		render(<Game dictionary={dictionary} />);

		const firstCharacterAnswer = screen.getByText(
			dictionary.answers[0][0].text
		);

		expect(firstCharacterAnswer).toBeInTheDocument();
	});

	it("correctly displays the second character answer when clicking a possible answer", async () => {
		const dictionary = await getDictionary("en");

		render(<Game dictionary={dictionary} />);

		const agreeButton = screen.getByRole("button", {
			name: dictionary.possibleResponses.agree,
		});

		expect(agreeButton).toBeInTheDocument();

		await user.click(agreeButton);

		const secondCharacterAnswer = screen.getByText(
			dictionary.answers[0][1].text
		);

		expect(secondCharacterAnswer).toBeInTheDocument();
	});
});
