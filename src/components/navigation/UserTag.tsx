import { signIn, signOut, useSession } from "next-auth/react";
import { VscSignIn, VscSignOut } from "react-icons/vsc";

import { IconHoverEffect } from "../IconHoverEffect";
import { ProfilePicture } from "../ProfilePicture";

export function UserTag() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <div className="mb-2 flex items-center gap-4 rounded-md border-2 p-2">
      <ProfilePicture src={session.data?.user.image} />

      {user == null ? (
        <div>
          <div>Hello, Guest!</div>
          <small>Please signin!</small>
        </div>
      ) : (
        <div>Hello, `${user.name}`!</div>
      )}

      {user == null ? (
        <div>
          <button onClick={() => void signIn()}>
            <IconHoverEffect>
              <span className="flex items-center gap-4">
                <VscSignIn className="h-8 w-8 fill-green-700" />
              </span>
            </IconHoverEffect>
          </button>
        </div>
      ) : (
        <div>
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
