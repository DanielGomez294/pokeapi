
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gradient px-24 p-16">

        <div className="w-full h-full  bg-white bg-opacity-20 shadow-lg rounded-md">
          <div className="w-full h-full grid  grid-cols-2 p-0 m-0  z-9">
            <div className=" flex justify-center items-center gap-8 text-center w-full h-full p-0 m-0 border flex-col z-9 ">
              <h1 className=" border m-0 p-0 font-bold text-9xl text-white">POKEBOLA</h1>
              <h2 className=" w-64">Su nombre proviene de Pocket Ball, o bola de bolsillo, el cual se debe a su pequeño tamaño o bien del propio nombre de los Pokémon.</h2>
            </div>
            <div className="z-10">
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
