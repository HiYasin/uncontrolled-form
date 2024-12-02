import { useEffect, useRef } from "react";

const SimpleForm = () => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(emailRef.current, passwordRef.current);
        console.log(emailRef.current.value, passwordRef.current.value);
    }

    useEffect(()=>{
       passwordRef.current.focus();  // Focus on email input field when form loads
    }, [])

    return (
        <div>
            <form className="flex flex-col gap-4 w-[200px] mx-auto m-10" onSubmit={handleSubmit}>
                <input className="border" type="email" name="email" ref={emailRef} />
                <input className="border" type="password" name="" ref={passwordRef} />
                <input className="border" type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;