class TestComponent extends HTMLElement {
    constructor() {
        super();
    }

    get open() {
        return this.hasAttribute('open');
    }

    static get observedAttributes() {
        return ['pass-val']
    }

    get formValue() {
        const form = this.shadowRoot.querySelector('#form');
        return {
            name: form.name.value,
            password: form.password.value
        };
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (name === 'pass-val') {
            this.shadowRoot.querySelector('#form').password.value = newValue;
        } 
    } 

    connectedCallback() {
        this.render();
    }

    render() {
        const root = this.createShadowRoot()
        root.innerHTML = `
            <style>
                :host {
                    display: inline-block;
                    background: #f0f0f0;
                    padding: 10px;
                }

                :host div {
                    padding: 10px; 
                }
                p{
                    color: green;
                    margin: 0;
                }
                content{

                }
            </style>
            <div>
                <content></content>
                <form name="login" id="form">
                    <input name="name"/>
                    <input name="password"/>               
                </form>
            </div>
            
        `;
    }
}

customElements.define('test-component', TestComponent);
