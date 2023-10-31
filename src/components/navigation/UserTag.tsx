import { signIn, signOut, useSession } from "next-auth/react";
import { VscSignIn, VscSignOut } from "react-icons/vsc";

import { IconHoverEffect } from "../IconHoverEffect";
import { ProfilePicture } from "../ProfilePicture";

export function UserTag({ navLinkTitles }) {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="mb-2 flex justify-items-center gap-4 rounded-md border-2 p-2 transition duration-700 ease-in-out">
      <div
        className={`transition duration-700 ease-in-out ${
          navLinkTitles ? "" : "hidden"
        }`}
      >
        <ProfilePicture src={session.data?.user.image} />
      </div>

      {user == null ? (
        <div
          className={`transition duration-700 ease-in-out ${
            navLinkTitles ? "" : "hidden"
          }`}
        >
          <div>Hello, Guest!</div>
          <small>Please sign in!</small>
        </div>
      ) : (
        <div className="transition duration-700 ease-in-out">
          Hello, `${user.name}`!
        </div>
      )}

      {user == null ? (
        <div className="transition duration-700 ease-in-out">
          <button onClick={() => void signIn()}>
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscSignIn className="h-8 w-8 fill-green-700" />
              </span>
            </IconHoverEffect>
          </button>
        </div>
      ) : (
        <div className="transition duration-700 ease-in-out">
          <button onClick={() => void signOut()}>
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscSignOut className="h-8 w-8 fill-green-700" />
              </span>
            </IconHoverEffect>
          </button>
        </div>
      )}
    </div>
  );
}
