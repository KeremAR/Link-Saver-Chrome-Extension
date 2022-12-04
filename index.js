let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")



if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

tabBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems
}



deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function() {
    let str = inputEl.value
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) != ' ' && (str.charAt(i) == 'a' || str.charAt(i) == 'e' || str.charAt(i) == 'i' || str.charAt(i) == 'o' || str.charAt(i) == 'u' || str.charAt(i) == 'A' || str.charAt(i) == 'E' || str.charAt(i) == 'I' || str.charAt(i) == 'O' || str.charAt(i) == 'U' || str.charAt(i) == 'b' || str.charAt(i) == 'B' || str.charAt(i) == 'c' || str.charAt(i) == 'C' || str.charAt(i) == 'd' || str.charAt(i) == 'D' || str.charAt(i) == 'f' || str.charAt(i) == 'F' || str.charAt(i) == 'g' || str.charAt(i) == 'G' || str.charAt(i) == 'h' || str.charAt(i) == 'H' || str.charAt(i) == 'j' || str.charAt(i) == 'J' || str.charAt(i) == 'k' || str.charAt(i) == 'K' || str.charAt(i) == 'l' || str.charAt(i) == 'L' || str.charAt(i) == 'm' || str.charAt(i) == 'M' || str.charAt(i) == 'n' || str.charAt(i) == 'N' || str.charAt(i) == 'p' || str.charAt(i) == 'P' || str.charAt(i) == 'r' || str.charAt(i) == 'R' || str.charAt(i) == 's' || str.charAt(i) == 'S' || str.charAt(i) == 't' || str.charAt(i) == 'T' || str.charAt(i) == 'v' || str.charAt(i) == 'V' || str.charAt(i) == 'y' || str.charAt(i) == 'Y' || str.charAt(i) == 'w' || str.charAt(i) == 'W' || str.charAt(i) == 'x' || str.charAt(i) == 'X' || str.charAt(i) == 'z' || str.charAt(i) == 'Z' || str.charAt(i) == 'q' || str.charAt(i) == 'Q' || str.charAt(i) == '1' || str.charAt(i) == '2' || str.charAt(i) == '3' || str.charAt(i) == '4' || str.charAt(i) == '5' || str.charAt(i) == '6' || str.charAt(i) == '7' || str.charAt(i) == '8' || str.charAt(i) == '9' || str.charAt(i) == '0' || str.charAt(i) == '/' || str.charAt(i) == '?' || str.charAt(i) == '.' || str.charAt(i) == ',' || str.charAt(i) == '-' || str.charAt(i) == '_' || str.charAt(i) == '+' || str.charAt(i) == '=' || str.charAt(i) == ';' || str.charAt(i) == '#' || str.charAt(i) == '^' || str.charAt(i) == '%' || str.charAt(i) == '&' || str.charAt(i) == ':')) {
            newStr += str.charAt(i);
        }

    }
    if ((newStr.substring(0, 8)) !== "https://") {
        newStr = "https://" + newStr
    }
    myLeads.push(newStr)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})