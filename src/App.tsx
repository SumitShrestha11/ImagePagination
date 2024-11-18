import ImageSearch from "./components/custom/ImageSearch";

function App() {
  return (
    <>
      {/* <div className="relative w-full h-fit bg-black/80"> */}
      {/* <div className="absolute inset-0 bg-black/50"> */}
      {/* <AnimatedGridPattern
            numSquares={30}
            maxOpacity={0.1}
            duration={3}
            repeatDelay={1}
            className={cn(
              "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          /> */}
      {/* </div>
        <div className="relative z-10"> */}
      <ImageSearch />
      {/* </div>
      </div> */}
    </>
  );
}

export default App;
