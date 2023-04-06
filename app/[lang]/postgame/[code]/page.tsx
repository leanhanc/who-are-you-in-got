export default function PostgamePage({
	params: { code },
}: {
	params: { code: string };
}) {
	return <div>{code}</div>;
}
