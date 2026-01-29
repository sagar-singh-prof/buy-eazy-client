import { useState } from "react";


function LoginPage() {
    const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading] =useState(false);

   async function handleSubmit(){

   setLoading(true)
   if(password=='' || username==''){
    setUsername('')
    setPassword('')
    alert('Enter all details')
   }
   else{
   {loading && (
  <div className="overlay">
    <div className="spinner"></div>
  </div>
)}
  //  code for API
 
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      
  if(response){
    // go to next page
    console.log("helo")
    
    setPassword('')
  }
  else{
    alert("Login Failed")
    setLoading(false)
    }
    }
  }
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
          
          {/* <form onClick={handleSubmit}> */}
            <div>
                <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white" type="email" placeholder="Email" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
              
            </div>
            <div>
                  <input className="w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5" type="password" placeholder="Password" required value={password} onChange={(e)=>setPassword(e.target.value)}></input>
            </div>
            <div>
                <button type="submit" className="mt-5 tracking-wide font-semibold bg-green-400 text-white-500 w-full py-4 rounded-lg hover:bg-green-700 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none" onClick={handleSubmit} disabled={loading}>
                    
                    <span>Sign In</span>
                </button>
            </div>
            <div style={{marginTop:"20px"}}>
                <p>Already have an account?</p>
                <a href="www.google.com" className="font-bold">Sign Up</a>
            </div>
          {/* </form> */}
        </div>
        </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;
