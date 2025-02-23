
import { IconMail, IconLock, IconMessages } from "@tabler/icons-react";
import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import { TextInput } from "../../Components/TextInput";
import { PasswordInput } from "../../Components/PasswordInput";
import { Button } from "../../Components/Button";
import { Anchor } from "../../Components/Anchor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const SignInSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8).max(20),
});

export default function SignInPage() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(SignInSchema),
		defaultValues: {
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		console.log(data); // This should log the form data
	};

	return (
		<div className="flex min-h-screen items-center justify-center bg-gray-100">
			<div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
				<div className="text-center mb-8">
					<div className="flex items-center justify-center mb-4">
						<div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center">
							<IconMessages size={24} className="text-white" />
						</div>
					</div>
					<Heading type={2} className="text-4xl font-bold text-gray-700 mb-2">
						Welcome Back
					</Heading>
					<Text className="text-gray-500">Sign in to continue to ChatApp</Text>
				</div>
				<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
					<TextInput
						type="email"
						label="Email-Address"
						placeholder="your@email.com"
						icon={<IconMail size={20} className="text-gray-400" />}
						{...register("email")}
						error={errors.email?.message}
					/>
					<PasswordInput
						label="Password"
						placeholder="Enter your password"
						icon={<IconLock size={20} />}
						{...register("password")}
						error={errors.password?.message}
					/>
					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								type="checkbox"
								id="remember-me"
								className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="remember-me"
								className="ml-2 block text-sm text-gray-900"
							>
								Remember Me
							</label>
						</div>
						<div className="text-sm">
							<Anchor href="/forgot-password" className="text-indigo-600">
								Forgot Password?
							</Anchor>
						</div>
					</div>
					<Button
						type="submit"
						className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg"
					>
						Sign In
					</Button>
				</form>
				<p className="mt-6 text-center text-sm text-gray-600">
					Dont have an account?{" "}
					<Anchor href="/auth/sign-up" className="text-indigo-600">
						Sign Up
					</Anchor>
				</p>
			</div>
		</div>
	);
}
