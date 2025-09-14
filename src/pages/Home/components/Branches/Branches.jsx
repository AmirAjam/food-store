import React from 'react'
import BrancheItem from './BrancheItem'
import SectionTitle from '@/components/Ui/SectionTitle'

const Branches = () => {
  const branches = [
    {
      id: 1,
      name: "شعبه ونک",
      address: "میدان ونک، خیابان فردوسی، نبش کوچه نیلوفر، پلاک ۲۶",
      desktopImage:"/images/branches/2.png",
      mobileImage: "/images/branches/2-mobile.png",
    },
    {
      id: 2,
      name: "شعبه اقدسیه",
      address: "خیابان اقدسیه، نرسیده به میدان خیام، پلاک ۸",
      desktopImage:"/images/branches/1.png",
      mobileImage: "/images/branches/2-mobile.png",
    },
    {
      id: 3,
      name: "شعبه چالوس",
      address: "چالوس، خیابان ۱۷ شهریور، بعد از کوچه کوروش",
      desktopImage:"/images/branches/2.png",
      mobileImage: "/images/branches/3-mobile.png",
    },
    {
      id: 4,
      name: "شعبه اکباتان",
      address: "شهرک اکباتان، فاز ۳، مجتمع تجاری کوروش، طبقه سوم",
      desktopImage:"/images/branches/3.png",
      mobileImage: "/images/branches/4-mobile.png"
    }
  ]

  return (
    <section className='mt-12'>
      <div className="container">
        <SectionTitle>ترخینه گردی</SectionTitle>
        <div className='sm:grid grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-4 mt-8 md:gap-10'>
          {branches.map(branche => <BrancheItem key={branche.id} branche={branche} />)}
        </div>
      </div>
    </section>
  )
}

export default Branches