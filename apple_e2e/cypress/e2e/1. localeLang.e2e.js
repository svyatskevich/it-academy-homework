const homePage = require("../../pageobjects/homePage");
const localeLang = require("../../testData/localeLang.v1");
const localeSwitcher = require("../../pageobjects/components/localeSwitcher");
const { ATTR } = require("../../helpers/constants");
const { waitForVisible } = require("../../helpers/wait");

describe("Locale language", () => {
   beforeEach(() => {
      homePage.navigate("https://www.apple.com/");
      homePage.click(waitForVisible(localeSwitcher.closeButton));
   });

   it(`The countries HTML page should contain valid language in '${ATTR.XML_LANG}'`, () => {
      localeLang.forEach((locale) => {
         homePage.navigate(locale.href);
         homePage.getPageHTML().should("have.attr", ATTR.XML_LANG, locale.lang);
      });
   });
});