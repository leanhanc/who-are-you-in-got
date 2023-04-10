// Types
import { CharacterName } from "@/@types/character";

// Components
import CharacterModal from "@/app/components/views/Postgame/components/CharacterModal";

interface PostgameProps {
	characterList?: CharacterName[];
}

export default function Postgame({ characterList }: PostgameProps) {
	return (
		<>
			<CharacterModal>
				<div
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
						height: "100%",
					}}
				>
					{characterList?.map((c) => (
						<p key={c}>{c}</p>
					))}
				</div>
			</CharacterModal>
		</>
	);
}
