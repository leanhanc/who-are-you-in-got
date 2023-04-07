import { characters } from "@/app/lib/characters";

export type Characters = typeof characters;
export type CharacterId = typeof characters[keyof typeof characters]["id"];
export type CharacterName = typeof characters[keyof typeof characters]["name"];
