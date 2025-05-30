import type { ReactElement } from "react";

export function SideItems({
  text,
  icon,
}: {
  text: string;
  icon: ReactElement;
}) {
  return (
    <div className="flex text-gray-700 py-2 cursor-pointer hover:bg-gray-200 rounded-lg pl-4 max-w-48 transition-all duration-150">
      
        <div className="pr-4" >{icon}</div>
        <div >{text}</div>
      
    </div>
  );
}
