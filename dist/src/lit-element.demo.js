import { __decorate } from "tslib";
import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
let LitElementDemo = class LitElementDemo extends LitElement {
    constructor() {
        super(...arguments);
        /**
         * The name to say "Hello" to.
         */
        this.name = "World";
        /**
         * The number of times the button has been clicked.
         */
        this.count = 0;
    }
    // static get styles(): CSSResult {
    //   return lit-this.elementProperties.demo.scss;
    // }
    static get styles() {
        return css `
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
    render() {
        return html `
      <div class="demo">
        <h1>${this.sayHello(this.name)}!</h1>
        <button @click=${this._onClick} part="button">
          Click Count: ${this.count}
        </button>
        <slot></slot>
      </div>
    `;
    }
    _onClick() {
        this.count++;
        console.log("Event fired");
        this.dispatchEvent(new CustomEvent("count-changed", { detail: this.count }));
    }
    /**
     * Formats a greeting
     * @param name The name to say "Hello" to
     */
    sayHello(name) {
        return `Hello, ${name}`;
    }
};
__decorate([
    property()
], LitElementDemo.prototype, "name", void 0);
__decorate([
    property({ type: Number })
], LitElementDemo.prototype, "count", void 0);
LitElementDemo = __decorate([
    customElement("lit-element-demo")
], LitElementDemo);
export { LitElementDemo };
//# sourceMappingURL=lit-element.demo.js.map