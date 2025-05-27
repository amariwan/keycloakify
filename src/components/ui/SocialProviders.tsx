import React from "react";

export interface SocialProvidersProps {
  social:
    | {
        displayInfo?: boolean;
        providers?: Array<{
          alias: string;
          loginUrl: string;
          displayName: string;
          iconClasses?: string;
        }>;
      }
    | undefined;
  kcClsx: (...args: any[]) => string;
  clsx: (...args: any[]) => string;
  msg: any;
  realm: {
    password: boolean;
  };
}

export const SocialProviders: React.FC<SocialProvidersProps> = ({
  social,
  clsx,
  msg,
  realm
}) => {
  const providers = social?.providers ?? [];

  if (!realm.password || !providers.length) {
    return null;
  }

  return (
    <div id="kc-social-providers" className="mt-5 space-y-7">
      <h2 className="text-center text-lg mt-7">{msg("identity-provider-login-label")}</h2>
      <div
        className={clsx(
          "text-lg grid gap-2 grid-cols-1",
          providers.length > 1 ? "md:grid-cols-2" : "grid-cols-1"
        )}
      >
        {providers.map((...[p]) => (
          <div
            key={p.alias}
            className=" items-center bg-accent w-full py-1 my-1.5 border rounded-lg px-3 hover:bg-primary hover:text-primary-foreground"
          >
            <a
              id={`social-${p.alias}`}
              className="flex flex-row items-center justify-center w-full py-2"
              href={p.loginUrl}
              type="button"
            >
              {p.iconClasses && <i className={clsx(p.iconClasses)} aria-hidden="true" />}
              <span
                className="mx-3"
                dangerouslySetInnerHTML={{ __html: p.displayName }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProviders;
