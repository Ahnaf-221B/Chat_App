import { Button } from "../Components/Button";
import { Text } from "../Components/Text";
import { TextInput } from "../Components/TextInput";
import { IconLock, IconMail } from "@tabler/icons-react";
import { PasswordInput } from "../Components/Passwordinput";
import { Anchor } from "../Components/Anchor";
import { useState } from "react";

const SignIn = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
    const [isPasswordLessThanEight, setisPasswordLessThanEight]=useState(false);
    
    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }
      const handlePasswordChange = (e) => {
                if(e.target.value.length<8)
                {
                    setisPasswordLessThanEight(true);
                }
                else{
                    setisPasswordLessThanEight(false);  
                }
				setPassword(e.target.value);
			};
            const handleSignIn =(e)=>{
                console.log('Email:', email);
                 console.log("Password:",password);
                
            }
	return (
		<div className="max-w-md space-y-4">
			<TextInput
				label="Email"
				placeholder="your@email.com"
				icon={<IconMail className="w-5 h-5 text-gray-400" />}
				value={email}
				onChange={handleEmailChange}
			/>

			<PasswordInput
				label="Password"
				placeholder="Enter your password"
				error={
					isPasswordLessThanEight && "Password must be at least 8 characters"
				}
				icon={<IconLock className="w-5 h-5 text-gray-400" />}
				value={password}
				onChange={handlePasswordChange}
			/>

			<Button className="w-full" onClick={handleSignIn}>Sign In</Button>

			<div className="text-center">
				<Text size="sm" className="text-gray-600">
					Dont have an account? <Anchor href="/signup">Sign up</Anchor>
				</Text>
			</div>
		</div>
	);
}; 

export default SignIn;