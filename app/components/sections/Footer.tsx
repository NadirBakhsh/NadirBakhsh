import React from 'react'

interface Props {}

function Footer(props: Props) {
  const {} = props

  return (
    <div className="footer py-6 w-full bg-black">
      <div className="container mx-auto bg-black text-white items-center  flex justify-between">
        <div>
          <h1 className="text-2xl italic flex font-sans font-semibold space-x-3">
            Nadir.B
          </h1>
        </div>
        <div className="text-right font-md text-md">
          <p>&copy; 2025 Nadir.B, All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
