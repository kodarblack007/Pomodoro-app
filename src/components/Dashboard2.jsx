import React from 'react'
import chart from "../assets/Frame 174.png"
import anim from "../assets/Button - animation (1).png"
import alarm from "../assets/solar_alarm-linear (1).png"
import anim2 from "../assets/Button - animation (2).png"
import clip from "../assets/Clip path group.png"
import svg from "../assets/SVG (1).png"
import anim3 from "../assets/Button - animation (3).png"
import mdi from "../assets/mdi_meditation.png"
import gravy from "../assets/gravity-ui_target-dart.png"
import vector from "../assets/Vector (1).png"

const Dashboard2 = () => {
  return (
    <nav>
    <div className='b-g bg-white mx-6 px-1'>
      {/* <div className='flex  justify-between  mx-1 py-1  gap-96 '>
        <div className='flex flex-col gap-2'>
            <p className='font-bold'>Daily progress</p>
            <h1>Measure how much focus you get everyday</h1>
        </div>

        <p className='mt-5'>Last 7 days</p>
      </div> */}

      {/* <div className='flex justify-between ml-32 w-4/5 mt-3'>
      <img src={chart} alt=""  />
      </div> */}
    </div>

    <div className='flex justify-center mt-2'>
    <img src={anim} alt=""  />
    </div>
    <h1 className="the">
        The Pomodoro technique is a  time <br />  management strategy
        that can greatly <br /> enhance your concentration and efficiency
    </h1>

    <div className="second mt-96">
        <div >
           <div className="focus gap-1 rounded-full w-36">
           <img src={alarm} alt="" />
           <p>Focus time</p>
           </div>

           <div>
           <h1 className="timer">Set a timer to 25 <br /> minutes and start</h1>
           </div>
        </div>
        

        <img src={anim2} alt="" />
    </div>


    <div className="third mt-96">
        <img src={clip} alt="" />
        <div >
           <div className="flex">
           <div className="focus2 rounded-full gap-1 w-36">
           <img src={alarm} alt="" />
           <p>Short break</p>
           </div>

           <div className='h-3 w-3 rounded-full bg-black mr-10 dotted mt-5'></div>
           <div className='h-3 w-3 rounded-full bg-black mr-10 dotted mt-5'></div>
           <div className='h-3 w-3 rounded-full bg-black mr-10 dotted mt-5'></div>
           </div>

           <div>
           <h1 className="timer">Take a 5-minute <br /> short break</h1>
           </div>
        </div>

    </div>

    <div className="fourth mt-96">
        <div >
           <div className="flex">
           <div className='h-3 w-3 rounded-full bg-black mr-10 dot mt-5'></div>
           <div className='h-3 w-3 rounded-full bg-black mr-10 dot2 mt-5'></div>
           <div className="focus2 rounded-full gap-1 w-36">
           <img src={alarm} alt="" />
           <p>Interval</p>
           </div>

           <div className='h-3 w-3 rounded-full bg-black mr-10 dot3 mt-5'></div>
           </div>

           <div>
           <h1 className="timer">Take a 5-minute <br /> short break</h1>
           </div>
        </div>
        <img src={svg} alt="" />

    </div>

    <div className="fifth mt-96">
        <img src={anim3} alt="" />
        <div >
           <div className="flex">
           <div className='h-3 w-3 rounded-full bg-black mr-10 dot mt-5'></div>
           <div className='h-3 w-3 rounded-full bg-black mr-10 dot2 mt-5'></div>
           <div className='h-3 w-3 rounded-full bg-black mr-10 dot3 mt-5'></div>
           <div className="focus2 rounded-full gap-1 w-36">
           <img src={mdi} alt="" />
           <p>Long break</p>
           </div>

           </div>

           <div>
           <h1 className="timer">Take a 5-minute <br /> short break</h1>
           </div>
        </div>

    </div>

       
    <div className="bg-orange-400 grav ">
            <p className="turn">Turn out the distractions and <br /> concentrate on your time</p>
      <div className=" flex gap-4 ">
        <div className="hanced">
        <img src={gravy} alt="" />
        <h1>Enhanced focus</h1>
        <h1 className='ml-80'>By using a timer for short bursts of <br /> focused work helps you avoid <br /> distractions like emails and social <br /> media</h1>
        </div>

      </div>


      {/* <div className="turn">
            <h1 className='mt-60'>Turn out the distractions and <br /> concentrate on your time</h1>
        </div> */}
      <div className=" flex gap-4 ">
        <div className="hanced">
        <img src={gravy} alt="" />
        <h1>Better time management</h1>
        <h1 className='ml-60 justify-end'>By using a timer for short bursts of <br /> focused work helps you avoid <br /> distractions like emails and social <br /> media</h1>
        </div>

      </div>

      <div className=" flex gap-4 ">
        <div className="hanced">
        <img src={vector} alt="" />
        <h1>Increased productivity</h1>
        <h1 className='ml-72 justify-end'>The timed breaks rejuvenate your mind <br /> and body, providing an energy boost for <br /> the next work session. This cycle of  <br /> and rest enhances stamina and <br />productivity over time</h1>
        </div>

      </div>
    </div>

    </nav>

    
  )
}

export default Dashboard2;
