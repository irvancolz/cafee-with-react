import { skipContent } from "./skip-to-content";

describe("test skip to content function", () => {
  const createTemplate = () => {
    document.body.innerHTML = `
    <button id="button">
        click me
    </button>
    <main></main>
    <div id="target">
        
    </div>
    `;
  };

  beforeEach(() => {
    createTemplate();
  });

  test("skip content run properly", () => {
    const button = document.getElementById("button");
    const target = document.getElementById("target");

    skipContent.init({
      skipTo: target,
      trigger: button,
    });

    button.dispatchEvent(new Event("click"));
    expect(target).toHaveAttribute("tabIndex", "0");
    expect(target).toHaveFocus();
  });

  test("fallback to main tag if the target element unavailable", () => {
    createTemplate();
    const button = document.getElementById("button");
    const target = document.querySelector("main");

    skipContent.init({
      skipTo: undefined,
      trigger: button,
    });

    button.dispatchEvent(new Event("click"));
    expect(target).toHaveAttribute("tabIndex", "0");
    expect(target).toHaveFocus();
  });

  xtest("fa", () => {
    createTemplate();
    const button = document.getElementById("button");
    const target = document.querySelector("main");

    skipContent.init({
      skipTo: target,
      trigger: undefined,
    });

    button.dispatchEvent(new Event("click"));
    expect(() => {
      skipContent.init({
        skipTo: target,
        trigger: undefined,
      });
    }).toThrow();
  });
});
