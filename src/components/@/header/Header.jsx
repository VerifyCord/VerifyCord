import Nav from "./Nav";

export default function Header() {
	return (
		<header>
            <Nav />
            <hgroup className="flex flex-col justify-center items-center mb-[5px] text-white">
                <h1 className="mb-4">The easiest way to <span className="mb-[35px] relative text-white uppercase before:content-[''] before:absolute before:left-0 before:bottom-[-5px] before:bg-[#1cc49d] before:w-[130px] before:h-[2px]">backup</span> your members.</h1>
                <p>Backup your members now !</p>
                <a className="flex items-center justify-center h-[3em] w-[8em] mt-[2%] mb-8 rounded-full text-white bg-[#1cc49d] ease-in duration-300 no-underline hover:bg-[#25ddb2]" href="/dashboard">Get Started</a>
                <img src="" alt="Dashboard" />
            </hgroup>
        </header>
	);
}