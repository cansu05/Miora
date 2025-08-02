import Link from "next/link";

const InfoBox = ({
  heading,
  backgroundColor = "bg-[#e97611be]",
  textColor = "text-white",
  buttonInfo,
  children,
}) => {
  return (
    <div className={`${backgroundColor} p-6 rounded-lg shadow-md ${textColor}`}>
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href="/properties"
        className={`inline-block ${buttonInfo.backgroundColor} ${buttonInfo.textColor} rounded-lg px-4 py-2`}
      >
        {buttonInfo.text}
      </Link>
    </div>
  );
};
export default InfoBox;
