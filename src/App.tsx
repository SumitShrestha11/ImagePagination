import ImageSearch from "./components/custom/ImageSearch";

function App() {
  return (
    <>
      <div className="relative w-full h-fit bg-black/80">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-blue-50 to-gray-200" />
        <div className="relative z-10">
          <ImageSearch />
        </div>
      </div>
    </>
  );
}

export default App;
