import { useSession } from "next-auth/react";

export default function ContactForm() {
  const session = useSession();
  const user = session.data?.user;

  return (
    <form className="align-items-center relative left-[5%] mb-4 grid w-2/3 justify-items-center">
      <h2 className="mb-2 mt-4 text-4xl">Contact Us!</h2>
      <div className="mb-2">
        {user == null ? (
          <input
            type="text"
            placeholder="Your Name"
            className="w-[150%] flex-grow resize-none overflow-hidden rounded-md bg-slate-200 p-4 text-lg outline-none"
          />
        ) : (
          <div>{user?.name}</div>
        )}
      </div>
      <div className="mb-2">
        {user == null ? (
          <input
            type="text"
            placeholder="Your Email"
            className="w-[150%] flex-grow resize-none overflow-hidden rounded-md bg-slate-200 p-4 text-lg outline-none"
          />
        ) : (
          <div>{user?.name}</div>
        )}
      </div>
      <div className="mb-2">
        <input
          type="text"
          placeholder="Message"
          className="w-[150%] flex-grow resize-none overflow-hidden rounded-md bg-slate-200 p-4 text-lg outline-none"
        />
      </div>
    </form>
  );
}
