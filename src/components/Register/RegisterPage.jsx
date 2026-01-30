import { useFormStatus } from "react-dom";

export default function RegisterPage() {
  const register = async (formData) => {
    console.log("Register clicked");
    const firstName = formData.get("first_name");
    const lastName = formData.get("last_name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirm_password");

    console.log(firstName, lastName, email, password, confirmPassword);

    // simulate API call
    await new Promise((res) => setTimeout(res, 2000));

    if (email !== "test@test.com" || password !== "1234") {
      console.log("Invalid credentials");
    }

    return { success: true };
  };

  return (
    <>
      <h1
        className="text-4xl
"
      >
        Register Page
      </h1>

      <form action={register}>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              First name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="John"
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2.5 text-sm font-medium text-heading"
            >
              Last name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
              placeholder="Doe"
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Email address
          </label>
          <input
            name="email"
            type="email"
            id="email"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="john.doe@company.com"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="•••••••••"
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="confirm_password"
            className="block mb-2.5 text-sm font-medium text-heading"
          >
            Confirm password
          </label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
            placeholder="•••••••••"
          />
        </div>
        <div className="flex items-start mb-6">
          <div className="flex items-center h-5">
            <input
              id="remember"
              type="checkbox"
              value=""
              className="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
            />
          </div>
          <label
            htmlFor="remember"
            className="ms-2 text-sm font-medium text-heading"
          >
            I agree with the{" "}
            <a href="#" className="text-fg-brand hover:underline">
              terms and conditions
            </a>
            .
          </label>
        </div>
        <RegisterButton></RegisterButton>
      </form>
    </>
  );
}

function RegisterButton() {
  const { pending } = useFormStatus();

  return (
    <>
      <button
        type="submit"
        className="mt-5 tracking-wide font-semibold bg-blue-500 text-white-500 w-full py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none"
        disabled={pending}
      >
        {pending ? "Registering" : "Register"}
      </button>
    </>
  );
}
