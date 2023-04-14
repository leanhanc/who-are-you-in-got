"use client";

// Components
import CharacterModal from "@/app/components/views/Postgame/components/CharacterModal";
import CharacterProfile from "@/app/components/views/Postgame/components/CharacterProfile";

// Types
import { Character } from "@/@types/character";
import { Dictionary } from "@/@types/i18n";
import { useState } from "react";

interface PostgameProps {
	characters: Character[];
	profiles: Dictionary["profiles"];
	common: Dictionary["common"];
}

export default function Postgame({
	characters,
	profiles,
	common,
}: PostgameProps) {
	const [isShowingProfile, setIsShowingProfile] = useState(true);

	const [mostAlike, secondMostAlike, leastAlike] = characters;

	// Handlers
	const handleCharacterProfileClose = () => setIsShowingProfile(false);

	return (
		<>
			{isShowingProfile && (
				<CharacterModal onClose={handleCharacterProfileClose} common={common}>
					<CharacterProfile
						profiles={profiles}
						common={common}
						character={mostAlike}
						onContinuePressed={handleCharacterProfileClose}
					/>
				</CharacterModal>
			)}
		</>
	);
}
