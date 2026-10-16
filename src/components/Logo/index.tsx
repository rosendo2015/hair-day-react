import LogoImage from "../../assets/images/logo.svg?react";
export default function Logo() {
  return (
    <div className="py-[10px] px-[12px] w-[139px] rounded-br-3xl flex items-center justify-center bg-[var(--gray-600)]">
      <LogoImage />
    </div>
  );
}
