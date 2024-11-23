import Link from "next/link"

export default function Navbar(){
    return (
        <>
            <div className="text-black w-full py-4 border-b">
                <div className="mx-auto w-full max-w-[90%] flex justify-between items-center"> 
                    <h1 className="text-xl font-semibold">i may still like my ex</h1>
                    <Link href={"https://www.masakagami.com/"} target="_blank" rel="noopener noreferrer">
                        <div className="btn text-white bg-red-700 border-none">
                            my portfolio
                        </div>
                    </Link>
                </div>
            </div>
        </>
    )
}