# Cash in Drawer - FreeCodeCamp Certification Project 🎓

This project is part of the FreeCodeCamp Certification program, showcasing a **Cash in Drawer** application. The application calculates the correct change due for a purchase based on the cash provided, simulating a cash register functionality.

## Project Screenshot 📸
![Project Screenshot](https://raw.githubusercontent.com/izzel24/Cash-in-Drawer/main/screenshot_project.png)

## Live Demo 🚀
Check out the live demo of the project here: [Cash in Drawer](https://izzel24.github.io/Cash-in-Drawer/)

## How It Works 🔧
1. **Price Display**:  
   The item price is displayed at the top of the application.
2. **Cash Input**:  
   The user inputs the amount of cash provided by the customer.
3. **Change Calculation**:  
   The app calculates the change due and provides a detailed breakdown using available denominations.
4. **Cash Drawer Status**:  
   The application determines the cash drawer's status as:
   - `OPEN`: The drawer remains open with change given.
   - `CLOSED`: The drawer closes when all funds match the change due.
   - `INSUFFICIENT_FUNDS`: There is not enough cash in the drawer to provide change.
   - `EXACT_CASH`: No change is due as the cash provided matches the item's price.
     

## Example Usage ✨
| Cash Provided | Change Status      | Change Breakdown                        |
|---------------|--------------------|-----------------------------------------|
| $20.00        | `OPEN`             | `QUARTER: $0.50`, `PENNY: $0.01`       |
| $19.50        | `EXACT_CASH`       | No change due                           |
| $18.00        | `INSUFFICIENT_FUNDS` | Not enough cash in the drawer           |


