
import { Link } from 'react-router-dom';
import img1 from '../../assests/images/page-title-1.jpg'

export default function CommonSection(header, title, linkUp) {
    return (

        <div className="relative">
            <img src={img1} alt="" className="w-full object-cover" />
            <div className="absolute inset-0 bg-opacity-50 flex items-center flex-col justify-center">
                <h3 className="text-center text-white">{header}</h3>
                <div className="flex justify-center space-x-2 mt-2">
                    <Link to="/" className="text-black">
                        Home /
                    </Link>
                    <Link to={`/${linkUp}`} className="text-black">
                        {title}
                    </Link>
                </div>
            </div>
        </div>


    );
}
