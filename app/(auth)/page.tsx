import Image from "next/image";
import AuthForm from "./components/AuthForm";

export default function Auth() {
  return (
    <div className="flex w-[100vw] h-[100vh] bg-gradient-to-r from-cyan-50 to-blue-200 items-center justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Image
          width={480}
          height={280}
          className="object-cover w-auto"
          src="/assets/images/logo.png"
          alt="FAcebook Admin Companion Logo"
        />
      </div>
      <AuthForm />
    </div>
  );
}
