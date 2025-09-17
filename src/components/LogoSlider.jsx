import React, { memo } from 'react'

const LogoSlider = memo(() => {
  const logos = [
    {
      name: 'AWS',
      src: '/AWS grey PNG.png',
      alt: 'Amazon Web Services logo'
    },
    {
      name: 'Cisco',
      src: '/Cisco grey PNG.png',
      alt: 'Cisco logo'
    },
    {
      name: 'UniFi',
      src: '/unifi grey PNG.png',
      alt: 'UniFi by Ubiquiti logo'
    },
    {
      name: 'VMware',
      src: '/vmware grey png.png',
      alt: 'VMware logo'
    },
    {
      name: 'Microsoft',
      src: '/Microsoft grey PNG.png',
      alt: 'Microsoft logo'
    },
    {
      name: 'Veeam',
      src: '/veeam grey png.png',
      alt: 'Veeam logo'
    },
    {
      name: 'PRTG',
      src: '/PRTG grey PNG.png',
      alt: 'PRTG Network Monitor logo'
    },
    {
      name: 'Palo Alto',
      src: '/palo grey png.png',
      alt: 'Palo Alto Networks logo'
    },
    {
      name: 'Dell',
      src: '/Dell grey PNG.png',
      alt: 'Dell logo'
    },
    {
      name: 'HP',
      src: '/HP PNG.png',
      alt: 'HP logo'
    },
    {
      name: 'Paessler',
      src: '/Paessler.png',
      alt: 'Paessler PRTG logo'
    },
    {
      name: 'pfSense',
      src: '/Pfsense.png',
      alt: 'pfSense logo'
    },
    {
      name: 'Fortinet',
      src: '/fortinet.png',
      alt: 'Fortinet logo'
    },
    {
      name: 'Sophos',
      src: '/sophos.png',
      alt: 'Sophos logo'
    },
    {
      name: 'Linux',
      src: '/linux-seeklogo.png',
      alt: 'Linux logo'
    },
    {
      name: 'Azure',
      src: '/azure.png',
      alt: 'Microsoft Azure logo'
    }
  ]

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos]

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 via-transparent to-primary-500/10"></div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-black dark:text-white mb-6">
            Trusted <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional tools and platforms I work with daily to deliver exceptional IT solutions
          </p>
        </div>

        {/* Refined Logo Slider Container */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex items-center space-x-4 lg:space-x-6 animate-scroll"
              style={{ width: '200%' }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex-shrink-0 flex items-center justify-center group"
                >
                  <div className="w-20 h-20 lg:w-24 lg:h-24 flex items-center justify-center">
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className="max-w-full max-h-full object-contain opacity-100"
                      onError={(e) => {
                        e.target.style.display = 'none'
                        e.target.nextSibling.style.display = 'flex'
                      }}
                    />
                    <div 
                      className="hidden items-center justify-center text-sm font-semibold text-gray-600 dark:text-gray-300 text-center"
                      style={{ display: 'none' }}
                    >
                      {logo.name}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div className="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
            <span>Continuously learning and adapting to new technologies</span>
          </div>
        </div>
      </div>
    </section>
  )
})

LogoSlider.displayName = 'LogoSlider'

export default LogoSlider
