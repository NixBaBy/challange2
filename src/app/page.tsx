
import Detail from "@/components/Detail/Detail";
import Ladi from "@/components/Header/Ladi";
import LadiUser from "@/components/LadiUser/LadiUser";
import OrderNow from "@/components/orderNow/OrderNow";
import StickyOff from "@/components/StickyOff";
import UserCommends from "@/components/usercommends/UserCommends";

export default function Home() {
  return (
    <div className="w-[420px] m-auto  relative scroll-smooth">
      <Ladi />
      <LadiUser />
      <OrderNow />
      <UserCommends />
      <Detail />
   
      <StickyOff />
    </div>
  );
}
