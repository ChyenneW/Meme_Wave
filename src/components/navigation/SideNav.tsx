import { useEffect, useState } from "react";
import Link from "next/link";
import {
  VscAccount,
  VscCommentDiscussion,
  VscExtensions,
  VscGraph,
  VscMenu,
  VscClose,
} from "react-icons/vsc";

import { IconHoverEffect } from "../IconHoverEffect";
import { UserTag } from "./UserTag";

export function SideNav() {
  const [menuStateOpen, setMenuState] = useState(true);
  const [navLinkTitles, setLinkTitles] = useState(true);

  useEffect(() => {}, []);

  const toggleMenu = () => {
    setMenuState(!menuStateOpen);
    setLinkTitles(!navLinkTitles);
  };

  return (
    <nav className="flex flex-col rounded-md border-2 p-1">
      <div
        className={`mb-16 grid justify-items-end ${menuStateOpen ? true : ""}`}
        onClick={toggleMenu}
      >
        {menuStateOpen == false ? (
          <button className="transition duration-700 ease-in-out">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscMenu className="h-6 w-6" />
              </span>
            </IconHoverEffect>
          </button>
        ) : (
          <button className="transition duration-700 ease-in-out">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscClose className="h-6 w-6" />
              </span>
            </IconHoverEffect>
          </button>
        )}
      </div>

      <ul className="my-5 grid justify-items-center">
        <li className="mb-2 transition duration-700 ease-in-out">
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscAccount className="h-8 w-8" />
                <span
                  className={`text-3xl ${navLinkTitles ? "sm:flex" : "hidden"}`}
                >
                  PROFILE
                </span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        <li className="mb-2 transition duration-700 ease-in-out">
          <Link href="/dashboard">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscExtensions className="h-8 w-8" />
                <span
                  className={`text-3xl ${navLinkTitles ? "sm:flex" : "hidden"}`}
                >
                  DASHBOARD
                </span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        <li className="mb-2 transition duration-700 ease-in-out">
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscGraph className="h-8 w-8" />
                <span
                  className={`text-3xl ${navLinkTitles ? "sm:flex" : "hidden"}`}
                >
                  ACTIVITY
                </span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
        <li className="mb-16 transition duration-700 ease-in-out">
          <Link href="/">
            <IconHoverEffect>
              <span className="flex items-center gap-2">
                <VscCommentDiscussion className="h-8 w-8" />
                <span
                  className={`text-3xl ${navLinkTitles ? "sm:flex" : "hidden"}`}
                >
                  REPORT
                </span>
              </span>
            </IconHoverEffect>
          </Link>
        </li>
      </ul>
      <div className="mb-2 flex items-center gap-4 rounded-md border-2 p-2 transition duration-700 ease-in-out">
        Light/Dark
      </div>
      <UserTag navLinkTitles={navLinkTitles} />
    </nav>
  );
}
