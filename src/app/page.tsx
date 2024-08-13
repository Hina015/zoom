import react from 'React'

const page =() =>{
  return(
    <div><figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
    <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="/pexels-photo-19298227.webp" alt="" width="384" height="512"/>
    <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
      <blockquote>
        <p className="text-lg font-medium">
          “Hello,My Name is HINA EJAZ and i am a student of CS Computer science.I am excited to learn and explore the world of
          computer science and its technologies.”
        </p>
      </blockquote>
      <figcaption className="font-medium">
        <div className="text-sky-500 dark:text-sky-400">
          Hina Ejaz
        </div>
        <div className="text-slate-700 dark:text-slate-500">
          IT student 
        </div>
      </figcaption>
    </div>
  </figure></div>
  )
}

export default page