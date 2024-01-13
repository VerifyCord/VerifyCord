import { useNavigate } from "react-router-dom";
import CardElements from "@/components/@/pricing/CardElements";

export default function FreeCard() {
    const navigate = useNavigate();

	return (
		<div className="pb-2 bg-[#16161e] text-white text-center rounded-xl shadow-[0.5rem_0.5rem_1rem_rgba(51,51,51,0.2)] overflow-hidden ease-in duration-300 hover:scale-105">
            <div className="h-[5rem] uppercase font-bold text-[0.8rem] py-4 text-white polygon gradient-blue">
                <h2>Free</h2>
            </div>
            <div className="py-2">
                <h2 className="font-bold text-[2rem]">$0 / mo</h2>
                <div>
                    <CardElements check={['Unlimited Members', '1 Servers', 'Custom Bot']} xmark={['Blacklist', 'Logs', 'Alt Detection', 'Backup', 'Export Members']} />
                    <button onClick={() => navigate('/dashboard')} className="my-2 px-4 py-[0.7rem] rounded-xl font-bold text-white cursor-pointer ease-in duration-300 gradient-blue hover:scale-95">Get Started</button>
                </div>
            </div>
        </div>
	);
}