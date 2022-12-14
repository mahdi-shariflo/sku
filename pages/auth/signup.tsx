
import Header from "../../components/auth/Header";
import FormSignup from "../../components/auth/FormSignup";





const Signup = () => {

 

  return (
    <div className={`contaner-signin background-image`}>
      <div className="tag-wrap z-50 w-full md:flex-[2]">
        <div className="form h-full w-full  bg-[#f5f5f5] p-4">
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

export default Signup;
