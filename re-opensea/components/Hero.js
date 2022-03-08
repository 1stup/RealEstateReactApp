import React from 'react'

const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://e8x4d3t2.rocketcdn.me/wp-content/uploads/2020/05/triplex-example-1.jpg')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem] h-96 w-96 `,
  infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              The Future of Real Estate Investing Is Now!
            </div>
            <div className={style.description}>
                Muzim is transforming the way we invest in real estate!
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}> Add a Property </button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://e8x4d3t2.rocketcdn.me/wp-content/uploads/2020/05/triplex-example-1.jpg"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://lh3.googleusercontent.com/c4SQsVOq7MhNPu6AWiTw0FdJ-HDw1ghQYfAD3tznT76G7Tyt5wtpHsIbmNWvOCZc6RLdbm2GPXy_dTG5WH1bS3hjux9ft6cjVpfs=w179"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}> Triplex in Fayetteville </div>
                <a
                  className="text-[#1868b7]"
                  href="https://opensea.io/assets/0xa5814003d93a6ff861ae125ac706ce5043004903/965"
                >
                  1stup
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
