import { Github } from 'lucide-react';

export default function Footer() {
	return (
		<footer className="pb-[25px]">
            <div className="text-white flex flex-wrap max-w-[1170px] m-auto w-full px-8">
                <div className="px-4 w-[50%] mb-[30px] text-xs sm:w-[25%] sm:mb-[35px] sm:text-base">
                    <h4 className="text-sm font-medium capitalize mb-[35px] text-white relative sm:text-xl before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-[#1cc49d] before:w-[50px] before:h-[2px]">VerifyCord</h4>
                    <ul>
                        <li className='mb-1'><a href="/">Home</a></li>
                        <li className='mb-1'><a href="/about">About Us</a></li>
                        <li className='mb-1'><a href="#pricing">Our Princing</a></li>
                        <li className='mb-1'><a href="/privacy">Privacy Policy</a></li>
                    </ul>
                </div>
                <div className="px-4 w-[50%] mb-[30px] text-xs sm:w-[25%] sm:mb-[35px] sm:text-base">
                    <h4 className="text-sm font-medium capitalize mb-[35px] text-white relative sm:text-xl before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-[#1cc49d] before:w-[50px] before:h-[2px]">Resources</h4>
                    <ul>
                        <li className='mb-1'><a href="#">Github</a></li>
                        <li className='mb-1'><a href="#">Documentation</a></li>
                    </ul>
                </div>
                <div className="px-4 w-[50%] mb-[30px] text-xs sm:w-[25%] sm:mb-[35px] sm:text-base">
                    <h4 className="text-sm font-medium capitalize mb-[35px] text-white relative sm:text-xl before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-[#1cc49d] before:w-[50px] before:h-[2px]">Contact Us</h4>
                    <ul>
                        <li className='mb-1'><a href="#">Our Discord</a></li>
                    </ul>
                </div>
                <div className="px-4 w-[50%] mb-[30px] text-xs sm:w-[25%] sm:mb-[35px]">
                    <h4 className="text-sm font-medium capitalize mb-[35px] text-white relative sm:text-xl before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:bg-[#1cc49d] before:w-[50px] before:h-[2px]">Join Us</h4>
                    <a href="#" className='flex items-center text-xs sm:text-base'><Github className='mr-2 w-4 sm:w-6' /> Github</a>
                </div>
            </div>
        </footer>
	);
}