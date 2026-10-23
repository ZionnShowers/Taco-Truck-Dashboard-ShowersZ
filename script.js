/* Things to ask about:
1.) items being crossed out after pressing sold button (or near the text)
2.) deleted items reappear after creating new ones
*/


// ----- data -----
const menu = [
    // { itemName: dummy, itemDesc: blank }
]

let numSold = 0;

// ----- elements -----
const statusLine = document.getElementById("status");
const openButton = document.getElementById("open-button")

const LocationBtn = document.getElementById("postLoc-btn");
const CurrentLoc = document.getElementById("cur-location");
const LocationName = document.getElementById("loc-name");

const PostItemBtn = document.getElementById("postItem-btn");
const prepList = document.getElementById("prep-list");
const itemName = document.getElementById("item-name")
const itemDesc = document.getElementById("item-desc")
const amountSold = document.getElementById("amount-sold")

const endDayBtn = document.getElementById("end-day-button")

// ----- functions -----

// if (menu.length === 0) {
//     const empty = document.createElement("li");
//     empty.textContent = "No items available"
//     empty.classList.add("empty");
//     prepList.appendChild(empty);
// }

function NoItemsMessage() {
    
    if (menu.length === 0) {
        prepList.replaceChildren();
        const empty = document.createElement("li");
        empty.textContent = "No items available"
        empty.classList.add("empty");
        prepList.appendChild(empty);
        return;
    }
}

function Post() {
    prepList.replaceChildren();
    
    NoItemsMessage()
    // if (menu.length === 0) {
    //     const empty = document.createElement("li");
    //     empty.textContent = "No items available"
    //     empty.classList.add("empty");
    //     prepList.appendChild(empty);
    //     return;
    // }

    menu.forEach(function (menuItem) {

        //Creating item
        const item = document.createElement("li");
        const clickable = document.createElement("p");
        clickable.textContent = menuItem.itemName + ": " + menuItem.itemDesc;
        // console.log(item.textContent)
        //Create Remove Item Button
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-button");
        //Removing Item
        removeButton.addEventListener("click", function () {
            item.remove(); //remove from list
            let itemDelete = menu.indexOf(menuItem) //remove from array
            menu.splice(itemDelete, 1)
            NoItemsMessage()
        });

        //Create Sold Item Button
        const soldButton = document.createElement("button");
        soldButton.textContent = "Sold";
        soldButton.classList.add("sold-button");
        //Adding to sold counter
        soldButton.addEventListener("click", function () {
            numSold += 1;
            amountSold.textContent = "Items sold: " + numSold;
        });

        //Sold out option
        clickable.addEventListener("click", function () {
            clickable.classList.toggle("sold-out");
        });

        // //Adding to list
        item.appendChild(clickable);
        item.appendChild(removeButton);
        item.appendChild(soldButton);
        prepList.appendChild(item);
        // prepList.appendChild(item);
    })
};
// ----- listeners -----

//Change sign to open or close
openButton.addEventListener("click", function () {
    if (statusLine.textContent == "Closed") {
        statusLine.textContent = "Open";
        statusLine.classList.add("open");
        statusLine.classList.remove("closed");
        openButton.textContent = "Close the truck";
    }
    else if (statusLine.textContent == "Open") {
        statusLine.textContent = "Closed";
        statusLine.classList.remove("open");
        statusLine.classList.add("closed");
        openButton.textContent = "Open the truck";
    }


});

//Change location
LocationBtn.addEventListener("click", function () {
    if (LocationName.value === "") {
        return;
    }
    CurrentLoc.textContent = "Current location: " + LocationName.value;
});

endDayBtn.addEventListener("click", function () {
    numSold = 0;
    amountSold.textContent = "Items sold: " + numSold;
    statusLine.textContent = "Closed";
    statusLine.classList.remove("open");
    statusLine.classList.add("closed");
    openButton.textContent = "Open the truck";
    CurrentLoc.textContent = "Current location: Unknown";
});

//
PostItemBtn.addEventListener("click", function () {


    if (itemName.value === "" || itemDesc.value === "") {
        console.log("failure: No name or description");
        return
    }


    // //Creating item
    // const item = document.createElement("li");
    // item.textContent = itemName.value + ": " + itemDesc.value;
    // console.log(item.textContent)
    // //Create Remove Item Button
    // const removeButton = document.createElement("button");
    // removeButton.textContent = "Remove";
    // removeButton.classList.add("remove-button");
    // //Removing Item
    // removeButton.addEventListener("click", function () {
    //     item.remove();
    // });

    // //Adding to list
    // item.appendChild(removeButton);
    // prepList.appendChild(item);
    // // prepList.appendChild(item);

    menu.push({
        itemName: itemName.value,
        itemDesc: itemDesc.value,
    })

    Post();
    // NoItemsMessage()

    console.log(menu)
    console.log("---")

    //Change text boxes to blank after submit
    itemName.value = "";
    itemDesc.value = "";


    //Disable button after clicked
    // PostItemBtn.disabled = true;

    // if(itemName.value != "" && itemDesc.value != "")
    //     PostItemBtn.disabled = false;


});



// ----- run at load -----
Post();
NoItemsMessage()

amountSold.textContent = "Items sold: " + numSold;

// PostItemBtn.disabled = true;


// if(itemName.value != "" && itemDesc.value != "")
// {
//     PostItemBtn.disabled = false;
// }