var inventory = [
    [4824, "Shirt", 10, 15.99],
    [6343, "Jeans", 22, 39.99],
    [3223, "Socks", 36, 9.99],
    [2233, "Hat", 12, 14.99],
    [9382, "Jacket", 5, 49.99]
];

function displayMenu() {
    document.write("Inventory Management System<br>");
    document.write("1. View all products<br>");
    document.write("2. Update an existing product’s inventory<br>");
    document.write("3. Exit<br><br>");
}

function viewAllProducts() {
    inventory.sort((a, b) => a[0] - b[0]);
    for (var i = 0; i < inventory.length; i++) {
        document.write(inventory[i][0] + " " + inventory[i][1] + " (" + inventory[i][2] + ") $" + inventory[i][3] + "<br>");
    }
}

function updateProductInventory() {
    var sku = parseInt(prompt("Enter SKU number of the product you want to update:"));
    var quantity = parseInt(prompt("Enter the new stock quantity:"));

    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] === sku) {
            inventory[i][2] = quantity;
            document.write("Product updated successfully!<br>");
            viewAllProducts();
            return;
        }
    }
    document.write("Product not found!<br>");
}

function main() {
    var command;
    do {
        displayMenu();
        command = parseInt(prompt("Enter your command:"));

        switch (command) {
            case 1:
                viewAllProducts();
                break;
            case 2:
                updateProductInventory();
                break;
            case 3:
                document.write("Exiting program...<br>");
                break;
            default:
                document.write("Invalid command! Please enter a valid command.<br>");
        }
    } while (command !== 3);
}

main();