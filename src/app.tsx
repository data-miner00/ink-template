import { Text, Box, useApp, useInput, useWindowSize } from "ink";
import { readFileNames } from "./lib.js";

type Props = {
	name: string | undefined;
};

export default function App({ name = "Stranger" }: Props) {
	const { exit } = useApp();
	const { columns, rows } = useWindowSize();

	useInput((input) => {
		if (input === "q") exit();
	});

	return (
		<Box
			width={columns}
			height={rows}
			padding={1}
			borderColor="grey"
			borderStyle="round"
		>
			<Text>
				Hello, <Text color="green">{name}</Text>
			</Text>

			{readFileNames(".").map((fileName, index) => (
				<Text key={index}>{fileName}</Text>
			))}
		</Box>
	);
}
