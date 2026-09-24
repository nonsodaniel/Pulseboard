"use client";
import { useState, useRef, useEffect } from "react";
import { Search, Bell, ChevronDown, Zap } from "lucide-react";
import { notificationsData } from "@/lib/data";

interface HeaderProps {
  breadcrumb: string;
}

export default function Header({ breadcrumb }: HeaderProps) {
  const [notifOpen, setNotifOpen] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const notifRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);
  const [notifications, setNotifications] = useState(notificationsData);

  const unreadCount = notifications.length;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (notifRef.current && !notifRef.current.contains(e.target as Node)) {
        setNotifOpen(false);
      }
      if (userRef.current && !userRef.current.contains(e.target as Node)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  function markAllRead() {
    setNotifications((n) => n.map((item) => ({ ...item, read: true })));
  }

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-4 md:px-6 flex-shrink-0">
      {/* Left */}
      <div className="flex items-center gap-2">
        {/* Mobile: logo mark */}
        <div className="flex items-center gap-1.5 md:hidden">
          <Zap className="w-4 h-4 text-blue-600" />
          <span className="text-sm font-semibold text-gray-900">PulseBoard</span>
        </div>
        {/* Desktop: breadcrumb */}
        <nav className="text-sm text-gray-500 hidden md:flex items-center gap-1">
          <span>Home</span>
          <span>/</span>
          <span className="text-gray-900 font-medium">{breadcrumb}</span>
        </nav>
      </div>

      {/* Right */}
      <div className="flex items-center gap-2">
        {/* Search - desktop only */}
        <div className="relative hidden md:block">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-4 py-1.5 text-sm border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-56"
          />
        </div>

        {/* Notifications */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setNotifOpen((v) => !v)}
            className="relative p-2 rounded-md text-gray-500 hover:bg-gray-100"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {notifOpen && (
            <div className="absolute right-0 top-full mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
                <span className="text-sm font-semibold text-gray-900">Notifications</span>
                <button
                  onClick={markAllRead}
                  className="text-xs text-blue-600 hover:underline"
                >
                  Mark all as read
                </button>
              </div>
              <div className="max-h-80 overflow-y-auto divide-y divide-gray-50">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`px-4 py-3 flex gap-3 ${!n.read ? "bg-blue-50" : ""}`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                        !n.read ? "bg-blue-600" : "bg-gray-300"
                      }`}
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900">{n.title}</p>
                      <p className="text-xs text-gray-500">{n.message}</p>
                      <p className="text-xs text-gray-400 mt-0.5">{n.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* User menu */}
        <div className="relative" ref={userRef}>
          <button
            onClick={() => setUserOpen((v) => !v)}
            className="flex items-center gap-2 p-1.5 rounded-md hover:bg-gray-100"
          >
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-medium">
              N
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500 hidden md:block" />
          </button>
          {userOpen && (
            <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Profile</a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Billing</a>
              <hr className="my-1 border-gray-100" />
              <a href="#" className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-50">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
