// DiagnosticCriteria.test.js

import React from "react";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import the jest-dom library
import DiagnosticCriteria from "./components/DiagnosticCriteria";
import userEvent from "@testing-library/user-event";

test("renders with react testing library in the document", () => {
  render(<DiagnosticCriteria />);
  const linkElement = screen.getByText(/Select Criteria/i);
  expect(linkElement).toBeInTheDocument();
});

it("should show success message when button is clicked", () => {
  render(<DiagnosticCriteria />);
  const buttonElement = screen.getByRole("textbox");
  userEvent.click(buttonElement);
});

describe("DiagnosticCriteria", () => {
  test("renders select criteria text", () => {
    render(<DiagnosticCriteria />);
    const selectCriteriaText = screen.getByText("Select Criteria");
    expect(selectCriteriaText).toBeInTheDocument();
  });

  test("opens popup when select criteria text is clicked", () => {
    render(<DiagnosticCriteria />);
    const selectCriteriaText = screen.getByText("Select Criteria");
    fireEvent.click(selectCriteriaText);
    const popupContent = screen.getByRole("textbox");
    expect(popupContent).toBeInTheDocument();
  });

  test("closes popup when outside area is clicked", () => {
    render(<DiagnosticCriteria />);
    const selectCriteriaButton = screen.getByText("Select Criteria");
    fireEvent.click(selectCriteriaButton);
    const outsideArea = screen.getByTestId("outside-area");
    fireEvent.click(outsideArea);
    const popupContent = screen.queryByRole("dialog");
    expect(popupContent).not.toBeInTheDocument();
  });

  test('closes the popup after clicking "Apply" button', async () => {
    // Render the component
    render(<DiagnosticCriteria />);

    // Open the popup
    const selectCriteria = screen.getByTestId("Select-Criteria");
    fireEvent.click(selectCriteria);

    // Wait for the "Apply" button to be present
    await waitFor(() => {
      expect(screen.getByText("Apply")).toBeInTheDocument();
    });

    //Find the "Apply" button
    const applyButton = screen.getByText("Apply");
    userEvent.click(applyButton);

    //Check if the popup is closed
    setTimeout(() => {
      const popup = screen.getByTestId("pop-up");
      expect(popup).not.toBeInTheDocument();
    }, 2000);
  });

  test("displays guide lines in the popup", async () => {
    render(<DiagnosticCriteria />);
    const selectCriteriaText = screen.getByText("Select Criteria");
    fireEvent.click(selectCriteriaText);
    await waitFor(() => {
      const guideLine = screen.getByText("Select diagnosis criteria");
      expect(guideLine).toBeInTheDocument();
    });
  });

  test('displays selected criteria in input box after clicking "Apply" button', async () => {
    render(<DiagnosticCriteria />);

    // Open the popup
    const selectCriteria = screen.getByTestId("Select-Criteria");
    fireEvent.click(selectCriteria);

    setTimeout(() => {
      // Select a guideline
      const guidelineItem = screen.getByText("Tree Data1");
      fireEvent.click(guidelineItem);

      // Select a criteria
      const criteriaItem = screen.getByText("Syncope");
      fireEvent.click(criteriaItem);

      // Click the "Apply" button
      fireEvent.click(screen.getByText("Apply"));
      // Assert that the selected criteria is displayed in the input box
      const inputBox = screen.getByRole("textbox", { name: "textbox" });
      expect(inputBox.value).toBe("Tree Data1 | Syncope"); // Replace with the expected input value
    }, 1000);
  });
  test("should select a guideline and criteria", async () => {
    render(<DiagnosticCriteria />);
    setTimeout(() => {
      // Find the button element
      // Click the button to open the popup
      const selectCriteria = screen.getByTestId("Select-Criteria");
      fireEvent.click(selectCriteria);

      // Find a guideline item
      const guidelineItem = screen.getByText("Tree Data1");
      fireEvent.click(guidelineItem);

      // Find a criteria item
      const criteriaItem = screen.getByText("Syncope");
      fireEvent.click(criteriaItem);

      // Find the apply button
      fireEvent.click(screen.getByText("Apply"));

      // Assert that the selected guideline and criteria are displayed in the button text
      expect(screen.getByText("Tree Data1")).toBeInTheDocument();
      expect(screen.getByText("Syncope")).toBeInTheDocument();
    }, 1000);
  });
  test("Dialog box should open when handlePopupOpen is called", async () => {
    // Render the component
    render(<DiagnosticCriteria />);

    // Get the select criteria element
    const selectCriteriaElement = screen.getByTestId("Select-Criteria");
    fireEvent.click(selectCriteriaElement);

    setTimeout(() => {
      const guidelineItem = screen.getByText("Tree Data2");
      fireEvent.click(guidelineItem);

      const loaderBtn = screen.getByTestId("ok-button");
      userEvent.click(loaderBtn);
      //Check if the dialog box is open
      const dialogBoxElement = screen.getByTestId("myModal");
      expect(dialogBoxElement).toBeInTheDocument();
    }, 1000);
  });
  test("displays dialog box with correct content when dialogbox is true", async () => {
    render(<DiagnosticCriteria />);
    const selectCriteriaText = screen.getByTestId("Select-Criteria");
    fireEvent.click(selectCriteriaText);

    setTimeout(() => {
      const guidelineItem = screen.getByText("Tree Data2");
      fireEvent.click(guidelineItem);

      const loaderBtn = screen.getByTestId("ok-button");
      userEvent.click(loaderBtn);
    }, 1000);

    await waitFor(() => {
      const dialogBox = screen.queryByTestId("myModal");
      expect(dialogBox).toBeInTheDocument();
    });
  });
});
