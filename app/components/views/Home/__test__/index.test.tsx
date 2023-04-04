import { render, screen } from "@testing-library/react";

// Locales
import { getDictionary } from "@/i18n/get-dictionary";

// Component
import Home from "@/app/components/views/Home/Home";

// Locale
describe("Home", () => {
	it("has a CTA button", async () => {
		const dictionary = await getDictionary("en");

		render(<Home currentLocale="en" dictionary={dictionary} />);

		const cta = screen.getByText(dictionary.header.ctaText);

		expect(cta).toBeInTheDocument();
	});

	it("has a CTA button with the correct text", async () => {
		const dictionary = await getDictionary("en");

		render(<Home currentLocale="en" dictionary={dictionary} />);

		const cta = screen.getByText(dictionary.header.ctaText);

		expect(cta).toHaveTextContent(dictionary.header.ctaText);
	});
});
