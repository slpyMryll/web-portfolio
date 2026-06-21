"use client";
type SocialLinkProps = {
  className?: string;
};
export default function socialLink({ className }: SocialLinkProps) {
  return (
    <div className={` gap-5 order-3 ${className || ""}`} >

            <a
              href="https://www.facebook.com/slpymryl/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center bg-foreground rounded-sm duration-300 transition-transform hover:scale-125"
            >
              <i className="ri-facebook-circle-line text-background text-lg"></i>
            </a>

            <a
              href="https://github.com/slpyMryll"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center bg-foreground duration-300 rounded-sm transition-transform hover:scale-125"
            >
              <i className="ri-github-line text-background text-lg"></i>
            </a>

            <a
              href="https://www.linkedin.com/in/marylle-laguna-65b25334b/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex items-center justify-center bg-foreground duration-300 rounded-sm transition-transform hover:scale-125"
            >
              <i className="ri-linkedin-box-line text-background text-lg"></i>
            </a>

          </div>

  );
}