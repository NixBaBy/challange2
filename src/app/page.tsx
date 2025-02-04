import Contact from "@/components/Contact";
import Detail from "@/components/Detail/Detail";
import Ladi from "@/components/Header/Ladi";
import LadiAward from "@/components/LadiAward";
import LadiUser from "@/components/LadiUser/LadiUser";
import OrderNow from "@/components/orderNow/OrderNow";
import UserCommends from "@/components/usercommends/UserCommends";

export default function Home() {
  return (
    <div className="w-[420px] m-auto overflow-hidden  ">
      <Ladi />
      <LadiAward />
      <LadiUser />
      <OrderNow />
      <UserCommends />
      <Detail />
      <Contact />
    </div>
  );
}
