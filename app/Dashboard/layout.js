import Navbar from "../Components/Dashboard/Navbar/Navbar";
import Sidebar from "../Components/Dashboard/Sidebar/Sidebar";


export default function RootLayout({ children }) {
  return (
<div className='h-[100vh] w-[100vw] flex overflow-hidden'>
<div className='flex bg-black'> <Sidebar/> </div>
    <div className="w-full">
    <Navbar/>
    {children}
    </div>
</div>
  );
}
