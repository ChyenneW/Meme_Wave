import { BsEnvelopePaperHeart } from "react-icons/bs";

export default function ContactGreeting() {
  return (
    <div className="align-items-center relative left-[13%] grid w-1/3 justify-items-center">
      <div className="mb-2">
        <BsEnvelopePaperHeart className="h-14 w-14" />
      </div>
      <p className="text-2xl">
        Thank you for using my app! If you have any comments, or concerns please
        let me know. I appreciate your feedback and would love to hear from you.
      </p>
    </div>
  );
}
