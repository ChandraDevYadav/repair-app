import React from 'react'

const Login = () => {
  return (
    <div>
        <div className="shadow-lg mt-14 border rounded-md px-7 py-10 mb-10">
            <p className="text-center text-3xl font-bold mb-8">
              Book An Appointment
            </p>
            <div className="px-3">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-gray-200"
              />
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-gray-200 mt-4"
              />
              <Input
                type="text"
                placeholder="Select Subjects"
                className="mt-4 bg-gray-200"
              />
              <Textarea
                placeholder="Write Message..."
                className="bg-gray-200 mt-4 h-[10rem]"
              />
              <Button className="bg-orange-500 text-white w-full mt-4 font-bold text-sm">
                APPOINTMENT NOW
              </Button>
            </div>
          </div>
    </div>
  )
}

export default Login