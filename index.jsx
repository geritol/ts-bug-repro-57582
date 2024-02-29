import React from "react"

export class A extends React.Component {
    state = { a: { b: null } }

    repro() {
        const b = this.state.a.b
        let file;
        if (b === null) {

        } else {
            [file] = b // remove [] to make tsc work!
        }
        this.otherFn(file)
    }
}
