import * as React from "react"

interface EmailTemplateProps {
  name: string
  message: string
  email: string
  phone: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  message,
  email,
  phone,
}) => {

  return (
    <div className="relative w-[600px] h-full bg-[#f2f2f2] flex-col rounded-md">
      <header className="w-full h-20 bg-email-gradient rounded-t-md flex items-center justify-start">
        <small className="text-black text-xl font-medium ml-4">
          Cejas Propiedades
        </small>
      </header>
      <main className="w-full h-full flex items-center justify-start flex-col mb-20">
        <div className="w-full h-14 border-b-[1px] border-b-[#12648E] flex items-center justify-start">
          <h4 className="text-black/80 text-lg font-medium ml-4">
            <span className="text-black font-semibold">Nombre:</span> {name}
          </h4>
        </div>
        <div className="w-full h-14 border-b-[1px] border-b-[#12648E] flex items-center justify-start">
          <h4 className="text-black/80 text-lg font-medium ml-4">
            <span className="text-black font-semibold">Email:</span> {email}
          </h4>
        </div>
        <div className="w-full h-14 border-b-[1px] border-b-[#12648E] flex items-center justify-start">
          <h4 className="text-black/80 text-lg font-medium ml-4">
            <span className="text-black font-semibold">Teléfono:</span> {phone}
          </h4>
        </div>
        <div className="w-full h-max flex items-center justify-start">
          <p className="ml-4 mt-[14px] text-base text-black/80 font-medium">
            <span className="text-black font-semibold text-lg ">Mensaje:</span>{" "}
            {message}
          </p>
        </div>
      </main>
      <footer className="w-full h-full bottom-0 left-0 rounded-b-md flex flex-col gap-4">
        <div>
          <a
            href={"https://cejaspropiedades.com"}
            className="text-blue-600 underline ml-4"
          >
            cejaspropiedades.com
          </a>
        </div>
        <small className="text-black/60 text-sm font-normal ml-4 mt-2 mb-3">
          © 2024 Cejas Propiedades.
        </small>
      </footer>
    </div>
  )
}