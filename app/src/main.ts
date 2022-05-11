
import 'virtual:windi.css'
import "./style.css";

enum Classes {
    TRANSLATE_X= "-translate-x-full"
}

const body  = document.querySelector("body")

const [sidebarButton, sidebar, closeButton, footerDateTime] = [
    body?.querySelector<HTMLButtonElement>("#sidebar-button"),
    body?.querySelector("#sidebar"),
    body?.querySelector<HTMLButtonElement>("#close-button"),
    body?.querySelector<HTMLTimeElement>("#footer-date-time")
]

if (!sidebarButton || !sidebar|| !closeButton ) {
    
    console.error("There is no sidebar button or sidebar or close button  at all")

} else if (!footerDateTime) {

    console.error("There is no time element for the datetime at all footer at all")

} else {

    const year = new Date().getFullYear()

    const [yearAsString, yearAsLocaleString] = [
        year.toString(),
        year.toLocaleString()
    ]

    sidebarButton.addEventListener("click", () => {
        
        sidebar.classList.remove(Classes.TRANSLATE_X)
    
    
    })

    closeButton.addEventListener("click", () => {
        
        sidebar.classList.add(Classes.TRANSLATE_X)

    })


    footerDateTime.dateTime = yearAsLocaleString
    footerDateTime.textContent = yearAsString



    


}

