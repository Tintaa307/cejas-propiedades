type PresentationProps = {
  video: string
  isSold: boolean
}

const Presentation = ({ video, isSold }: PresentationProps) => {
  return (
    <div className="w-full h-screen flex items-center justify-center relative overflow-hidden">
      {!isSold ? (
        <>
          <video
            autoPlay
            loop
            muted
            className="absolute top-0 left-0 w-full h-screen object-cover object-center -z-10"
          >
            <source src={video} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-primary_green/30 z-0"></div>
        </>
      ) : (
        <div className="w-full h-screen flex items-center justify-center flex-col gap-10">
          <h1 className="text-primary_green text-6xl md:text-5xl sm:text-4xl font-serif font-bold">
            Este desarrollo se encuentra{" "}
            <span className="underline">VENDIDO</span>
          </h1>
          <p className="text-primary_green text-lg font-normal">
            Si estás interesado en adquirir una propiedad similar, no dudes en
            contactarnos. Abajo te dejamos la información del desarrollo.
          </p>
        </div>
      )}
    </div>
  )
}

export default Presentation
