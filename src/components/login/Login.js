import React from "react";
import Layout from "../components/layout/Layout";

export default function App() {
	const { register, handleSubmit, errors } = useForm({
		validationSchema: schema
	});

	function onSubmit(data) {
		console.log("Form values: ", data);
	}

	return (
		<Layout />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Form.Group>
					<Form.Label> Email </Form.Label> <Form.Control name="email" placeholder="Enter your email" ref={register} />
					{errors.email && <p>{errors.email.message}</p>}
				</Form.Group>
				<Form.Group>
					<Form.Label> Password </Form.Label>{" "}
					<Form.Control type="password" name="password" placeholder="Enter your password" ref={register} />
					{errors.password && <p>{errors.password.message}</p>}
				</Form.Group>
				<Button type="submit"> Submit </Button>
			</form>
	);
}
