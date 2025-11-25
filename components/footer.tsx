import Logo from "@/components/logo";

export default function Footer() {
    return (
        <footer className="h-[15vh] w-full relative flex flex-col justify-center items-center border-t border-neutral-950" id="Footer">
            <div className="h-full w-[90%] flex justify-between items-center">
                <div className="w-1/2 flex">
                    <Logo className="text-neutral-100 size-7"/>
                </div>
                <div className="h-7 w-1/2">

                </div>
            </div>
        </footer>
    )
}