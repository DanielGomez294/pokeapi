
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient px-24 p-16">

        <div className="w-full h-full  bg-white bg-opacity-20 shadow-lg rounded-md">
          <div className="w-full h-full grid  grid-cols-2">
            <div className="content flex justify-center align-middle text-center w-full h-full border">
              <h1 className=" font-medium text-5xl ">Pokemon</h1>
            </div>
            <div>
              <iframe
                className="w-full h-full"
                src="https://my.spline.design/untitled-2e3b0503a15ff598079cedab05bec980/"
                width="100%"
                title="Spline Design"
              ></iframe>
            </div>
          </div>
        </div>

      </div>


    </>
  )
}
