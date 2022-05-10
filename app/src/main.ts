
import 'virtual:windi.css'
import "./style.css";

enum Classes {
    TRANSLATE_X= "-translate-x-full"
}

const body  = document.querySelector("body")

const [sidebarButton, sidebar, closeButton] = [
    body?.querySelector<HTMLButtonElement>("#sidebar-button"),
    body?.querySelector<HTMLButtonElement>("#sidebar"),
    body?.querySelector<HTMLButtonElement>("#close-button")
]

if (!sidebarButton || !sidebar|| !closeButton) {
    
    console.error("There is no sidebar button or sidebar   at all")

} else {

    

    sidebarButton.addEventListener("click", () => {
        
        sidebar.classList.remove(Classes.TRANSLATE_X)
    
    
    })

    closeButton.addEventListener("click", () => {
        
        sidebar.classList.add(Classes.TRANSLATE_X)

    })

    


}

