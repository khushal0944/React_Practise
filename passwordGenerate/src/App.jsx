import { useCallback, useEffect, useRef, useState } from "react";

function App() {
	const [length, setLength] = useState(8);
	const [numcheck, setNumCheck] = useState(false);
	const [symcheck, setSymCheck] = useState(false);
	const [password, setPassword] = useState("");
    const inputRef = useRef(null)
	const getPassword = useCallback(() => {
		let pass = "";
		let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

		if (numcheck) char += "0123456789";
		if (symcheck) char += "~!@#$%^&*-+";
		for (let i = 0; i < length; i++) {
			let random = Math.floor(Math.random() * char.length + 1);
			pass += char.charAt(random);
		}
		setPassword(pass);
	}, [length, numcheck, symcheck, setPassword]);

	useEffect(() => {
		getPassword();
	}, [length, numcheck, symcheck]);
    
    function clipboardCopy() {
        if (inputRef.current) {
            inputRef.current.select();
        }
        window.navigator.clipboard.writeText(password);
    }

	return (
		<>
			<div className="w-full h-screen flex bg-[#5a4c4c] justify-center items-center">
				<div className="w-1/2 h-60 bg-orange-500 p-4 shadow-2xl rounded-lg">
					<div className="relative shadow-md rounded-xl">
						<input
							type="text"
                            ref={inputRef}
							className="w-full flex-1 outline-none rounded-xl border-0 bg-gray-200 p-2 "
							value={password}
							placeholder="Your Password Here"
							readOnly
						/>
						<button
							className="absolute right-0 top-0 bg-blue-400 w-20 p-2 rounded-xl hover:bg-blue-800 hover:text-white"
                            onMouseDown={(e) => e.preventDefault()}
							onClick={() => clipboardCopy()}
						>
							Copy
						</button>
					</div>
					<input
						type="range"
						className="mt-10"
						min={8}
						max={50}
						id="range"
                        value={length}
						onChange={(e) => setLength(e.target.value)}
					/>
					<label htmlFor="range" className="mx-2">
						Length : {length}
					</label>
					<input
						type="checkbox"
						className="mt-10 ml-10 mr-1"
						checked={numcheck}
						id="numberallowed"
						onChange={(e) => setNumCheck(e.target.checked)}
					/>
					<label htmlFor="numberallowed">Number Allowed</label>
					<input
						type="checkbox"
						className="mt-10 ml-10 mr-1"
						checked={symcheck}
						id="charallowed"
						onChange={(e) => setSymCheck(e.target.checked)}
					/>
					<label htmlFor="charallowed">Symbols Allowed</label>
				</div>
				{/* <h1 className='bg-black text-red-200 text-center text-5xl'>HelloWorld!</h1> */}
			</div>
		</>
	);
}

export default App;
