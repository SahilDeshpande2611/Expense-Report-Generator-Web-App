document.addEventListener("DOMContentLoaded", function () {
    const expenseTable = document.getElementById("expenseTable");
    const addExpenseLink = document.getElementById("addExpense");
    const totalAmountCell = document.getElementById("totalAmount");

    // Add Expense Row Dynamically
    addExpenseLink.addEventListener("click", function (event) {
        event.preventDefault();

        const newRow = expenseTable.insertRow(expenseTable.rows.length - 1);
        newRow.innerHTML = `
            <td data-label="Date"><input type="date" name="Expense_Date" value="2025-12-25"></td>
            <td data-label="Expense Description"><textarea name="Expense_Description" placeholder="Expense Description" rows="2" cols="40"></textarea></td>
            <td data-label="Category">
              <select name="Category" style="width: 150px; height: 30px; font-size: 14px; background-color: #f9f9f9; border: 1px solid #ccc; border-radius: 4px; padding: 5px; cursor: pointer;">
                <option value="" disabled selected>Select Category</option>
                <option value="Travel">Travel</option>
                <option value="Food">Food</option>
              </select>
            </td>
            <td data-label="Amount"><input type="number" name="Amount" class="amount-input" placeholder="0.00" required></td>
            <td><button class="remove-btn">Remove</button></td>
        `;
    });

    // Upload Logo and Display Preview
    document.getElementById("logoUpload").addEventListener("change", function (event) {
        const file = event.target.files[0];
        const reader = new FileReader();

         if (file) {
                reader.onload = function (e) {
                // Set the source of the logo preview
                document.getElementById("logoPreview").src = e.target.result;
            };
        reader.readAsDataURL(file);
        }
    });


    // Update Total Amount
    function updateTotal() {
        let total = 0.0;
        const amounts = expenseTable.querySelectorAll(".amount-input");
        amounts.forEach((input) => {
            total += parseFloat(input.value) || 0;
        });
        totalAmountCell.textContent = total.toFixed(2);
    }

    expenseTable.addEventListener("input", function (event) {
        if (event.target.classList.contains("amount-input")) {
            updateTotal();
        }
    });

    expenseTable.addEventListener("click", function (event) {
        if (event.target.classList.contains("remove-btn")) {
            event.target.closest("tr").remove();
            updateTotal();
        }
    });

    // Generate PDF with Full Content Visibility
    document.getElementById("download").addEventListener("click", function () {
        const { jsPDF } = window.jspdf;

        const container = document.querySelector(".container");
        const scale = 2;

        html2canvas(container, {
            scale: scale,
            useCORS: true, 
            scrollY: 0,
            logging: true, 
        }).then((canvas) => {
            const pdf = new jsPDF({
                orientation: "portrait",
                unit: "px",
                format: [canvas.width, canvas.height], 
            });
            const imgData = canvas.toDataURL("image/png");
            pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
            pdf.save("expense_report.pdf");
        });
    });
});
