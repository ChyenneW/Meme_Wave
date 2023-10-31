import {
  VscAccount,
  VscCommentDiscussion,
  VscExtensions,
  VscGraph,
  VscSignIn,
  VscSignOut,
} from "react-icons/vsc";
import { IconHoverEffect } from "../IconHoverEffect";

export function SideNav() {
  return (
    <nav>
      <ul className="my-5">
        <li className="mb-2">
          <IconHoverEffect>
            <span className="flex items-center gap-2">
              <VscAccount className="h-8 w-8" />
              <span className="text-3xl">PROFILE</span>
            </span>
          </IconHoverEffect>
        </li>
        <li className="mb-2">
          <IconHoverEffect>
            <span className="flex items-center gap-2">
              <VscExtensions className="h-8 w-8" />
              <span className="text-3xl">DASHBOARD</span>
            </span>
          </IconHoverEffect>
        </li>
        <li className="mb-2">
          <IconHoverEffect>
            <span className="flex items-center gap-2">
              <VscGraph className="h-8 w-8" />
              <span className="text-3xl">ACTIVITY</span>
            </span>
          </IconHoverEffect>
        </li>
        <li className="mb-2">
          <IconHoverEffect>
            <span className="flex items-center gap-2">
              <VscCommentDiscussion className="h-8 w-8" />
              <span className="text-3xl">REPORT</span>
            </span>
          </IconHoverEffect>
        </li>
      </ul>
      <div>Light/Dark</div>
      <div>User tag</div>
    </nav>
  );
}
