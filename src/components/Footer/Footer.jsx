import React from 'react'
import FooterList from './FooterList'
import SocialMedia from '../SocialMedia/SocialMedia'
import MessageUs from '../MessageUs/MessageUs'

const Footer = () => {
    const quickAccess = [
        { id: 1, text: "پرسش‌های متداول", link: "" },
        { id: 2, text: "قوانین ترخینه", link: "" },
        { id: 3, text: "حریم خصوصی", link: "" },
        { id: 4, text: "", link: "" }
    ]

    const branches = [
        { id: 1, text: "شعبه ونک" },
        { id: 2, text: "شعبه اقدسیه" },
        { id: 3, text: "شعبه چالوس" },
        { id: 4, text: "شعبه اکباتان" }
    ]
    return (
        <footer className='mt-12 bg-[url(/images/footer/mobile-footer.png)] md:bg-[url(/images/footer/desktop-footer.png)]
         py-5 px-1 relative bg-no-repeat bg-cover'>
            <div className="container relative z-20 text-white">
                <div className='flex justify-between gap-25'>
                    <div className='flex justify-between md:justify-around lg:justify-start gap-5 lg:gap-20 w-full '>
                        <div>
                            <FooterList list={quickAccess} title="دسترسی آسان" />
                            <SocialMedia />
                        </div>
                        <FooterList list={branches} title="شعبه‌های ترخینه" />
                    </div>
                    <div className='lg:w-1/2 lg:block hidden'>
                        <MessageUs />
                    </div>
                </div>
            </div>
            <div className="inset-0 bg-black/60 absolute z-10"></div>
        </footer>
    )
}

export default Footer