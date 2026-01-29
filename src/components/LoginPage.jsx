function LoginPage() {
  return (
    <>
      {/* parent container */}
      <div className="bg-gray-100 text-gray-900 flex justify-center mt-28">
        <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-lg flex justify-center flex-1">
        {/*left side container */}
        <div className="flex-1 bg-green-100 text-center hidden lg:flex">
           <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
            </div>
        </div>
        {/*right side container */}
        <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
        <div className="mt-5 flex flex-col items-center w-full">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">Login</h2>
          <p className="text-gray-500 mb-6">Sign in to your account</p>
          <form>
            <div>
                <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="text" placeholder="Email" required/>
              
            </div>
            <div>
                  <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" required></input>
            </div>
            <div>
                <button type="submit" className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                    
                    <span>Sign In</span>
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                <p>Already have an account?</p>
                <a href="www.google.com" className="font-bold">Sign Up</a>
            </div>
          </form>
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
