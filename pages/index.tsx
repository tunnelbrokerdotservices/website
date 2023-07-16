/* eslint-disable @next/next/no-img-element */
import Head from 'next/head'
import { useEffect } from 'react';
import ReactTooltip from 'react-tooltip';

export default function Home() {
  const brokers = [
    // {
    //   name: "Route48",
    //   banner: '/assets/providers/route48.png',
    //   url: 'Route48.org',
    //   pop: 40,
    //   bgp: true,
    //   // prefix: '/48',
    //   prefix: <span data-tip="Default tunnel assignment is /48, Can request up to /44 allocation for BGP Sessions">Up to /44</span>,
    //   '6in4': true,
    //   wireguard: true,
    //   zerotier: true,
    //   openvpn: false,
    //   rdns: true,
    //   buttonStyles: 'bg-blue-600 hover:bg-blue-600/90',
    // },
    {
      name: "BGPTunnel.com",
      banner: <div className='w-full bg-white rounded-md mx-auto flex flex-row items-center justify-center h-[60px]'>
        <img src={'/assets/providers/bgptunnel.png'} className="h-[40px]" alt={'BGPTunnel.com'} />
      </div>,
      url: 'BGPTunnel.com',
      pop: 6,
      bgp: true,
      prefix: '/64',
      '6in4': true,
      wireguard: true,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-green-600 hover:bg-green-600/90',
    },
    {
      name: "6Project",
      // banner: '/assets/providers/6project.png',
      banner: <div className='w-full bg-[#171086] rounded-md mx-auto flex flex-row items-center justify-center h-[60px]'>
        <img src={'/assets/providers/6project.png'} className="h-[40px]" alt={'6Project'} />
      </div>,
      url: '6Project.org',
      pop: 8,
      bgp: true,
      prefix: '/64',
      '6in4': false,
      wireguard: false,
      zerotier: false,
      openvpn: true,
      rdns: true,
      buttonStyles: 'bg-blue-500 hover:bg-blue-500/90',
    },
    {
      name: "Hurricane Electric TunnelBroker Services",
      banner: <div className='w-full bg-white rounded-md mx-auto flex flex-row items-center justify-center h-[60px]'>
        <img src={'/assets/providers/henet.png'} className="h-[40px]" alt={'Hurricane Electric TunnelBroker Services'} />
      </div>,
      url: 'TunnelBroker.net',
      pop: 8,
      bgp: <div data-tip="$500 per month on tunnel connections.">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-yellow-500">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
        </svg>
      </div>,
      prefix: '/64, /48',
      '6in4': true,
      wireguard: false,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-blue-400 hover:bg-blue-400/90',
    },
    {
      name: "Karabro",
      banner: <div className='w-full bg-white rounded-md mx-auto flex flex-row items-center justify-center h-[60px]'>
        <img src={'/assets/providers/karabro.png'} className="h-[40px]" alt={'Karabro'} />
      </div>,
      url: 'TunnelBroker.se',
      pop: 1,
      bgp: true,
      prefix: '/60',
      '6in4': true,
      wireguard: true,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-green-500 hover:bg-green-500/90',
    },
    {
      name: "NetAssist TunnelBroker",
      // banner: '/assets/providers/netassist.png',
      banner: <div className='w-full bg-[#314C9B] rounded-md mx-auto flex flex-row items-center justify-center h-[60px]'>
      <img src={'/assets/providers/netassist.png'} className="h-[40px]" alt={'NetAssist TunnelBroker'} />
    </div>,
      url: 'tb.NetAssist.ua',
      pop: 1,
      bgp: true,
      prefix: '/48',
      '6in4': true,
      wireguard: false,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-yellow-500 hover:bg-yellow-500/90',
    },
    // {
    //   name: "August Internet",
    //   // banner: '/assets/providers/august.png',
    //   banner: <div className='w-full bg-[#000063] rounded-md mx-auto flex flex-row items-center justify-center h-[60px]'>
    //     <img src={'/assets/providers/august.png'} className="h-[60px]" alt={'August Internet'} />
    //   </div>,
    //   url: 'August.tw',
    //   pop: 2,
    //   bgp: true,
    //   prefix: '/64, /48',
    //   '6in4': true,
    //   wireguard: true,
    //   zerotier: false,
    //   openvpn: false,
    //   rdns: true,
    //   buttonStyles: 'bg-blue-500 hover:bg-blue-500/90',
    // },
    {
      name: "IPv6 Only Hosting",
      banner: null,
      url: 'IPv6OnlyHosting.com',
      pop: 1,
      bgp: false,
      prefix: '/48',
      '6in4': true,
      wireguard: false,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-purple-500 hover:bg-purple-500/90',
    },
    {
      name: "IP4Market",
      banner: null,
      url: 'IP4Market.ru',
      pop: 1,
      bgp: false,
      prefix: '/48',
      '6in4': true,
      wireguard: false,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-rose-400 hover:bg-rose-400/90',
    },
    {
      name: "TunnelBroker.ch",
      banner: null,
      url: 'TunnelBroker.ch',
      pop: 5,
      bgp: true,
      prefix: '/48',
      '6in4': true,
      wireguard: false,
      zerotier: false,
      openvpn: false,
      rdns: true,
      buttonStyles: 'bg-gray-400 hover:bg-gray-400/90',
    },
  ]
  useEffect(() => {
    ReactTooltip.rebuild();
  }, [])
  return (
    <div>
      <Head>
        <title>TunnelBroker.services -:- List of IPv6 Tunnel Broker Services</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        <meta property="og:title" content="TunnelBroker.services" />
        <meta property="twitter:title" content="TunnelBroker.services" />
        <meta name="description" content="A list of IPv6 Tunnel Broker Services." />
        <meta property="og:description" content="A list of IPv6 Tunnel Broker Services." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ReactTooltip place='top' effect='solid' />

      <main>
        <div className="container mx-auto px-4 dark:text-white">
          <div className="flex flex-row justify-between py-4">
            <span className="text-xl font-medium">TunnelBroker.services</span>
            <div className="flex flex-row gap-3">
              <a href="https://discord.gg/ipv6" className="text-lg dark:text-gray-300 dark:hover:text-gray-400 text-gray-600 hover:text-gray-500 transition-all duration-200 ">Discord</a>
              <a href="https://github.com/tunnelbrokerdotservices/website" className="text-lg dark:text-gray-300 dark:hover:text-gray-400 text-gray-600 hover:text-gray-500 transition-all duration-200">GitHub</a>
            </div>
          </div>
          <div className="my-4 flex flex-row items-center gap-4 rounded-md border-2 border-black dark:border-gray-700 p-5">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 md:block hidden">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <span>{"Due to the removal of Wikipedia's IPv6 Tunnel Broker List on the 13th of August 2022, We have created this page for users to share for those that wish to find IPv6 Tunnel Broker Services."}</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">
            {brokers.map((broker) => (
              <div className="flex flex-1 flex-col items-center gap-4 rounded-md border-2 border-gray-300 dark:border-black/50 dark:bg-[#1F2229] p-5" key={broker.name}>
                {/* <div className={`h-[60px] px-4 rounded-md`}> */}
                <div className={`m-auto flex items-center justify-center h-[60px] w-full`}>
                  <a href={`https://${broker.url}`} target="_blank" rel="noreferrer" className='w-full flex flex-row items-center justify-center'>
                    {broker.banner ?
                      <>
                        {typeof broker.banner == 'string' ? <img src={broker.banner} className="h-[40px]" alt={broker.name} /> : broker.banner}
                      </> : <span className="text-2xl font-medium">{broker.name}</span>}
                    <span className="sr-only">{broker.name}</span>
                  </a>
                  {/* </div> */}
                </div>
                <div className="flex w-full flex-col gap-2 py-3">
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">POPs</span>
                    <span>{broker.pop}</span>
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">BGP</span>
                    {/* check if broker.bgp is a boolean */}
                    {typeof broker.bgp === 'boolean' ?
                      <>
                        {broker.bgp ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-green-500">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-red-600">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>}
                      </> :
                      <>{broker.bgp}</>
                    }
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">IPv6 Prefix</span>
                    {broker.prefix}
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">6in4 / GRE</span>
                    {broker['6in4'] ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">Wireguard</span>
                    {broker.wireguard ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">Zerotier</span>
                    {broker.zerotier ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">OpenVPN</span>
                    {broker.openvpn ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                  </div>
                  <div className="h-0.5 border-gray-200 bg-gray-200 dark:border-gray-700 dark:bg-gray-700"></div>
                  <div className="flex flex-row justify-between">
                    <span className="font-medium">rDNS</span>
                    {broker.rdns ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-green-500">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6 text-red-600">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>}
                  </div>
                </div>
                {/* {broker.url == "Route48.org" && (
                  <span>clearly the best tunnelbroker service</span>
                )} */}
                <div className='flex-grow' />
                <a href={`https://${broker.url}`} target="_blank" rel="noreferrer" className='w-full'>
                  <button className={`w-full rounded-md ${broker.buttonStyles} transition-all duration-200 px-2 py-2 text-white`}>Visit {broker.url}</button>
                </a>
              </div>
            ))}
          </div>
          <div className='py-4 mx-auto flex flex-col items-center text-gray-600'>
            <span>Copyright © TunnelBroker.services 2022</span>
            <a href="https://mythicalkitten.com">Website created by MythicalKitten</a>
          </div>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  )
}
