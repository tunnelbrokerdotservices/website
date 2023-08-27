/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

export default function Home() {
  const brokers = [
    {
      name: "BGPTunnel.com",
      url: 'bgptunnel.com',
      pop: [
        {
          name: "Frankfurt",
          icon: "https://img.icons8.com/fluency/48/germany-circular.png"
        },
        {
          name: "London",
          icon: "https://img.icons8.com/fluency/48/great-britain-circular.png"
        },
        {
          name: "Amsterdam",
          icon: "https://img.icons8.com/fluency/48/netherlands-circular.png"
        },
        {
          name: "Oslo",
          icon: "https://img.icons8.com/fluency/48/norway-circular.png"
        },
        {
          name: "Norway",
          icon: "https://img.icons8.com/fluency/48/norway-circular.png"
        }
      ],
      bgp: true,
      prefix: '/126',
      '6in4': true,
      wireguard: false,
      openvpn: false,
      notes: "Only BGP, bring your own subnet/asn.",
      asn: 209533,
    },
    {
      name: "6Project",
      url: '6Project.org',
      pop: [
        {
          name: "Milan",
          icon: "https://img.icons8.com/fluency/48/italy-circular.png"
        },
        {
          name: "Frankfurt",
          icon: "https://img.icons8.com/fluency/48/germany-circular.png"
        },
        {
          name: "Vienna",
          icon: "https://img.icons8.com/fluency/48/austria-circular.png"
        },
        {
          name: "Bradford",
          icon: "https://img.icons8.com/fluency/48/great-britain-circular.png"
        },
        {
          name: "Los Angeles",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Las Vegas",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Wuhan",
          icon: "https://img.icons8.com/fluency/48/china-circular.png"
        }
      ],
      bgp: true,
      prefix: '/64, /80',
      '6in4': true,
      wireguard: false,
      openvpn: true,
      notes: "/64 for €11.50/y and /80 for €5.50/y.",
      asn: 208753,
    },
    {
      name: "Karabro",
      url: 'TunnelBroker.se',
      pop: [
        {
          name: "Malmö",
          icon: "https://img.icons8.com/fluency/48/sweden-circular.png"
        },
      ],
      bgp: true,
      prefix: '/60',
      '6in4': true,
      wireguard: true,
      openvpn: false,
      notes: "BGP on paid plans and up to /48 prefix possible",
      asn: 51519,
    },
    {
      name: "NetAssist TunnelBroker",
      url: 'tb.NetAssist.ua',
      pop: [
        {
          name: "Kiev",
          icon: "https://img.icons8.com/fluency/48/ukraine-circular.png"
        },
      ],
      bgp: true,
      prefix: '/48',
      '6in4': true,
      wireguard: false,
      openvpn: false,
      // notes: "BGP on paid plans and up to /48 prefix possible",
      asn: 29632,
    },
    {
      name: "IPv6 Only Hosting",
      url: 'IPv6OnlyHosting.com',
      pop: [
        {
          name: "Switzerland",
          icon: "https://img.icons8.com/fluency/48/switzerland-circular.png"
        },
      ],
      bgp: false,
      prefix: '/48',
      '6in4': false,
      wireguard: true,
      openvpn: false,
      notes: "120CHR/yr and 30CHF setup fee. Free for IPV6OnlyHosting customers.",
      asn: 213081,
    },
    {
      name: "TunnelBroker.ch",
      url: 'TunnelBroker.ch',
      pop: [
        {
          name: "Dusseldorf",
          icon: "https://img.icons8.com/fluency/48/germany-circular.png"
        },
        {
          name: "London",
          icon: "https://img.icons8.com/fluency/48/great-britain-circular.png"
        },
        {
          name: "Sandefjord",
          icon: "https://img.icons8.com/fluency/48/norway-circular.png"
        },
        {
          name: "Zurich",
          icon: "https://img.icons8.com/fluency/48/switzerland-circular.png"
        },
        {
          name: "Fremont",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Amsterdam",
          icon: "https://img.icons8.com/fluency/48/netherlands-circular.png"
        },
        {
          name: "Frankfurt",
          icon: "https://img.icons8.com/fluency/48/germany-circular.png"
        },
        {
          name: "Mumbai",
          icon: "https://img.icons8.com/fluency/48/india-circular.png"
        },
      ],
      bgp: true,
      prefix: '/64',
      '6in4': true,
      wireguard: false,
      openvpn: false,
      notes: "Up to /44 prefix delegated (BGP). Some POPs are free, some are paid.",
      asn: 58057,
    },
    {
      className: "xl:col-span-2",
      name: "Tunnelbroker.net",
      url: 'tunnelbroker.net',
      pop: [
        {
          name: "Ashburn",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Calgary",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Chicago",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Dallas",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Denver",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Fremont",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Honolulu",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Kansas City",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Los Angeles",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Miami",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "New York",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Phoenix",
          icon: "https://img.icons8.com/fluency/48/usa-circular.png"
        },
        {
          name: "Toronto",
          icon: "https://img.icons8.com/fluency/48/canada-circular.png"
        },
        {
          name: "Winnipeg",
          icon: "https://img.icons8.com/fluency/48/canada-circular.png"
        },
        {
          name: "Amsterdam",
          icon: "https://img.icons8.com/fluency/48/netherlands-circular.png"
        },
        {
          name: "Budapest",
          icon: "https://img.icons8.com/color/48/hungary-circular.png"
        },
        {
          name: "Frankfurt",
          icon: "https://img.icons8.com/fluency/48/germany-circular.png"
        },
        {
          name: "Lisbon",
          icon: "https://img.icons8.com/fluency/48/portugal-circular.png"
        },
        {
          name: "London",
          icon: "https://img.icons8.com/fluency/48/great-britain-circular.png"
        },
        {
          name: "Paris",
          icon: "https://img.icons8.com/fluency/48/france-circular.png"
        },
        {
          name: "Prague",
          icon: "https://img.icons8.com/fluency/48/czech-republic-circular.png"
        },
        {
          name: "Stockholm",
          icon: "https://img.icons8.com/fluency/48/sweden-circular.png"
        },
        {
          name: "Warsaw",
          icon: "https://img.icons8.com/fluency/48/poland-circular.png"
        },
        {
          name: "Zurich",
          icon: "https://img.icons8.com/fluency/48/switzerland-circular.png"
        },
        {
          name: "Hong Kong",
          icon: "https://img.icons8.com/fluency/48/hongkong-circular.png"
        },
        // icons8 does not have a circular icon for Singapore
        {
          name: "Singapore",
          icon: <div className='h-5 w-5 rounded-full overflow-hidden items-center justify-center flex relative' style={{
            backgroundImage: 'url("https://img.icons8.com/fluency/96/singapore.png")',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }} />
        },
        {
          name: "Tokyo",
          icon: "https://img.icons8.com/fluency/48/japan-circular.png"
        },
        {
          name: "Djibouti City",
          icon: "https://img.icons8.com/fluency/48/djibouti-circular.png"
        },
        {
          name: "Johannesburg",
          icon: "https://img.icons8.com/fluency/48/south-africa-circular.png"
        },
        {
          name: "Bogota",
          icon: "https://img.icons8.com/fluency/48/colombia-circular.png"
        },
        {
          name: "Sydney",
          icon: "https://img.icons8.com/fluency/48/australia-circular.png"
        },
        {
          name: "Dubai",
          icon: "https://img.icons8.com/fluency/48/united-arab-emirates-circular.png"
        },
        
      ],
      bgp: true,
      prefix: '/64, /48',
      '6in4': true,
      wireguard: false,
      openvpn: false,
      notes: "/64 on-link and /48 statically routed, BGP Fee of $500 on new Tunnelbroker connections.",
      asn: 6939,
    },
  ]
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [])
  return (
    <div>
      <Head>
        <title>TunnelBroker.services -:- List of IPv6 Tunnel Broker Services</title>
        <meta property="og:title" content="TunnelBroker.services" />
        <meta property="twitter:title" content="TunnelBroker.services" />
        <meta name="description" content="A list of IPv6 Tunnel Broker Services." />
        <meta property="og:description" content="A list of IPv6 Tunnel Broker Services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactTooltip place='top' effect='solid' />

      <main className='text-white'>
        <div className="flex flex-col sm:flex-row justify-between items-center p-4 container mx-auto">
          <span className="text-xl font-medium">tunnelbroker.services</span>
          <div className="flex flex-row gap-3">
            <a href="https://discord.gg/ipv6">Discord</a>
            <a href="https://github.com/tunnelbrokerdotservices/website">Github</a>
          </div>
        </div>
        <div className="container mx-auto px-4 text-white">

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 py-4">
            {brokers.map((broker) => (
              <div className={`flex flex-col bg-zinc-900 border border-zinc-800 p-6 gap-6 ${broker.className && broker.className}`} key={broker.name}>
                <div className='flex flex-row flex-wrap items-center gap-4 justify-between'>
                  <span className='text-lg font-medium'>{broker.name}</span>
                  <a href={`https://${broker.url}`} className='flex flex-row items-center gap-2 text-blue-500 hover:text-blue-600'>
                    <span>Learn more about {broker.name}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                  </a>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row w-full items-center gap-4'>
                    <span>Features</span>
                    <div className='flex-1 bg-zinc-800 h-0.5' />
                  </div>
                  <div className='flex flex-row flex-wrap gap-4 text-xs'>
                    {broker.openvpn && (
                      <div className='flex flex-row gap-2 items-center bg-[#ED7F22] p-0.5 px-1.5 font-medium'>
                        <svg className='h-4 w-4 text-white fill-current' role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>OpenVPN</title><path d="M12 .357C5.385.357 0 5.69 0 12.254c0 4.36 2.358 8.153 5.896 10.204l.77-5.076a7.046 7.046 0 01-1.846-4.719c0-3.897 3.18-7.076 7.13-7.076 3.948 0 7.126 3.18 7.126 7.076 0 1.847-.717 3.488-1.846 4.77L18 22.51c3.59-2.05 6-5.899 6-10.258C24 5.69 18.615.357 12 .357zm-.05 8.157a3.786 3.786 0 00-3.796 3.795 3.738 3.738 0 002.461 3.54L9.13 23.643h5.64l-1.435-7.795c1.385-.564 2.41-1.898 2.41-3.54a3.786 3.786 0 00-3.795-3.794z" /></svg>
                        <span>OpenVPN</span>
                      </div>
                    )}
                    {broker.wireguard && (
                      <div className='flex flex-row gap-2 items-center bg-[#88171A] p-1 px-2 font-medium'>
                        <svg role="img" className='h-4 w-4 text-white fill-current' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>WireGuard</title><path d="M23.98 11.645S24.533 0 11.735 0C.418 0 .064 11.17.064 11.17S-1.6 24 11.997 24C25.04 24 23.98 11.645 23.98 11.645zM8.155 7.576c2.4-1.47 5.469-.571 6.618 1.638.218.419.246 1.063.108 1.503-.477 1.516-1.601 2.366-3.145 2.728.455-.39.817-.832.933-1.442a2.112 2.112 0 0 0-.364-1.677 2.14 2.14 0 0 0-2.465-.75c-.95.36-1.47 1.228-1.377 2.294.087.99.839 1.632 2.245 1.876-.21.111-.372.193-.53.281a5.113 5.113 0 0 0-1.644 1.43c-.143.192-.24.208-.458.075-2.827-1.729-3.009-6.067.078-7.956zM6.04 18.258c-.455.116-.895.286-1.359.438.227-1.532 2.021-2.943 3.539-2.782a3.91 3.91 0 0 0-.74 2.072c-.504.093-.98.155-1.44.272zM15.703 3.3c.448.017.898.01 1.347.02a2.324 2.324 0 0 1 .334.047 3.249 3.249 0 0 1-.34.434c-.16.15-.341.296-.573.069-.055-.055-.187-.042-.283-.044-.447-.005-.894-.02-1.34-.003a8.323 8.323 0 0 0-1.154.118c-.072.013-.178.25-.146.338.078.207.191.435.359.567.619.49 1.277.928 1.9 1.413.604.472 1.167.99 1.51 1.7.446.928.46 1.9.267 2.877-.322 1.63-1.147 2.98-2.483 3.962-.538.395-1.205.62-1.821.903-.543.25-1.1.465-1.644.712-.98.446-1.53 1.51-1.369 2.615.149 1.015 1.04 1.862 2.059 2.037 1.223.21 2.486-.586 2.785-1.83.336-1.397-.423-2.646-1.845-3.024l-.256-.066c.38-.17.708-.291 1.012-.458q.793-.437 1.558-.925c.15-.096.231-.096.36.014.977.846 1.56 1.898 1.724 3.187.27 2.135-.74 4.096-2.646 5.101-2.948 1.555-6.557-.215-7.208-3.484-.558-2.8 1.418-5.34 3.797-5.83 1.023-.211 1.958-.637 2.685-1.425.47-.508.697-.944.775-1.141a3.165 3.165 0 0 0 .217-1.158 2.71 2.71 0 0 0-.237-.992c-.248-.566-1.2-1.466-1.435-1.656l-2.24-1.754c-.079-.065-.168-.06-.36-.047-.23.016-.815.048-1.067-.018.204-.155.76-.38 1-.56-.726-.49-1.554-.314-2.315-.46.176-.328 1.046-.831 1.541-.888a7.323 7.323 0 0 0-.135-.822c-.03-.111-.154-.22-.263-.283-.262-.154-.541-.281-.843-.434a1.755 1.755 0 0 1 .906-.28 3.385 3.385 0 0 1 .908.088c.54.123.97.042 1.399-.324-.338-.136-.676-.26-1.003-.407a9.843 9.843 0 0 1-.942-.493c.85.118 1.671.437 2.54.32l.022-.118-2.018-.47c1.203-.11 2.323-.128 3.384.388.299.146.61.266.897.432.14.08.233.24.348.365.09.098.164.23.276.29.424.225.89.234 1.366.223l.01-.16c.479.15 1.017.702 1.017 1.105-.776 0-1.55-.003-2.325.004-.083 0-.165.061-.247.094.078.046.155.128.235.131z M14.703 2.153a.118.118 0 0 0-.016.19.179.179 0 0 0 .246.065c.075-.038.148-.078.238-.125-.072-.062-.13-.114-.19-.163-.106-.087-.193-.032-.278.033z" /></svg>
                        <span>WireGuard</span>
                      </div>
                    )}
                    {broker['6in4'] && (
                      <div className='flex flex-row gap-2 items-center bg-red-600 p-1 px-2 font-medium'>
                        <img className='h-4 w-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC2klEQVR4nO2YS2sUQRDHB4yrMYm5uB70FnwcDIpg9DNIhCV40lOQqCdJ1EBQQVGP8ZZ7TkGCHyNXcaOIiiBBfJyiokESX+EnJT2haGZ7umd6Eg/zh4Zlt17/7qrq2k6SGjVq1BAAx4CrwCPgGfAF+GWWfH5qfhOZo8n/AKAXuAa8IByiI2R6tyLwLmAC+Ex5fALGxeZmBX8IaGcE8hWYA8aAIaAJbDerab67CDwEvmXoPwEOVh38GWDFcvwKGAW6A+x0AxeA15YtsT1cVfDngd/K2apJo66SqXgdWFN2pejPVbHzOvgPwImI9k8CHy0Sp2PmvE4byf99UYwrAPuBReVH6uRAUgbmiNvWzkcP3iKhT+IxsC0pCpPjOuejpU1OOq0pv1fKXFK6z09Ej7YDgFvK7zLQk4TC3LC6VW7ORZP8891jpVL45lnjwWglkToAXFb+nxcZzPQNG3JJya173xT/d7Pk8z35LcDOLqv7HSmaPnMBemc7jAl6M0YC7M0r3fEQAjL2phgLCH6dfKz7kgAuKb35EAIyz6cY8pDfa+281E8L6DOrZRqBPok9HnZPKZ3FEAIy4qbwcSQ5n+Il0J8h02+RuOu5MSmWQwj8VIoND3n5t5Wi5ZAbUXJtD7s7lPyPEAIb8JTX3aLPIbdbya1UEUtRAt7yVdreQE3AgfoEKsjpRtEawK/DVVcDZu5ZCGl1IqPkF/Lmo8oIAIPAkrWj0x62H1g6S2JrUwnI04fV+/8Ak5bMYeAd8NZ+7xFZo5P7nBKdgK9z4KaSuVFkE6ISMMU663v8wJSSmwpIw1ld3FEIZBRrbgECA8AbswYcck2X7dIEOuySvG/u9DaY76+RcbrvgeMxCOTmaUQikxn1VZpAoYdXVxfK0RvOeEAuTcDZqzvYcHahHN3BjLQNIiCvcN63ZdEu5EJGca+GKN8xr3IzPvNKmS7kUdwzJpbbTuEaNWrUSLYCfwGpp6qryYj0UQAAAABJRU5ErkJggg=="></img>
                        <span>6in4 / GRE Tunnels</span>
                      </div>
                    )}
                    <div className='flex flex-row gap-2 items-center bg-green-600 p-1 px-2 font-medium'>
                      <img className='h-4 w-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACB0lEQVR4nO2Yzy4DURSHJySNF7CjJPYWInY2lI2+AWsv4BEUb1A8gY2NNFgIKwteAUGxIqRaC38an0yckWPMrWlr9E5yv01zzzl3cn73ntOZez3P4XA4HA6HJQCDwDpwDdSxh7rktAYMmJKfBqrYzyOQi1r5NCSvRWS1AL9sAs6BCSDjWQKQASaBC5Xnqg7w6ytgwrMUPkUElLVDN6w1K2/YiYC6dnzhWQ5RuZoEAMvAE7CkbCvAm54jMQdAvo3EuoFZYE+a9BQYalfAi5ifI2wmCi0k3w8cRTxroV0BP+zEI/ZOAL3AWcQzTv5iBxoKULY+YEe59psQsKnmvQKLxrdtUgJUGQRUYyY/Arw3008dFwB0hf4kmuqnRARI8rvhEgI2gFtgVMZjQAXYkvExv5NPTEADZiT2XsYlGZdk/CDjGzVnW3qpYT/9h4BFFVsUm/+mH1dv/GLEX3JfaEcjyzEpATV/pYKVV7HDKsYvpYBh8dc6KsCLAXAYEnuofAfKviOJR/ZTJwXMhQTMKV+e35lJ6lPiOaaAHuBO5vi/PSF/IU4/tSpgSeq00MgWQ8S8JD9v8Oelh2qmfmpJgI1gEJD6A81VSo6UOZXnpXb49y0BFxKYsWzlp0KH+qIOGJBTUFqofLtWERG5lIio+LcTpq3KyvdL2cKrxbLk9n3lHQ6Hw+FweJ3jA7sEycg1WMQuAAAAAElFTkSuQmCC" />
                      <span>{broker.prefix} Prefix</span>
                    </div>
                    {broker.bgp && (
                      <div className='flex flex-row gap-2 items-center bg-purple-600 p-1 px-2 font-medium'>
                        <img className='h-4 w-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADTElEQVR4nO2Yy0sXURTHJ7QXVguNXkgRarbTnmZpUBoU1saiXe6UXlBEuKqlrpKwB2T9AekmiCiSUHtso1ZpZAWZlUEZaZEm9Ykbd+p4+j3mN7/70xbzhdmcufP9njNz7jn3jOdFiBAhQoQIDgBkARVAM3Af6Ae+2Kvf2pqALWat978AmAnUAc8JjlfAMWD2dDu/PkXHNZ4B66bL+YPAmHJoCGgDaoBiIMdeq4Hd9p5ZIzEGNEy180eVEx+Bk8CcAM/OBRqBYcVxaKqc3w/8EMKPgPwQPMuBx4LHcO7LjNd/RZcAn4Roj0mRNPhygLvqSy526/VkwQ4hZkpjngPOPOCF4L3qxtt/hcxG/CmENjvkrhS8RqPYFbcUOStErmWA/7rgP+NlQOC9ENiWAf4qwT/kmnylIP8AZDsV8H5rZNtN7GOFS/JaQXzDGbECcFPo1HphAewArgBP7WFMoi00cXLdy0rLaPdZe3UQglXAPRLjVAYDOJ1E2/SMongPb43R3mMdvgoyGECh7S+JYPZJZaw3P6wOWK1AWTqd1kFAOdaH88C4CqJQLpRpMwiUpCjUbPP1DfDQduw6F53aB1BqffPRLTesfPOpOj8DGI3zuSeA9klvKw0Aa9SXqPJstfHRGpLYjIrfEuTtd6AFmOUgiAuCt82zpdLHxjRn4qVmwgKO25OqPHZjU3VhmgFsEnx9xjAiDPPSIY8hVgLcVkH0pxMEMF9wjXgqf50GIEQbbBr5eBA2nYAFguezTqGykKSyCt0BjujyC+yym9pHS0itcsHRq9v3uRCE8arQOz0iqlnaVJOUmyJwUXBcMoZqVUZLHVYhM5w0qrWd4n57ijprVRnd7t+Qc+lgyCBMFcoH6tW/IhPEXtWQ/Oo0AeSm4LxJUR9d8maROouP2/ZdHmZjm2eAW4LvrdwTqvMfSMJTbtNmXM0kBbHmUhlEMvQECOKlWH9Y3Dsh7B3CvieArnG+ItFpsDtgADvFczU29V6baqPKp49OYd8g7H2qbyRCV6CNb+dT8xuwN8E5Z5FYbxz3MaB+XvkYFPZlwj4i7LlKw2g/MdXmz4bNBBIEkCWq02gc+1dvumGblAliQKaWKLHmTTYFsUeIECFCBG8q8Qu/KDzuHIzrdQAAAABJRU5ErkJggg=="></img>
                        <span>BGP Supported</span>
                      </div>
                    )}
                    <div className='flex flex-row gap-2 items-center bg-blue-600 p-1 px-2 font-medium'>
                      <img className='h-4 w-4' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD6ElEQVR4nO2ZWaiOWxjHPxvZ5nmbNhdKykmm6JTciXJDarPdEJnvzrkwFspc5ygzyQ0yk0whyjUi05WhOB/FRonMp58e1qvnW9Ze33oHvGr/67vY63nWM6x3rWfahUIDGtCA1AAqgD+BRcAR4BbwAvhgfi/MmtAWGt6KPBheDawGisTHf2Zv9a8wvCOwFXhPerwDtojMn2V8LfCsjFEfgSVAF/NbatZ8qAMm/EjDm5hTtyF3+6j6+39gnGP/eEOLIHtkr43Noitr45sDJyxFj4AaoCXwUK0v98hZofgeAC3k1IHHluzjojPLk7eNPwNUGfpMtX4XqPTIqgTuK/7pZr0KOGvpOJHJl3Bcm391CLSuwfQAedrhm1YoXmfp2pTFg9XYBjRS9EGK9hxoFiCz0uSFCAMVrRGw3dJZkyZUPrMeXUnyAVYq+tYYsuUgIqyyaPIljin6U6BD2qsjQjo7eC4rntExZI9W+6446FUmrEbYmCTD6iRV6+BpC3wydOFtGUO+XKM3Zq/IaO/gmWQlux5xHJAUnzesDDW+worreUERaBzigFSKecWwEAcWqw27PXwXFN+ooM9bun+k2n/Ow7dH8c0PESw1e4Q5Hj6dwPoncEAecj9gNnDewzdX6TkUIlgbNsTDJ6E1wpeyIinwxHlgqNJzI0SYZNQIPT18rxRfqwRGTwYuASPK8PVSeupCBOv4X29FaNX3sYsu4KTZK/qmePikYo3wLk8OnKIU6119MtBa8byJe4Wqf+AVsh0QHJYTt/j6KHoxy0f8JM0jrscBzLvopviGE/MR6zA628N3M2UYrc8BTCUwwPC1By6a9b0hgmW2E2GXh+9ckko00AHMFR1r9eN/56GUGBPoQFSpfjMaaJOHYi6OAxF2AE3zUk4ncUBwHmgXp6GRJiLCBFf6V3Oet3b4C9AR1wHBHaBvqAIZ90WQkNnJwXMt6UNO6ACm1Rwe2tTXWUnGburXKvq2n+RAyTimnBKZmmlsscYqQ+KOVWI68BY4aP0OxJqhmlmlxj/WYOu2os3I2IGwLizlaHGWWr9XZrQoleUfHgc+ONYOpHJADXdl4KohA9mJjuHuCo+cNZ4wuh+YV08y652FE/IlNgWO18c79k80NJcDl8whyazppUPHhtQOKENqrHbSBekVlgFdpaszI8iof7AdKALdlXwZHtt4nWi86HFCkthGK9mFYpqRMRW4Dgx2tJCut7A4MweUsu7mdOPUTlfL/fOC0lGKfnPfQnjWjkgBOAxYIKMPaTxMXnhvZqBFc9p7gb/0lXHBGttrtC38LgBOW8bvK/xO4GsA2GkiXG0u/jHegML3+AzCEj8T146JegAAAABJRU5ErkJggg==" />
                      <span>AS{broker.asn}</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col gap-3'>
                  <div className='flex flex-row w-full items-center gap-4'>
                    <span>Locations</span>
                    <div className='flex-1 bg-zinc-800 h-0.5' />
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='flex flex-row flex-wrap gap-4'>
                      {broker.pop.map((pop, index) => (
                        <div key={pop.name} className='flex flex-row gap-2 items-center rounded-full bg-blue-900 bg-opacity-25 px-1.5 py-0.5 border-[1.5px] border-blue-900'>
                          {typeof pop.icon === 'string' ? (
                            <img src={pop.icon} className='h-5 w-5' />
                          ) : (
                            <>{pop.icon}</>
                          )}
                          <span>{pop.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='flex-grow'/>
                {broker.notes && (
                  <div className='flex flex-col gap-3'>
                    <div className='flex flex-row w-full items-center gap-4'>
                      <span>Notes</span>
                      <div className='flex-1 bg-zinc-800 h-0.5' />
                    </div>
                    <div className='flex flex-row flex-wrap gap-4 text-sm'>
                      <span>{broker.notes}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className='py-4 mx-auto flex flex-row items-center justify-between text-gray-500'>
            <span>© TunnelBroker.services 2022</span>
          </div>
        </div>
      </main>
    </div>
  )
}
