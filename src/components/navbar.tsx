import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="mt-10 mx-60 bg-white rounded-[200px]">
      <div className="p-5 flex items-center justify-between ">
        <div>
          <Image src="/logo.svg" alt="Logo" width={106.94} height={34} />
        </div>
        <div>
          <ul className="flex items-center gap-10  text-[#8C97A8] font-general-sans font-medium text-base leading-none tracking-[0%]">
            <li>How it Works</li>
            <li>Pricing</li>
            <li>Use Case</li>
            <li>FAQ</li>
          </ul>
        </div>
        <button className="bg-primary py-2.75 px-4.5 rounded-[43.62px] text-white font-medium text-base leading-[1.2] tracking-[-2%] font-general-sans">
          Contact Sales
        </button>
      </div>
    </nav>
  );
};
