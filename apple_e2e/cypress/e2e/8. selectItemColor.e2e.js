const homePage = require("../../pageobjects/homePage");
const storePage = require("../../pageobjects/storePage");
const productPage = require("../../pageobjects/productPage");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const globalNavMenu = require("../../pageobjects/components/globalNavMenu");
const availabilityPopup = require("../../pageobjects/components/pop-up/availabilityPopup");
const { LINK_NAME } = require("../../helpers/constants");
const { waitForExist, waitForVisible } = require("../../helpers/wait");

describe("Select item color", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      homePage.click(waitForVisible(localeSwitcher.closeButton));
      homePage.click(globalNavMenu.getNavMenuLinks(LINK_NAME.STORE));
      storePage.click(waitForExist(storePage.getNextCardsScrollerButton(7)));
      storePage.click(storePage.getCardsScrollerItem(7, 6));
   });

   it("The selected product color should contain clicked item color in color selection form", () => {
      productPage.click(waitForExist(productPage.getSelectionFormColorItem(2)));
      productPage.invokeText(waitForVisible(productPage.getSelectionFormColorItem(2))).then((clickedColor) => {
            productPage.invokeText(productPage.selectedColor).then((selectedColor) => {
                  expect(selectedColor).to.contain(clickedColor);
               });
         });
   });

   it("The product info in Availability popup should contain selected product color", () => {
      productPage.click(productPage.checkAvailabilityButton);
      productPage.click(availabilityPopup.getAvailabilityColorNavItem(2), { force: true });
      productPage.invokeText(availabilityPopup.getAvailabilityColorNavItem(2)).then((selectedColor) => {
            productPage.invokeText(availabilityPopup.availabilityProductInfo).then((productInfo) => {
                  expect(productInfo).to.contain(selectedColor);
               });
         });
   });
});