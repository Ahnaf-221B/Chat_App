
import {
	IconMail,
	IconShieldCheck,
	IconDeviceDesktop,
	IconRocket,
	IconMessages,
	IconLock,
} from "@tabler/icons-react";
import { Heading } from "../../Components/Heading";
import { Text } from "../../Components/Text";
import { TextInput } from "../../Components/TextInput";
import { PasswordInput } from "../../Components/PasswordInput";
import { Button } from "../../Components/Button";
import { Anchor } from "../../Components/Anchor";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const features = [
	{
		Icon: IconShieldCheck,
		title: "Enterprise grade security",
		description: "Your data is protected with end-to-end encryption",
	},
	{
		Icon: IconDeviceDesktop,
		title: "Cross Platform Support",
		description: "Work seamlessly across all of your devices",
	},
	{
		Icon: IconRocket,
		title: "Lightning fast experience",
		description: "Real-time messaging with instant delivery",
	},
];

const SignUpSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email(),
	password: z.string().min(8).max(20),
});

export default function SignUpPage() {
	const { register, handleSubmit, formState: {errors}, } = useForm({
		resolver: zodResolver(SignUpSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});

	const onSubmit = (data) => {
		console.log(data); // This should log the form data
	};
    console.log(errors);

	return (
		<div className="flex min-h-screen">
			<div className="w-1/2 bg-indigo-100 p-12 flex flex-col justify-center">
				<div className="max-w-lg mx-auto">
					<div className="flex items-center space-x-3 mb-8">
						<div className="w-12 h-12 bg-indigo-600 rounded-xl flex items-center justify-center">
							<IconMessages size={24} className="text-white" />
						</div>
						<Heading type={3} className="text-2xl font-bold text-indigo-600">
							ChatApp
						</Heading>
					</div>
					<Heading type={2} className="text-4xl font-bold text-gray-500 mb-6">
						Connect like never before
					</Heading>
					<div className="space-y-8">
						{features.map((feature, index) => (
							<div key={index} className="flex items-start gap-4">
								<div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
									<feature.Icon size={20} className="text-indigo-600" />
								</div>
								<div>
									<Heading type={6} className="font-semibold mb-1">
										{feature.title}
									</Heading>
									<Text className="text-gray-700">{feature.description}</Text>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="w-1/2 bg-indigo-50 p-12 flex flex-col justify-center">
				<div className="max-w-lg w-full">
					<div className="text-center mb-8">
						<Heading type={3} className="text-2xl font-bold text-indigo-500">
							Create Your Account
						</Heading>
						<Text className="mt-2 text-sm text-gray-500">
							Join thousands of teams already using ChatApp
						</Text>
					</div>
					<form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
						<div className="grid grid-cols-2 gap-4">
							<TextInput
								id="first-name"
								label="First Name"
								placeholder="John"
								{...register("firstName")}
                                error={errors.firstName?.message}
							/>
							<TextInput
								id="last-name"
								label="Last Name"
								placeholder="Doe"
                                error= {errors.lastName?.message}
								{...register("lastName")}
							/>
						</div>
						<TextInput
							type="email"
							label="Email-Address"
							placeholder="john.developer@gmail.com"
							icon={<IconMail size={20} className="text-gray-400" />}
                            error= {errors.email?.message}
							{...register("email")}
						/>
						<PasswordInput
							label="Password"
							placeholder="Enter your password"
							icon={<IconLock size={20} />}
                            error= {errors.password?.message}
							{...register("password")}
						/>

						<div className="flex items-center space-x-2">
							<input
								type="checkbox"
								id="terms"
								className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
							/>
							<label
								htmlFor="terms"
								className="ml-2 block text-sm text-gray-500"
							>
								I agree to the{" "}
								<Anchor href="#" className="text-indigo-600">
									Terms
								</Anchor>{" "}
								and{" "}
								<Anchor href="#" className="text-indigo-600">
									Privacy Policy
								</Anchor>
							</label>
						</div>

						<Button
							type="submit"
							className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg "
						>
							Create Account
						</Button>
					</form>
					<p className="mt-6 text-center text-sm text-gray-600">
						Already have an account? {" "}
						<Anchor href="/auth/sign-in" className="text-indigo-600">
							Sign In
						</Anchor>
					</p>
				</div>
			</div>
		</div>
	);
}
