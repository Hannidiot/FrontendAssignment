export default function CompletePage() {
  return (
    <div className="flex grow flex-col items-center justify-center py-14 md:p-0">
      <img
        src="icon-thank-you.svg"
        alt="thank-you-icon"
        className="m-5 w-14 md:w-20"
      />

      <h1>Thank you!</h1>

      <p className="mx-3 mt-3 text-pretty text-center md:text-lg md:tracking-wide">
        Thanks for your registration! We hope you have fun using our platform.
      </p>
    </div>
  );
}
