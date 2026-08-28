import { Trans } from "@lingui/react/macro";

/** Short path when computers are off (none) or Docker is misconfigured. */
export function ComputersUnavailableHint({ className }: { className?: string }) {
  return (
    <p data-testid="computers-unavailable-hint" className={className}>
      <Trans>
        Computers are off. Set SANDBOX_PROVIDER=docker and SANDBOX_SUPERVISOR_TOKEN in .env, or add
        an E2B, Daytona, or Box API key. Recreate the stack after changing .env.
      </Trans>
    </p>
  );
}

export function computersAreUnavailable(sandboxProvider: string | null | undefined) {
  return sandboxProvider === "none" || sandboxProvider === "";
}
