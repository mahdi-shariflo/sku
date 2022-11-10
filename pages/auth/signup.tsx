import {useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Header from "../../components/auth/Header";
import FormSignup from "../../components/auth/FormSignup";





const signup = () => {
  const router = useRouter();
  const session = useSession();

  useEffect(() => {
    if (session.data?.user) {
      router.push("/");
    }
  }, [session]);

  return (
    <div className={`contaner-signin background-image`}>
      <div className="tag-wrap z-50 w-full md:flex-[2]">
        <div className="form h-full w-full  bg-[#282A37] p-4">
          <Header />
          <FormSignup  />
        </div>
      </div>
      <div className="hidden lg:flex flex-1"></div>
      {/* overlay */}
      <div className="hidden md:block fixed z-20 w-full h-full bg-[#00000030]"></div>
    </div>
  );
};

export default signup;
