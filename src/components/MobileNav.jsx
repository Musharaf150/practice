import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import logo from "../assets/logo.png"

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <Sheet>
        <SheetTrigger><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
</svg>
</SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle className='flex justify-center items-center'>
            <img className='h-10 w-auto' src={logo} alt='logo' />

            </SheetTitle>
            <SheetDescription className="py-5 font-semibold text-black text-2xl">
            <ul className='flex flex-col gap-6'>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">About US</a>
                </li>
                <li>
                    <a href="/">Services</a>
                </li>
                <li>
                    <a href="/">Gallery</a>
                </li>
                <li>
                    <a href="/">Courses</a>
                </li>
                <li>
                    <a href="/">Contac Us</a>
                </li>
            </ul>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
