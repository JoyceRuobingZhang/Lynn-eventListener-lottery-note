const winnerArray = [{
        name: "Shelby",
        winner: false
    },
    {
        name: "Bob",
        winner: true
    },
    {
        name: "Becky",
        winner: true
    },
    {
        name: "Rob",
        winner: false
    }
]
document.addEventListener(
    "click",
    (event) => {
        if (event.target.id.startsWith("won")) {

            const name = event.target.id.split("--")[1]
                // or const [, name] = event.target.id.split("--")

            window.alert(`Congtats ${name}! You won`)
                /* ❗️❗️❗️ just doing
                window.alert(`Congtats ${winnerArray[index].name}! You won!`) without line23 (or line24)
                would not work, because in that way the window alert would always alert the index you're puting in this code.
                So it would not match what the users would be clicking in the future.

                So we need line23 (or line24) to 💛capture what the user is clicking💛, 
                and then get the correct name from spliting the id 💛(because we know the id contains the name we want) of what the user is clicking.
                ❗️❗️❗️*/


        } else if (event.target.id.startsWith("lost")) {
            window.alert("Sorry, try again.")
        }
    }
)
export const Winners = () => {
    let html = "<ul>"
    for (const winner of winnerArray) {
        if (winner.winner) {
            html += `<li id="won--${winner.name}">${winner.name} is a winner!</li>`
        } else {
            html += `<li id="lost--${winner.name}">${winner.name} is lost.</li>`
        }
    }
    html += "</ul>"
    return html
}