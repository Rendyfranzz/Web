import { Layout } from '@/components/Layout'
import { HiLocationMarker, HiOutlineBookOpen, HiOutlineAcademicCap } from "react-icons/hi"
import TechIcons, { TechListType } from '@/components/icons/TechIcon';
import React from 'react'
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const index = () => {
  const techs: any = "javascript,react"
  const liEduStyle = "flex flex-row items-center"
  return (
    <Layout>
      <div className='layout flex flex-col space-y-6 scroll-smooth'>
        <div className='flex flex-col justify-center items-center'>
          <h1 className="mt-8 text-3xl font-bold">Projects</h1>
          <div className=' w-28 h-32 bg-slate-500 mt-4'>
            {/* <img src='' alt='' /> */}
          </div>
        </div>
        <div>
          <h2 className="h2">Profile</h2>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut neque ac sem pharetra egestas quis non ipsum.
            Praesent fringilla felis et convallis tristique. Aliquam est est, convallis faucibus euismod eget, porttitor a libero.
            Integer ultrices mauris ipsum, quis vulputate tellus vestibulum eu. Suspendisse potenti. Nullam aliquet iaculis
            est in aliquet. Praesent nunc est, rhoncus ac iaculis at, accumsan vel dolor. Duis luctus arcu ac lorem finibus, in
            ornare magna elementum. Nam sit amet iaculis felis. Integer et purus vehicula, tincidunt nunc sit amet, interdum eros.</p>
        </div>
        <div>
          <h2 className="h2">Tools & Techs I Used</h2>
          <TechIcons size='30' techs={techs.split(',') as Array<TechListType>} />
        </div>
        <div>
          <h2 className="h2">Why I Choose Frond End Development?</h2>
          <p className="p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut neque ac sem pharetra egestas quis non ipsum.
            Praesent fringilla felis et convallis tristique. Aliquam est est, convallis faucibus euismod eget, porttitor a libero.
            Integer ultrices mauris ipsum, quis vulputate tellus vestibulum eu. Suspendisse potenti. Nullam aliquet iaculis
            est in aliquet. Praesent nunc est, rhoncus ac iaculis at, accumsan vel dolor. Duis luctus arcu ac lorem finibus, in
            ornare magna elementum. Nam sit amet iaculis felis. Integer et purus vehicula, tincidunt nunc sit amet, interdum eros.</p>
        </div>
        <div>
          <h2 className="h2">Education</h2>
          <ul>
            <li className={liEduStyle}>
              <HiOutlineAcademicCap />
              <h4>2020 - Present</h4>
            </li>
            <li className={liEduStyle}>
              <HiOutlineBookOpen />
              <p>Undergraduate of Informatics</p>
            </li>
            <li className={liEduStyle}>
              <HiLocationMarker />
              <h3>Institute Technology Sepuluh Nopember</h3>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="h2">Contact</h2>
          <ul className='flex flex-row items-center space-x-1'>
            <li>
              <FaWhatsapp size={30} />
            </li>
            <li>
              <FaLinkedin size={30} />
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default index