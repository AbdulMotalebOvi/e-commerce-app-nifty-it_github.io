import { Link } from 'react-router-dom'
import './hero.css'

export default function Discover() {
    return (
        <div className="max-w-screen-xl mx-auto  ">
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4 ">
                <div className="container">
                    <div className='bg_disc_1 border-[18px] border-white flex items-center  bg-white '>
                        <div className='p-[10%] '>
                            <h5 >Sunflower Clock <br />Quartz Hands </h5>
                            <Link to="" className='text-[14px] hover:text-[#bc8246] duration-75'>Discover now</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='bg_disc_2 p-[10%] border-[18px] border-white  flex items-center bg-white'>
                        <div>
                            <h5 >Sunflower Clock <br />Quartz Hands </h5>
                            <Link to="" className='text-[14px] hover:text-[#bc8246] duration-75'>Discover now</Link>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className='bg_disc_3 p-[10%] flex items-center bg-white border-[18px] border-white '>
                        <div >
                            <h5 >Sunflower Clock <br />Quartz Hands </h5>
                            <Link to="" className='text-[14px] hover:text-[#bc8246] duration-75'>Discover now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
