function customRender(reactElement,container){
    const domElement = document.createElement
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    
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

