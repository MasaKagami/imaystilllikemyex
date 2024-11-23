export default function Instruction(){
    return(
        <div className="text-black w-full max-w-[60%] flex flex-col py-4 mx-auto gap-4">
            <div>
                <h1 className="font-bold text-xl">&quot;Still have something to say to your ex?&quot;</h1>
                <p className="font-light">Take a chance to express your lingering thoughts! Whether it&apos;s closure, humor, or a heartfelt message, this is your moment to let it out. But there&apos;s a twist: only 1 in 1000 messages will actually get through. Will fate choose you? 💌</p>
            </div>
            <div>
                <h1 className="font-bold text-xl">Instructions</h1>
                <ol className="font-light">
                    <li className="list-decimal list-inside font-medium">Fill Out the Form</li>
                    <p>Enter your first name, last name, email, and the message you want to send.</p>
                    <li className="list-decimal list-inside font-medium">Hit Submit</li>
                    <p>Click the button and see if luck is on your side!</p>
                    <li className="list-decimal list-inside font-medium">Hold Your Breath</li>
                    <p>If your message gets chosen, you’ll see a confirmation. Otherwise, tough luck!</p>
                </ol>
            </div>
        </div>
    )
}