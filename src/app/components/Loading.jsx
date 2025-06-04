

export default function Spinner() {
  return (
    <div className="flex justify-center items-center w-screen  h-screen bg-white fixed top-0 z-1000 ">
      <div className="w-12 h-12 border-4 border-[#122933] border-dashed rounded-full animate-spin"></div>
    </div>
  );
}
