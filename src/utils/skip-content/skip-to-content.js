export function SkipContent({ skipTo, trigger }) {
  if (trigger === undefined) {
    throw new Error("trigger button must be provided")
  }
  if (!skipTo) {
    trigger.addEventListener("click", () => {
      document.querySelector("main:first-of-type").setAttribute("tabIndex", 0);
      document.querySelector("main:first-of-type").focus();
    });
  } else {
    trigger.addEventListener("click", () => {
      skipTo.setAttribute("tabIndex", 0);
      skipTo.focus();
    });
  }
}
