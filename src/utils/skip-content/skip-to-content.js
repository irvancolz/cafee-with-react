export function SkipContent({ skipTo, trigger }) {
  if (trigger === undefined) {
    throw new Error("trigger button must be provided");
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

export const skipContent = {
  init({ trigger, skipTo }) {
    this._trigger = trigger;
    this._target = skipTo;

    if (!this._trigger) {
      throw new Error("trigger button must be provided");
    }

    this._trigger.addEventListener("click", () => {
      console.log("button clicked")
      this._handleClick();
    });
  },

  _handleClick() {
    if (!this._target) {
      document.querySelector("main:first-of-type").setAttribute("tabIndex", 0);
      document.querySelector("main:first-of-type").focus();
      return;
    }
    this._target.setAttribute("tabIndex", 0);
    this._target.focus();
  },
};
