import "./globals.css";

export default function Home() {
  return (
    <div className="flex flex-col lg:flex-row w-full h-screen">
      <div className="mt-20 ml-10 lg:ml-20 flex flex-col justify-center items-center lg:items-start lg:w-1/2">
        <h1 className="font-sans text-5xl lg:text-8xl">LOGIN</h1>
        <input
          placeholder="Username"
          className="border-2 w-80 lg:w-96 h-10 mt-5"
        />
        <input
          placeholder="Password"
          className="border-2 w-80 lg:w-96 h-10 mt-5"
        />

        <button className="w-48 h-10 bg-[#DA211C] text-white mt-5">
          LOGIN
        </button>
        <div className="mt-4 flex flex-col lg:flex-row">
          <button className="mt-2 lg:mt-0">Forgot Password</button>
          <button className="mt-2 lg:ml-10 lg:mt-0">Register</button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center lg:items-end w-full lg:w-1/2 h-full relative">
        <div className="z-[-1] bg-[#DA211C] w-full lg:w-[800px] h-[500px] lg:h-[800px] absolute top-2/4 transform -translate-y-1/2 clip-path-clip" />
        <div className="flex justify-center items-start mt-10">
          <img
            src="/burger.png"
            className="h-[400px] lg:h-[600px] w-auto lg:w-[600px] mr-[80px]"
          />
        </div>
      </div>
    </div>
  );
}
