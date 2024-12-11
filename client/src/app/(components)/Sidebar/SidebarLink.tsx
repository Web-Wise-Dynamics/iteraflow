import { useAppDispatch, useAppSelector } from "@/app/utils/redux";
import { LucideIcon } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation"

interface SidebarLinkProps{
    href: string,
    icon: LucideIcon,
    label: string,
    isCollapsed: boolean
}

export const SidebarLink = ({
    href,
    icon:Icon,
    label, 
} : SidebarLinkProps ) => {
    const pathname = usePathname();
    const isActive = pathname === href || (pathname === "/") && href === "dashboard";
    const screenWidth = window.innerWidth;

    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector( state => state.global.isSidebarCollapsed)

    return ( 
        <Link href={href} className="w-full">
            <div className={`relative flex cursor-pointer items-center gap-3 transition-colors hover:bg-gray-100 dark:bg-black dark:hover:bg-gray-700 justify-start px-8 py-3 ${isActive ? "bg-gray-100 dark:bg-gray-700 text-white" : ""}`}>
                { isActive && (
                        <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200"></div>
                )}
                <Icon className="h-6 w-6 text-gray-800 dark:text-gray-100" />
                <span className="font-medium text-gray-800 dark:text-gray-100">
                    {label}
                </span>
            </div>
        </Link>
    )
}