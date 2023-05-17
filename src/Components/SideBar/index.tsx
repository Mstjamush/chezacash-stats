import { NavLink, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { Links } from "../../Models/links";
import { User } from "../../Models/users";

const SidenavLink = (link: Links) => {
  return (
    <NavLink
      to={link.url}
      key={link.url}
      className={({ isActive }) =>
        isActive
          ? "py-4 bg-secondary bg-opacity-20 text-primary mb-2 w-full  px-4 rounded text-sm"
          : "text-sm text-black mb-2 py-4 w-full  px-4 rounded"
      }
    >
      <div className="flex  gap-4 items-center">
        {link.icon}
        {link.name}
      </div>
    </NavLink>
  );
};

const index = () => {
  const cookies = new Cookies();
  let user: User = cookies.get("user") || { username: "", isAdmin: false };
  const navigate = useNavigate();

  const handleLogout = () => {
    cookies.remove("user");
    navigate("/login", { replace: true });
  };

  const menu: Links[] = [
    // { name: "Registrations", url: "/registrations" },
    // { name: "Deposits", url: "/deposits" },
    // { name: "Withdrawals", url: "/withdrawals" },
    // { name: "Betting Tax", url: "/bettingTax" },
    // { name: "Exercise Duty", url: "/exciseDuty" },
    // { name: "Profit And Loss", url: "/profitAndLoss" },
    // { name: "Total Stake", url: "/stakes" },
    // { name: "Total Payouts", url: "/payouts" },
    // { name: "Stake After Tax", url: "/stakeAfterTax" },
    // { name: "Winning Amount", url: "/winningAmount" },
    // { name: "Withholding Tax", url: "/withholdingTax" },
    {
      name: "Bulk Remittance",
      url: "/bulk-upload",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M4 22v-20h16v11.543c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362zm18-7.614v-14.386h-20v24h10.189c3.163 0 9.811-7.223 9.811-9.614zm-5-1.386h-10v-1h10v1zm0-4h-10v1h10v-1zm0-3h-10v1h10v-1z" />
        </svg>
      ),
    },
    {
      name: "pnr",
      url: "/pnr-upload",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M15.812 4.819c-.33-.341-.312-.877.028-1.207l3.469-3.365c.17-.164.387-.247.603-.247.219 0 .438.085.604.257l-4.704 4.562zm-5.705 8.572c-.07.069-.107.162-.107.255 0 .194.158.354.354.354.089 0 .178-.033.247-.1l.583-.567-.493-.509-.584.567zm4.924-6.552l-1.994 1.933c-1.072 1.039-1.619 2.046-2.124 3.451l.881.909c1.419-.461 2.442-.976 3.514-2.016l1.994-1.934-2.271-2.343zm5.816-5.958l-5.137 4.982 2.586 2.671 5.138-4.98c.377-.366.566-.851.566-1.337 0-1.624-1.968-2.486-3.153-1.336zm-11.847 12.119h-4v1h4v-1zm9-1.35v1.893c0 4.107-6 2.457-6 2.457s1.518 6-2.638 6h-7.362v-20h12.629l2.062-2h-16.691v24h10.189c3.163 0 9.811-7.223 9.811-9.614v-4.687l-2 1.951z" />
        </svg>
      ),
    },
  ];
  return (
    <div className="h-full w-full flex flex-col font-secondary">
      <aside className="h-20">
        <div className="w-full h-20 bg-primary flex justify-center items-center ">
          <h1 className="font-primary text-2xl text-white">chezacash</h1>
        </div>
      </aside>
      <main className="flex-1 flex justify-between flex-col gap-6 px-4 py-10">
        <div className="flex flex-1 flex-col">
          {menu.map((link) => (
            <SidenavLink
              name={link.name}
              url={link.url}
              key={link.name}
              icon={link.icon}
            />
          ))}
          {/* {user.isAdmin && (
            <SidenavLink name="Create Report" url="/create-report" />
          )} */}
        </div>
        <div
          className="flex flex-col bg-primary px-2 py-2 rounded hover:bg-secondary hover:border hover:border-secondary cursor-pointer text-center text-white"
          onClick={handleLogout}
        >
          Logout
        </div>
        <div></div>
      </main>
    </div>
  );
};

export default index;
