import SocialLink from "./socialLink";

export default function Footer() {
  return (
    <footer className="w-full border-t border-gray-700 bg-[#151515] text-background dark:text-foreground pt-9">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* LEFT - Name */}
        <div className="text-center md:text-left">
          <h2 className="font-bold text-lg">SlpyMryll</h2>
          <p className="text-sm text-background/70 dark:text-foreground">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <SocialLink className="flex flex-row" />

      </div>
    </footer>
  );
}