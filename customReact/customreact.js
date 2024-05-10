const customRender = (el, cnt) => {
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.href)
    // domElement.setAttribute('target', reactElement.props.target)
    // container.appendChild(domElement)
    const domElement = document.createElement(el.type)
    domElement.innerHTML = el.children
    for (const prop in el.props) {
        if (prop === 'children') continue 
        domElement.setAttribute(prop, el.props[prop])
    }
    cnt.appendChild(domElement)

}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank',

    },
    children: 'Click me to visit Google'
}

const mainContainer = document.getElementById('root')
customRender(reactElement, mainContainer)
