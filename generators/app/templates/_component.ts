import { ComponentWrapper, EntityBuilder } from "aframe-typescript-toolkit"

interface NewComponentSchema {
    readonly color: string
}

export class NewComponent extends ComponentWrapper<NewComponentSchema> {

    constructor() {
        super("new-component", {
            color: {
                type: "string",
                default: "colorless",
            }, 
        })
    }

    init() {
        const entityColor = this.el.getAttribute("color")
        EntityBuilder.create("a-text", {
            id: "color-text",
            value: entityColor || this.data.color,
            color: entityColor || "black",
            position: "-1 1.25 0",
        }).attachTo(this.el)
    }

    tick() {
        
    }
}

new NewComponent().register()