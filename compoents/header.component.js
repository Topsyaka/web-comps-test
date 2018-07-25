class AppHeader extends HTMLElement {
    constructor() {
        super();

        this.render();
    }

    render() {
        const root = this.createShadowRoot();
        root.innerHTML = `
            <style>
                :host{
                    display: block;
                    width: 100%;
                }

                header{
                    width: 100%;
                    height: 70px;
                    background: #f0f0f0;
                }
            </style>

            <header>
                <content></content>
            </header>
        `;
    }
}

customElements.define('app-header', AppHeader)
