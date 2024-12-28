import MyNavbar from "@/component/Navbar";

export default function Home() {
  return (
    // <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    <div>
      <div className="min-h-screen px-4 md:px-8 lg:px-16 bg-zinc-50">
        <div className="pt-3">
          <MyNavbar />
        </div>
        {/* Section 1 */}
        <div className="flex flex-col lg:flex-row justify-center items-center min-h-screen lg:space-x-8 space-y-8 lg:space-y-0">
          {/* รูปภาพ */}
          <div className="w-[80%] max-w-[400px] h-auto lg:h-[400px]">
            <img
              src="/image/me.jpeg"
              alt="My Image"
              className="rounded-3xl object-cover w-full h-full"
            />
          </div>
          {/* ข้อความ */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full max-w-[600px]">
            <p className="text-2xl lg:text-4xl font-bold">
              Hi, my name is Ananthichai Saehui
            </p>
            <p className="text-sm lg:text-base mt-4">
              I was born in Krabi and living at Krabi around 19 year. Now, I'm
              interested in Software Engineering and Software Architecture.
            </p>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="h-screen bg-green-200">
        <div className="flex justify-center items-center pt-20">
          <p className="text-2xl lg:text-4xl">About me</p>
        </div>
      </div>
      {/* Section 3 */}
      <div className="h-screen bg-red-200 flex justify-center items-center">
        <p className="text-2xl lg:text-4xl">
          This is the third container.
          <br />
          <span className="text-base">
            You can add more containers as needed!
          </span>
        </p>
      </div>
    </div>
  );
}