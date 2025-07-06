const CustomerTestimonials = () => {
  const testimonialRef = useRef(null)

  const cardsPerView = 3 // Set how many cards to show at once

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(nextTestimonial, 3000)
      return () => clearInterval(interval)
    }
  }, [isHovered])

  return (
    <section className=" py-5  w-[95%]  mx-auto rounded-[32px]">
      <div className="container mx-auto">
        <h2 className="xl:text-[26px] text-[24px]  md:text-[20px] mb-5 text-center font-geologica text-[#1B2559]">What Our Customers Say</h2>
        <div className="relative"
            >
          {/* <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={prevTestimonial}
          >
            <ChevronLeft size={24} className="text-indigo-600" />
          </button> */}
          <div className="overflow-hidden" ref={testimonialRef}>
            <div 
              className="flex  items-center  md:justify-center xl:justify-center   gap-2"
            
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-shrink-0 xl:w-[567px]   xl:h-[254px]     "> {/* Show 3 cards at once */}
                  <div  className="bg-white px-[25px] pt-[30px] pb-[16px]  rounded-lg border-[0.8px]   border-[#C0B3F8] flex flex-col gap-1 mx-auto">
                   <div className='h-[132.78px]'> <p className="text-[#1B2559] h-[200px] xl:text-[15px] overflow-clip  text-[14px] leading-[19px]">
                   {testimonial.text1} <br/>
                   <br/> {testimonial.text2}

                    </p>
                    </div>
                    <hr className="bg-[#4318FF] border-0 m-0" style={{ height: '0.61px' }} />
                    <div className='flex justify-between h-[67.7px] items-center'>
                      <div className="flex items-center gap-3">
                        <img
                          src={testimonial.profile}
                          alt={testimonial.name}
                          className="rounded-full xl:w-[46px] xl:h-[46px] w-[44px] h-[44px] "
                        />
                        <div>
                          <p className="xl:text-[14px]  text-[#1B2559] font-geologica">{testimonial.name}</p>
                          <p className="font-geologica lg:text-[13.41px] text-[14px] font-thin text-[#1B2559]">{testimonial.role}</p>
                        </div>
                      </div>
                      <img src={testimonial.profile_logo} width={40} height={40} alt="" className='hidden lg:flex w-[40px] h-[40px]' />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md z-10"
            onClick={nextTestimonial}
          >
            <ChevronRight size={24} className="text-indigo-600" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default CustomerTestimonials