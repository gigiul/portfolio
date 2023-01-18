import React from 'react'

const Portfolio = () => {

  return (
    <div id='portfolio'>
        <div className='md:max-w-[95%] w-full pt-16'>
            <div className='flex flex-col justify-center text-center items-center'>
                <h1 className='md:text-4xl text-xl text-center'>Portfolio</h1>
                <p className='text-sm text-[#A0A1A0]'>Some of mine repo published on Github Pages</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 justify-center items-center'>
            <div className='flex flex-col items-center justify-center md:p-16 p-4 w-full'>
                <button onClick={() => window.open("https://gigiul.github.io/landing_page_1/", "_blank")}
                 className='rounded-xl border-2 border-white mb-1'>Open Site</button>
                 <p className='text-sm text-center text-[#A0A1A0] mb-2'>Landing Page Mockup</p>        
                <iframe 
                    className='md:opacity-50 hover:opacity-100 border-2 rounded-md'
                    src="https://gigiul.github.io/landing_page_1/"
                    width="100%"
                    height="600px"
                />
            </div>    
            <div className='flex flex-col items-center justify-center md:p-16 p-4 w-full'>
                <button onClick={() => window.open("https://gigiul.github.io/netflix_frontend/", "_blank")}
                 className='rounded-xl border-2 border-white mb-1'>Open Site</button>
                 <p className='text-sm text-center text-[#A0A1A0] mb-2'>Rebuild netflix frontend with firebase auth (click signUp)</p>        
                <iframe 
                    className='md:opacity-50 hover:opacity-100 border-2 rounded-md'
                    src="https://gigiul.github.io/netflix_frontend/"
                    width="100%"
                    height="600px"
                />
            </div>    
            <div className='flex flex-col items-center justify-center md:p-16 p-4 w-full'>
                <button onClick={() => window.open("https://gigiul.github.io/crypto_app/", "_blank")}
                 className='rounded-xl border-2 border-white mb-1'>Open Site</button>
                 <p className='text-sm text-center text-[#A0A1A0] mb-2'>"Cryptocurrency App" with Coingecko API </p>         
                <iframe 
                    className='md:opacity-50 hover:opacity-100 border-2 rounded-md'
                    src="https://gigiul.github.io/crypto_app/"
                    width="100%"
                    height="600px"
                />
            </div>    
            <div className='flex flex-col items-center justify-center md:p-16 p-4 w-full'>
                <button onClick={() => window.open("https://gigiul.github.io/meteo_site/", "_blank")}
                 className='rounded-xl border-2 border-white mb-1'>Open Site</button>
                 <p className='text-sm text-center text-[#A0A1A0] mb-2'>A simple "Weather App" with Openweather API</p>         
                <iframe 
                    className='md:opacity-50 hover:opacity-100 border-2 rounded-md'
                    src="https://gigiul.github.io/meteo_site/"
                    width="100%"
                    height="600px"
                />
            </div>    
            </div>
        </div>
    </div>
  )
}

export default Portfolio