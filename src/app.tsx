import { Text, Box } from "ink";
import { readFileNames } from "./lib.js";

type Props = {
	name: string | undefined;
};

export default function App({ name = "Stranger" }: Props) {
	return (
		<Box padding={1} borderColor="grey" borderStyle="round">
			<Text>
				Hello, <Text color="green">{name}</Text>
			</Text>

			{readFileNames(".").map((fileName, index) => (
				<Text key={index}>{fileName}</Text>
			))}
		</Box>
	);
}
