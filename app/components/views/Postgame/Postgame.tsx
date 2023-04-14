"use client";

import { useState } from "react";

// Components
import CharacterModal from "@/app/components/views/Postgame/components/CharacterModal";
import CharacterProfile from "@/app/components/views/Postgame/components/CharacterProfile";
import FullResults from "@/app/components/views/Postgame/components/FullResults";

// Types
import { Character } from "@/@types/character";
import { Dictionary } from "@/@types/i18n";

interface PostgameProps {
	characters: Character[];
	secondMostAlikeDifference: number;
	dictionary: Dictionary;
}

export default function Postgame({
	characters,
	secondMostAlikeDifference,
	dictionary,
}: PostgameProps) {
	const [isShowingProfile, setIsShowingProfile] = useState(true);

	const [mostAlike, secondMostAlike, leastAlike] = characters;

	// Handlers
	const handleCharacterProfileClose = () => setIsShowingProfile(false);

	return (
		<>
			{isShowingProfile ? (
				<CharacterModal
					onClose={handleCharacterProfileClose}
					common={dictionary.common}
				>
					<CharacterProfile
						character={mostAlike}
						onContinuePressed={handleCharacterProfileClose}
						dictionary={dictionary}
					/>
				</CharacterModal>
			) : (
				<FullResults
					dictionary={dictionary}
					mostAlike={mostAlike}
					secondMostAlike={secondMostAlike}
					secondMostAlikeDifference={secondMostAlikeDifference}
					leastAlike={leastAlike}
				/>
			)}
		</>
	);
}
