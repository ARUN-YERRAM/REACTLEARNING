function customRender(reactElement,container){
    /*
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttributes('target',reactElement.props.target)

    container.appendChild(domElement)
} */
document.create
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
