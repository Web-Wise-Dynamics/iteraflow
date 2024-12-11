'use client';
import { AlertCircle, AlertOctagon, AlertTriangle, Briefcase, ChevronDown, ChevronUp, HomeIcon, Layers3, LockIcon, Search, Settings, ShieldAlert, User, Users, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react"
import { SidebarLink } from "./SidebarLink";
import { useAppDispatch, useAppSelector } from "@/app/utils/redux";
import { setIsSidebarCollapsed } from "@/state";
const Sidebar = () => {
    const [showProjects, setShowProjects] = useState(true)
    const [showPriorities, setShowPriorities] = useState(true)
    const dispatch = useAppDispatch();
    const isSidebarCollapsed = useAppSelector( state => state.global.isSidebarCollapsed)

    const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transition-all duration-300 ease-in-out h-full z-40 dark:bg-black overflow-y-auto bg-white ${isSidebarCollapsed ? 'w-0 hidden' : 'w-64'}` 
    return (
        <div className={sidebarClassNames}>
            <div className="flex h-[100%] w-full flex-col justify-start">
                {/* Logo */}
                <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3 dark:bg-black">
                    <div className="text-xl font-bold text-gray-800 dark:text-white">
                        IteraFlow
                    </div>
                    {!isSidebarCollapsed && (
                        <button className="py-3" onClick={() => {dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}}>
                            <X className="h-6 w-6 cursor-pointer text-gray-800 hover:text-gray-500 dark:text-white" />
                        </button>
                    )}
                </div>
                {/* Team */}
                <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-8 py-4 dark:border-gray-700">
                    <Image src="/logo.webp" alt="logo" width={40} height={40} />
                    <div>
                        <h3 className="text-md font-bold tracking-wide dark:text-gray-200">
                            TEAM WORK
                        </h3>
                        <div className="mt-1 flex items-start gap-2">
                            <LockIcon className="mt-[0.1rem] h-3 w-3 text-gray-500 dark:text-gray-400"/>
                            <p className="text-xs text-gray-500">Private</p> 
                        </div>
                    </div>
                </div>
                {/* NAVBAR LINKS */}
                <nav className="z-10 w-full">
                    <SidebarLink href="/" icon={HomeIcon} label="Home" isCollapsed={false} />
                    <SidebarLink href="/timeline" icon={Briefcase} label="Timeline" isCollapsed={false} />
                    <SidebarLink href="/search" icon={Search} label="Search" isCollapsed={false} />
                    <SidebarLink href="/user" icon={User} label="User" isCollapsed={false} />
                    <SidebarLink href="/users" icon={Users} label="Users" isCollapsed={false} />
                    <SidebarLink href="/settings" icon={Settings} label="Settings" isCollapsed={false} />
                </nav>
                {/* PROJECTS*/}
                <button
                    onClick={() => setShowProjects((prev) => !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                >
                    <span className="">Projects</span>
                    {
                        showProjects 
                        ? (<ChevronUp className="h-5 w-5" />) 
                        : (<ChevronDown className="h-5 w-5" />)
                    }
                </button>
                { /** PROJECTS LIST */}


                {/* PRIORITIES*/}
                <button
                    onClick={() => setShowPriorities((prev) => !prev)}
                    className="flex w-full items-center justify-between px-8 py-3 text-gray-500"
                >
                    <span className="">Priorities</span>
                    {
                        showPriorities
                        ? (<ChevronUp className="h-5 w-5" />) 
                        : (<ChevronDown className="h-5 w-5" />)
                    }
                </button>
                { /** PRIORITIES LIST */}
                {
                    showPriorities && (
                        <>
                            <SidebarLink href="/priorities/urgent" icon={AlertCircle} label="Urgent" isCollapsed={false} />
                            <SidebarLink href="/priorities/high" icon={ShieldAlert} label="High" isCollapsed={false} />
                            <SidebarLink href="/priorities/medium" icon={AlertTriangle} label="Medium" isCollapsed={false} />
                            <SidebarLink href="/priorities/low" icon={AlertOctagon} label="Low" isCollapsed={false} />
                            <SidebarLink href="/priorities/backlog" icon={Layers3} label="Backlog" isCollapsed={false} />
                        </>
                )} 
            </div>
        </div>
    )
}

export default Sidebar