import { Check, X } from 'lucide-react';

export default function CardElements({ check, xmark }) {
	return (
		<ul className="text-white p-4">
			{check.map(element => {
				return <li key={element} className="flex items-center justify-start"><Check className='w-4 text-[rgba(2,159,115,1)]' />&nbsp;{element}</li>
			})}
			{xmark.map(element => {
				return <li key={element} className="flex items-center justify-start"><X className='w-4 text-red-500' />&nbsp;{element}</li>
			})}
        </ul>
	);
}