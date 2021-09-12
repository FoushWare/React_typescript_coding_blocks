import component from './component';
// styles
import './styles/style.css'
//logo
import logo from './images/logo.svg'
const img = document.createElement('img')
img.src = logo
document.body.appendChild(img)
document.body.appendChild(component())