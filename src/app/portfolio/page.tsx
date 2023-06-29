export default function Portfolio() {
  return (
    <div className="flex flex-1 justify-center">
      <div className="max-w-5xl w-full mt-16">
        <h1 className=" pl-1 text-4xl font-montserrat font-bold animate-fade ">
          Portfolio
        </h1>

        <div className="my-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
          <div className=" h-60 bg-neutral-900 rounded-lg" />
        </div>
      </div>
    </div>
  )
}
