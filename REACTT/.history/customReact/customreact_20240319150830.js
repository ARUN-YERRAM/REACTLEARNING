function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttributes('target',reactElement)
}

const reactElement = {
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },          
    children : 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement,mainContainer)

