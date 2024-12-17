import { AuthForm } from "@/components/AuthForm";

const Auth = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] flex items-center justify-center px-4">
      <div className="w-full max-w-md text-center">
        <h1 className="text-4xl font-bold mb-8 text-[#2563eb]">Kacz</h1>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;