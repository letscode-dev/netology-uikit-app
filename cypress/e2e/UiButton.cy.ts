const STORY_URL =
  "http://127.0.0.1:6006/iframe.html?id=ui-kit-uibutton--basic&viewMode=story";

describe("UiButton", () => {
  it("active", () => {
    cy.visit(STORY_URL);

    cy.contains("button", "Кнопка")
      .should("be.visible")
      .and("be.enabled")
      .click();
  });

  it("disabled", () => {
    cy.visit(STORY_URL + "&args=disabled:true");

    cy.contains("button", "Кнопка").should("be.visible").and("be.disabled");
  });

  it("theme", () => {
    cy.visit(STORY_URL + "&args=theme:outlined");

    cy.contains("button", "Кнопка").should("have.css", "border-style", "solid");
  });
});
