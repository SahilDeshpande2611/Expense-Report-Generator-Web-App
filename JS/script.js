document.addEventListener("DOMContentLoaded", function () {
    const expenseTable = document.getElementById("expenseTable");
    const addExpenseLink = document.getElementById("addExpense");
    const totalElement = document.querySelector(".total");
    let totalAmount = 0;

    // Update Total Amount
    window.updateTotal = function () {
      const rows = expenseTable.querySelectorAll("tbody tr");
      totalAmount = 0;

      rows.forEach(row => {
        const amountInput = row.querySelector(".amount-input");
        const amount = parseFloat(amountInput.value) || 0;
        totalAmount += amount;
      });

      totalElement.textContent = `Total: ₹${totalAmount.toFixed(2)}`;
    };

    // Add Expense Row Dynamically
    addExpenseLink.addEventListener("click", function (event) {
      event.preventDefault();

      const newRow = expenseTable.insertRow(expenseTable.rows.length);
      newRow.innerHTML = `
        <td data-label="Date"><input type="date" name="Expense_Date" value="2025-12-25"></td>
        <td data-label="Expense Description"><textarea name="Expense_Description" placeholder="Expense Description" rows="2" cols="40" required></textarea></td>
        <td data-label="Category">
          <input type="text" id="Category" name="Category" placeholder="Category" style="width:90%;">
        </td>
        <td data-label="Amount"><input type="number" name="Amount" class="amount-input" placeholder="0.00" oninput="updateTotal()" required></td>
        <td><button class="remove-btn" style="background:#e8dbdb; border: none; color: red; font-size: 18px; cursor: pointer;">&times;</button></td>
      `;

      // Add listener for the new row's remove button
      const removeBtn = newRow.querySelector(".remove-btn");
      removeBtn.addEventListener("click", function () {
        newRow.remove();
        updateTotal();
      });
    });

    // Add Event Listener for Existing Remove Buttons
    document.querySelectorAll(".remove-btn").forEach(button => {
      button.addEventListener("click", function () {
        const row = button.closest("tr");
        row.remove();
        updateTotal();
      });
    });

    // Form Validation
    function validateForm() {
      const requiredFields = document.querySelectorAll('input[required], textarea[required]');
      let isValid = true;

      requiredFields.forEach((field) => {
        if (!field.value.trim()) {
          field.style.border = '2px solid red'; // Highlight the invalid field
          isValid = false;
        } else {
          field.style.border = ''; // Remove highlighting if valid
        }
      });

      if (!isValid) {
        alert("Please fill out all required fields.");
      }

      return isValid;
    }

    // Generate PDF with Full Content Visibility
    document.getElementById("download").addEventListener("click", function () {
      if (!validateForm()) return; // Validate form before generating PDF

      const { jsPDF } = window.jspdf;

      const container = document.querySelector(".container"); // Ensure all content is wrapped in .container
      const containerWidth = container.scrollWidth; // Full width of the container
      const containerHeight = container.scrollHeight; // Full height of the container

      const scale = 2; // Scale to improve resolution
      html2canvas(container, {
        scale: scale,
        useCORS: true,
        width: containerWidth, // Ensure full width is captured
        height: containerHeight, // Ensure full height is captured
        scrollY: 0, // Prevent scrolling issues
      }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");

        // Create a new jsPDF instance with landscape orientation if necessary
        const pdf = new jsPDF({
          orientation: containerWidth > containerHeight ? "landscape" : "portrait",
          unit: "px",
          format: [canvas.width, canvas.height],
        });

        // Add the canvas image to the PDF
        pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
        pdf.save("expense_report.pdf");
      }).catch((error) => {
        console.error("Error generating PDF:", error);
      });
    });
  });