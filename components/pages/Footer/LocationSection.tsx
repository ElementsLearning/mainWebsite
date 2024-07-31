
export const LocationSection = () => {
  
  return (
    <div className="flex-1 flex flex-col gap-4">
      <div className="xl:flex hidden p-2 px-4 rounded-full rounded-br-none bg-[#FBBA41] font-bold">Location</div>
      <div className="p-2 border-b-2 xl:hidden border-[#FBBA41] font-bold text-white text-lg">Location</div>
      <div className="flex-1 xl:px-4 flex gap-2 flex-col sm:flex-row xl:gap-4 text-white">
        <div className="flex-1 flex-col text-sm md:text-base flex gap-6">
          <p className="">{"We're open Monday to Friday, from 9:00 AM to 5:00 PM. Whether you're visiting us for a meeting or just dropping by to say hello, we're excited to welcome you. If you need any help finding us, please contact us at."}</p>
          <div className="flex flex-col gap-4 text-base sm:text-xs md:text-base xl:text-xs">
            <div className="flex gap-2 items-center xl:pl-4">
              <svg className="size-4 xl:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z" fill="currentColor"/></svg>
              <p className="">+92 333 5549094</p>
            </div>
            <div className="flex gap-2 items-center xl:pl-4">
              <svg className="size-4 xl:size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>email</title><path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z" fill="currentColor"/></svg>
              <p className="">support@elements-learning.com</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="sm:hidden flex rounded-lg overflow-hidden h-64 w-full">
              <iframe className="size-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.501805795956!2d72.98523267424993!3d33.644157339170654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df967473fa7055%3A0xc14fdbda9a155fa7!2sIAEC%20Building%2C%20Scholars%20Ave%2C%20H-12%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719986374086!5m2!1sen!2s" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>    
            </div>
            <div className="flex justify-center gap-8">
            <a href="https://www.facebook.com/ElementsLearningEducation" target="_blank">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>facebook</title><path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.youtube.com/@ELEMENTSLearning" target="_blank">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>youtube</title><path d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/elements-learning/" target="_blank">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>linkedin</title><path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z" fill="currentColor"/></svg>
              </a>
              <a href="https://www.instagram.com/elementslearning/" target="_blank">
              <svg className="size-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>instagram</title><path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" fill="currentColor"/></svg>
              </a>
            </div>
          </div>
        </div>
        <div className="sm:flex flex-1 hidden rounded-2xl overflow-hidden w-full">
          <iframe className="size-full" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3321.501805795956!2d72.98523267424993!3d33.644157339170654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df967473fa7055%3A0xc14fdbda9a155fa7!2sIAEC%20Building%2C%20Scholars%20Ave%2C%20H-12%2C%20Islamabad%2C%20Islamabad%20Capital%20Territory%2C%20Pakistan!5e0!3m2!1sen!2s!4v1719986374086!5m2!1sen!2s" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </div>  
  )
}
