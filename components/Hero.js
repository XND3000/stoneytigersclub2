import React from 'react'
import stoneybackground from '../assets/stoneybackground.png'


const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://pbs.twimg.com/media/FLkhRmxXEAoHT5V.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
  }
  

const Hero = () => {
    return (<div className={style.wrapper}>
                <div className={style.container}>
                 <div className={style.contentWrapper}>
                     <div className={style.copyContainer}>
                         <div className={style.title}>
                         Welcome To The Stoney Tigers Club!                        </div>
                         <div className={style.description}>
                             Opensea is the worlds first and largest NFT marketplace
                         </div>
                         <div className={style.ctacContainer}>
                             < button className={style.accentedButton}>Explore</button>
                             < button className={style.accentedButton}>Stoney Promise</button>
                         </div>
                     </div>
                     <div className={style.cardContainer}>
                        <img className="rounded-t-lg" 
                         src='https://pbs.twimg.com/media/FI6DeP-XwAAZKZi?format=jpg&name=small' 
                         alt="welcometiger"
                         />
                         <div className={style.infoContainer}>
                             <img 
                             className="h-[2.25rem] rounded-full"
                             src="https://pbs.twimg.com/media/FIv8UwoWQAA3cR3.jpg"
                             alt="stoneytiger"
                             />
                             <div className={style.author}>
                                 <div className={style.name}>Aidan Waldron</div>
                                 <a
                                    className="text-[#1868b7]"
                                    href="https://opensea.io/collection/stoneytigernft"
                                    ></a>
                             </div>
                         </div>
                     </div>
            </div>
        </div>
    </div>

  
    )
}

export default Hero
