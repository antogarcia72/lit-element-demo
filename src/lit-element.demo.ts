import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("lit-element-demo")
export class LitElementDemo extends LitElement {
  // static get styles(): CSSResult {
  //   return lit-this.elementProperties.demo.scss;
  // }
  static get styles() {
    return css`
      :host {
        --demo-background-color: green;
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 800px;
        background-color: var(--themeColor);
      }
    `;
  }

  /**
   * The name to say "Hello" to.
   */
  @property()
  name = "World";

  /**
   * The number of times the button has been clicked.
   */
  @property({ type: Number })
  count = 0;

  override render() {
    return html`
      <div class="demo">
        <h1>${this.sayHello(this.name)}!</h1>
        <button @click=${this._onClick} part="button">
          Click Count: ${this.count}
        </button>
        <slot></slot>
      </div>
    `;
  }

  private _onClick() {
    this.count++;
    this.dispatchEvent(
      new CustomEvent("count-changed", { detail: this.count })
    );
  }
  /**
   * Formats a greeting
   * @param name The name to say "Hello" to
   */
  sayHello(name: string): string {
    return `Hello, ${name}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "lit-element-demo": LitElementDemo;
  }
}
