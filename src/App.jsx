import { Button } from "./Components/Button";
import { Text } from "./Components/Text";
import { TextInput } from "./Components/TextInput";
import { IconLock, IconMail } from "@tabler/icons-react";
import { PasswordInput } from "./Components/Passwordinput";
import { Heading } from "./Components/Heading";
import { Anchor } from "./Components/Anchor";
import SignIn from "./Pages/SignIn";


function App() {
	return (
		<div className="m-20 space-y-4">
			<SignIn />

			{/* <div className="space-y-4">
					<Text size="lg">Button Variants</Text>
					<div className="space-x-4">
						<Button>Default Button</Button>
						<Button variant="outline">Outline Button</Button>
						<Button variant="light">Light Button</Button>
						<Button disabled>Disabled Button</Button>
					</div>
				</div>
				
				<div className="space-y-4">
					<Text size="lg">Heading Examples</Text>
					<div className="space-y-2">
						<Heading type={1}>Heading 1</Heading>
						<Heading type={2}>Heading 2</Heading>
						<Heading type={3}>Heading 3</Heading>
						<Heading type={4}>Heading 4</Heading>
						<Heading type={5}>Heading 5</Heading>
						<Heading type={6}>Heading 6</Heading>
					</div>
				</div> */}
		</div>
	);
}

export default App;
